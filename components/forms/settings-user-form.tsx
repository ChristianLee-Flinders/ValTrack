"use client"

import { settingsUserFormSchema } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export function SettingsUserForm() {

  //Form Definition  
  const form = useForm<z.infer<typeof settingsUserFormSchema>>({
    resolver: zodResolver(settingsUserFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  })

  //Submit Handler
  function onSubmit(values: z.infer<typeof settingsUserFormSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="form-row">
            <div className="form-row-label">
                <p>Name *</p>
            </div>
            <div className="form-row-item">
            <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input 
                                placeholder="Christian" 
                                {...field} 
                                className="w-64 p-3" // Adjust width and padding
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input 
                                placeholder="Lee-Flinders" 
                                {...field} 
                                className="w-64 p-3" // Adjust width and padding
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            </div>
        </div>
    </form>

    </Form>
  )
}
