"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea";
import { Booking } from '@/services/booking';
import { useToast } from "@/hooks/use-toast"
import { summarizeBookingForm } from '@/ai/flows/summarize-booking-form';

const bookingSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  contact: z.string().email({
    message: "Please enter a valid email address.",
  }),
  questions: z.string().min(10, {
    message: "Please describe your questions/concerns with at least 10 characters.",
  }),
})

const BookingForm: React.FC = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      contact: "",
      questions: "",
    },
  })

  async function onSubmit(values: z.infer<typeof bookingSchema>) {
    try {
      // TODO: call Server Action here to persist booking and summarize with GenAI.
      console.log("Form submit:", values);
      const aiSummary = await summarizeBookingForm({ booking: values });
      console.log("AI Summary: ", aiSummary);

      toast({
        title: "Booking request submitted!",
        description: "We'll get back to you soon.",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your booking request.",
      })
    }
  }

  return (
    <section className="py-12 bg-BFFCC6 w-full">
      <h2 className="text-3xl font-semibold text-center mb-8">Book a Free Call</h2>
      <div className="max-w-md mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="questions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Questions/Concerns</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your questions or concerns"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-FFB347 text-white">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default BookingForm;
