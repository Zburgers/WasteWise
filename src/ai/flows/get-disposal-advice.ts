'use server';

/**
 * @fileOverview An AI agent that provides disposal advice for waste items.
 *
 * - getDisposalAdvice - A function that handles the process of getting disposal advice.
 * - GetDisposalAdviceInput - The input type for the getDisposalAdvice function.
 * - GetDisposalAdviceOutput - The return type for the getDisposalAdvice function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetDisposalAdviceInputSchema = z.object({
  query: z.string().describe('The query about waste disposal.'),
  region: z.string().optional().describe('The region of the user.'),
});
export type GetDisposalAdviceInput = z.infer<typeof GetDisposalAdviceInputSchema>;

const GetDisposalAdviceOutputSchema = z.object({
  advice: z.string().describe('The disposal advice for the waste item.'),
});
export type GetDisposalAdviceOutput = z.infer<typeof GetDisposalAdviceOutputSchema>;

export async function getDisposalAdvice(input: GetDisposalAdviceInput): Promise<GetDisposalAdviceOutput> {
  return getDisposalAdviceFlow(input);
}

const getDisposalAdvicePrompt = ai.definePrompt({
  name: 'getDisposalAdvicePrompt',
  input: {schema: GetDisposalAdviceInputSchema},
  output: {schema: GetDisposalAdviceOutputSchema},
  prompt: `You are Waste Wizard, an expert in eco-friendly waste disposal, recycling, and sustainability. You will answer user questions about waste disposal and recycling, providing actionable disposal advice that is concise, friendly, and accurate to the user's region.

User Query: {{{query}}}

Region: {{{region}}}
`,
});

const getDisposalAdviceFlow = ai.defineFlow(
  {
    name: 'getDisposalAdviceFlow',
    inputSchema: GetDisposalAdviceInputSchema,
    outputSchema: GetDisposalAdviceOutputSchema,
  },
  async input => {
    const {output} = await getDisposalAdvicePrompt(input);
    return output!;
  }
);
