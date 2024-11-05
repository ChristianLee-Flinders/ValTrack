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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PasswordHash } from "node-appwrite";
import { signIn, signUp } from "@/lib/actions/user.actions";
import { Loader2 } from "lucide-react";
import CustomInput from "../custom-input";
import { stringify } from "querystring";


interface AuthFormProps {
  type: 'sign-in' | 'sign-up';
}


const AuthForm = ({ type }: { type: string }) => {
  
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ''
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      //Sign Up with appwrite
      if(type === 'sign-up'){
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          email: data.email,
          password: data.password!
        }
        const newUser = await signUp(userData);

        setUser(newUser);
      }

      //Sign In with appwrite
      if(type === 'sign-in'){
        console.log("Signing In...")
        const response = await signIn({
          email: data.email,
          password: data.password,
        })
        if(response) router.push('/');
        console.log("After login")
      }
    } catch(error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-[20%] w-[50%]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {type === 'sign-up' && (
            <>
              <div className="flex gap-4">
                <CustomInput control={form.control} name='firstName' label="First Name" placeholder='Enter your first name' />
                <CustomInput control={form.control} name='lastName' label="Last Name" placeholder='Enter your first name' />
              </div>
            </>
          )}

          <CustomInput control={form.control} name='email' label="Email" placeholder='Enter your email' />

          <CustomInput control={form.control} name='password' label="Password" placeholder='Enter your password' />

          <div className="flex flex-col gap-4">
            <Button type="submit" disabled={isLoading} className="form-btn">
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> &nbsp;
                  Loading...
                </>
              ) : type === 'sign-in' 
                ? 'Sign In' : 'Sign Up'}
            </Button>
          </div>
        </form>
      </Form>
      <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal text-gray-600">
          {type === 'sign-in'
          ? "Don't have an account?"
          : "Already have an account?"}
        </p>
        <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
          {type === 'sign-in' ? 'Sign up' : 'Sign in'}
        </Link>
      </footer>
    </div>
  )
}

export default AuthForm