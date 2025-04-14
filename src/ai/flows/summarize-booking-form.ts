'use server';

/**
 * @fileOverview Summarizes the user's booking form submission, identifying their emotional state and needs.
 *
 * - summarizeBookingForm - A function that takes booking details and returns a summary of the user's emotional state and needs.
 * - SummarizeBookingFormInput - The input type for the summarizeBookingForm function.
 * - SummarizeBookingFormOutput - The return type for the summarizeBookingForm function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';
import {Booking} from '@/services/booking';

const SummarizeBookingFormInputSchema = z.object({
  booking: z.object({
    name: z.string().describe('The user\'s name.'),
    contact: z.string().describe('The user\'s contact information (e.g., email or phone number).'),
    questions: z.string().describe('The user\'s questions or concerns.'),
  }).describe('The booking information provided by the user.'),
});

export type SummarizeBookingFormInput = z.infer<typeof SummarizeBookingFormInputSchema>;

const SummarizeBookingFormOutputSchema = z.object({
  summary: z.string().describe('A summary of the user\'s emotional state and needs based on their form submission.'),
});

export type SummarizeBookingFormOutput = z.infer<typeof SummarizeBookingFormOutputSchema>;

export async function summarizeBookingForm(input: SummarizeBookingFormInput): Promise<SummarizeBookingFormOutput> {
  return summarizeBookingFormFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeBookingFormPrompt',
  input: {
    schema: z.object({
      booking: z.object({
        name: z.string().describe('The user\'s name.'),
        contact: z.string().describe('The user\'s contact information (e.g., email or phone number).'),
        questions: z.string().describe('The user\'s questions or concerns.'),
      }).describe('The booking information provided by the user.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A summary of the user\'s emotional state and needs based on their form submission.'),
    }),
  },
  prompt: `You are an AI assistant designed to summarize user input from a booking form for an emotional support platform.

  Analyze the \"questions\" field from the \"booking\" object provided below, and provide a summary of the user's emotional state and needs. Focus on identifying the key issues or concerns the user is expressing, and the overall sentiment or feeling conveyed in their message.

  Booking Details:
  Name: {{{booking.name}}}
  Contact: {{{booking.contact}}}
  Questions: {{{booking.questions}}}

  Summary:
`,
});

const summarizeBookingFormFlow = ai.defineFlow<
  typeof SummarizeBookingFormInputSchema,
  typeof SummarizeBookingFormOutputSchema
>({
  name: 'summarizeBookingFormFlow',
  inputSchema: SummarizeBookingFormInputSchema,
  outputSchema: SummarizeBookingFormOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});
