'use server';

/**
 * @fileOverview An AI agent to classify waste based on an image.
 *
 * - classifyWasteImage - A function that handles the waste classification process.
 * - ClassifyWasteImageInput - The input type for the classifyWasteImage function.
 * - ClassifyWasteImageOutput - The return type for the classifyWasteImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ClassifyWasteImageInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a waste item, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'"
    ),
});
export type ClassifyWasteImageInput = z.infer<typeof ClassifyWasteImageInputSchema>;

const ClassifyWasteImageOutputSchema = z.object({
  wasteType: z.string().describe('The type of waste item in the image.'),
  confidence: z
    .number()
    .describe('The confidence level of the waste type classification (0-1).'),
});
export type ClassifyWasteImageOutput = z.infer<typeof ClassifyWasteImageOutputSchema>;

export async function classifyWasteImage(
  input: ClassifyWasteImageInput
): Promise<ClassifyWasteImageOutput> {
  return classifyWasteImageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'classifyWasteImagePrompt',
  input: {schema: ClassifyWasteImageInputSchema},
  output: {schema: ClassifyWasteImageOutputSchema},
  prompt: `You are an AI waste classifier. Analyze the image and determine the type of waste it is.

  Respond with the waste type and the confidence level (0-1).

  Here is the image of the waste:
  {{media url=photoDataUri}}`,
});

const classifyWasteImageFlow = ai.defineFlow(
  {
    name: 'classifyWasteImageFlow',
    inputSchema: ClassifyWasteImageInputSchema,
    outputSchema: ClassifyWasteImageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
