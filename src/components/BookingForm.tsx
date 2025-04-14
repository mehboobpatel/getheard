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
import { useToast } from "@/hooks/use-toast"
import { summarizeBookingForm } from '@/ai/flows/summarize-booking-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const bookingSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  feelingLately: z.string().min(1, {
    message: "Please select how you've been feeling.",
  }),
  onYourMind: z.string().min(10, {
    message: "Please tell us what's on your mind.",
  }),
  canTalkFreely: z.string(),
  whatToGetOutOfCall: z.array(z.string()).min(1, {
    message: "Please select at least one option.",
  }),
  emotionalWellbeingRating: z.number(),
  spokenToProfessional: z.string(),
  helpsFeelBetter: z.string(),
  anythingElse: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the consent to proceed.",
  }),
})

const BookingForm: React.FC = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      feelingLately: "",
      onYourMind: "",
      canTalkFreely: "",
      whatToGetOutOfCall: [],
      emotionalWellbeingRating: 5,
      spokenToProfessional: "",
      helpsFeelBetter: "",
      anythingElse: "",
      consent: false,
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
          name="email"
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
          name="feelingLately"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How have you been feeling lately?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a feeling" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Anxious">Anxious</SelectItem>
                  <SelectItem value="Lonely">Lonely</SelectItem>
                  <SelectItem value="Overwhelmed">Overwhelmed</SelectItem>
                  <SelectItem value="Confused">Confused</SelectItem>
                  <SelectItem value="Neutral">Neutral</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="onYourMind"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What’s something that’s been on your mind a lot these days?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe what's on your mind"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="canTalkFreely"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you have someone in your life you can talk to freely?</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="yes" />
                    </FormControl>
                    <FormLabel>Yes</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="sometimes" />
                    </FormControl>
                    <FormLabel>Sometimes</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="no" />
                    </FormControl>
                    <FormLabel>No</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="whatToGetOutOfCall"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What would you like to get out of this call?</FormLabel>
              <div className="flex flex-col space-y-2">
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value.includes("listen")}
                      onCheckedChange={(checked) => {
                        return checked ? field.onChange([...field.value, "listen"]) : field.onChange(field.value.filter((value) => value !== "listen"))
                      }}
                    />
                  </FormControl>
                  <FormLabel>Just want someone to listen</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value.includes("emotionalSupport")}
                      onCheckedChange={(checked) => {
                        return checked ? field.onChange([...field.value, "emotionalSupport"]) : field.onChange(field.value.filter((value) => value !== "emotionalSupport"))
                      }}
                    />
                  </FormControl>
                  <FormLabel>Need emotional support</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value.includes("advice")}
                      onCheckedChange={(checked) => {
                        return checked ? field.onChange([...field.value, "advice"]) : field.onChange(field.value.filter((value) => value !== "advice"))
                      }}
                    />
                  </FormControl>
                  <FormLabel>Seeking advice or clarity</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value.includes("vent")}
                      onCheckedChange={(checked) => {
                        return checked ? field.onChange([...field.value, "vent"]) : field.onChange(field.value.filter((value) => value !== "vent"))
                      }}
                    />
                  </FormControl>
                  <FormLabel>Feeling low, need to vent</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value.includes("unsure")}
                      onCheckedChange={(checked) => {
                        return checked ? field.onChange([...field.value, "unsure"]) : field.onChange(field.value.filter((value) => value !== "unsure"))
                      }}
                    />
                  </FormControl>
                  <FormLabel>Not sure, but I need someone</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value.includes("other")}
                      onCheckedChange={(checked) => {
                        return checked ? field.onChange([...field.value, "other"]) : field.onChange(field.value.filter((value) => value !== "other"))
                      }}
                    />
                  </FormControl>
                  <FormLabel>Other</FormLabel>
                </FormItem>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="emotionalWellbeingRating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>On a scale of 1 to 10, how would you rate your current emotional well-being?</FormLabel>
              <FormControl>
                <Slider
                  defaultValue={[field.value]}
                  max={10}
                  min={1}
                  step={1}
                  onValueChange={(value) => field.onChange(value[0])}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="spokenToProfessional"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Have you ever spoken to a professional (counselor, therapist) before?</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="yes" />
                    </FormControl>
                    <FormLabel>Yes</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="no" />
                    </FormControl>
                    <FormLabel>No</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="preferNotToSay" />
                    </FormControl>
                    <FormLabel>Prefer not to say</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="helpsFeelBetter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What’s one thing that helps you feel better on difficult days?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe what helps you feel better"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="anythingElse"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Is there anything you'd like us to know before the call? (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Anything else you'd like to share?"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Do you agree to have a private, non-judgmental conversation with a peer supporter?
                </FormLabel>
                <FormDescription>
                  Yes, I agree
                </FormDescription>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={!form.formState.isValid} className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;
