"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authFormSchema } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { account } from "@/lib/appwrite";
import Link from "next/link";


interface AuthFormProps {
  type: 'sign-in' | 'sign-up';
}

type AuthFormData = z.infer<typeof authFormSchema>;

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema), // Correct schema reference
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: AuthFormData) => {
    try {
      if (type === 'sign-up') {
        const response = await account.create('unique()', data.email, data.password);
        console.log("User Signed Up: ", response);
      } else {
        console.log("Logging in...");
        const response = await account.createEmailPasswordSession(data.email, data.password);
        console.log("User Signed In: ", response);
      }
    } catch (error) {
      console.error("Authentication Error", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{type === 'sign-up' ? 'Register' : 'Login'}</Button>
        {type === 'sign-up' ? (
          <p className="text-sm text-gray-600">
            Already have an account? <Link href="/sign-in" className="text-blue-500">Sign In</Link>
          </p>
        ) : (
          <p className="text-sm text-gray-600">
            Don't have an account? <Link href="/sign-up" className="text-blue-500">Sign Up</Link>
          </p>
        )}
      </form>
    </Form>
  )
}

export default AuthForm