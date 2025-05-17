
'use server';

/**
 * @fileOverview An AI agent that provides structured disposal advice for waste items.
 *
 * - getDisposalAdvice - A function that handles the process of getting disposal advice.
 * - GetDisposalAdviceInput - The input type for the getDisposalAdvice function.
 * - GetDisposalAdviceOutput - The return type for the getDisposalAdvice function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetDisposalAdviceInputSchema = z.object({
  query: z.string().describe('The waste item or type of waste to get advice for.'),
  region: z.string().optional().describe('The user\'s region (e.g., "North America", "London, UK", "Global (Default)").'),
});
export type GetDisposalAdviceInput = z.infer<typeof GetDisposalAdviceInputSchema>;

const DisposalOptionSchema = z.object({
  method: z.string().describe("The disposal method, e.g., 'Recycling', 'General Waste', 'Compost', 'Hazardous Waste Collection', 'E-waste Drop-off', 'Donation'."),
  instructions: z.string().describe("Clear, step-by-step instructions for this disposal method."),
  binColor: z.string().optional().describe("Recommended bin color if applicable (e.g., Blue, Green, Black, Red). Clarify that this can vary by locality."),
  notes: z.string().optional().describe("Additional important notes, e.g., 'Rinse container', 'Remove lid', 'Check local schedule', 'Batteries must be removed'."),
});

const GetDisposalAdviceOutputSchema = z.object({
  itemName: z.string().describe("The common name of the waste item for which advice is being provided, derived from the user's query."),
  disposalOptions: z.array(DisposalOptionSchema).min(1).describe("A list of recommended disposal options. Prioritize the best/most eco-friendly option first."),
  regionalConsiderations: z.string().optional().describe("Specific advice, warnings, or facility information relevant to the user's region for this item. If no region is specified or no specific regional advice is available, state that the advice is general and recommend checking local guidelines."),
  ecoFriendlyAlternatives: z.array(z.string()).optional().describe("Suggestions for more eco-friendly alternatives to the item or ways to reduce this type of waste."),
  generalTips: z.array(z.string()).optional().describe("General tips related to disposing of this item or similar items safely and effectively."),
  suggestedQueries: z.array(z.string()).optional().describe("A list of 2-3 short, relevant follow-up questions (max 5 words each) the user might ask based on the current query and advice provided. These should be phrased as questions a user would type.")
});
export type GetDisposalAdviceOutput = z.infer<typeof GetDisposalAdviceOutputSchema>;

export async function getDisposalAdvice(input: GetDisposalAdviceInput): Promise<GetDisposalAdviceOutput> {
  return getDisposalAdviceFlow(input);
}

const getDisposalAdvicePrompt = ai.definePrompt({
  name: 'getDisposalAdvicePrompt',
  input: {schema: GetDisposalAdviceInputSchema},
  output: {schema: GetDisposalAdviceOutputSchema},
  prompt: `You are Waste Wizard, an AI assistant specializing in providing detailed and structured waste disposal advice.
Your goal is to help users dispose of their waste items responsibly and in an environmentally friendly manner, considering their region.

The user will provide a waste item (query) and optionally a region.
You MUST generate a response that strictly adheres to the JSON schema provided for the output.

User Query (Waste Item): {{{query}}}
Region: {{{region}}}

Here's how to populate the fields in the JSON output:
- \`itemName\`: The common name of the waste item derived from the user's query.
- \`disposalOptions\`:
    - This should be an array of one or more disposal methods.
    - Prioritize the most environmentally friendly and common methods first.
    - For each \`DisposalOptionSchema\` object:
        - \`method\`: Clearly state the disposal method (e.g., "Recycling", "General Waste", "Compost", "Hazardous Waste Collection", "E-waste Drop-off", "Donation").
        - \`instructions\`: Provide clear, actionable, step-by-step instructions. Be specific (e.g., "Empty and rinse the container. Place it loosely in the recycling bin.").
        - \`binColor\` (optional): If a specific bin color is commonly associated with this method in many areas, mention it (e.g., "Blue" for recycling, "Green" for organics). Qualify that this can vary by locality.
        - \`notes\` (optional): Include any critical notes, such as "Do not bag recyclables," "Check with local council for collection days," or "Requires special handling due to hazardous components."
- \`regionalConsiderations\` (optional):
    - If a specific region (other than 'Global (Default)') is provided, try to include advice pertinent to that region. This could involve mentioning common practices, types of facilities (e.g., "civic amenity sites" in the UK, "transfer stations" in the US), or specific programs if known.
    - If the region is 'Global (Default)' or if specific regional information is not readily available for the item, state that the advice is general and strongly recommend the user to check with their local municipality or waste management authority for precise local regulations.
- \`ecoFriendlyAlternatives\` (optional):
    - Suggest 1-3 practical alternatives to using the item or ways to reduce its waste impact (e.g., for plastic bottles: "Use a reusable water bottle.").
- \`generalTips\` (optional):
    - Offer 1-2 general tips related to the disposal of this item or waste management in general (e.g., "Always check for recycling symbols on packaging.").
- \`suggestedQueries\` (optional):
    - Generate 2-3 short (max 5 words each), relevant follow-up questions a user might ask after receiving this advice. Frame them as if the user is typing them. For example: "More about composting?", "Hazardous waste locations?", "Alternatives for plastic bags?".

Be factual, concise, and helpful. Your tone should be encouraging and informative. Ensure the advice is safe and promotes sustainability.
If the query is unclear or too broad, ask for clarification or provide general advice on common interpretations.
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
    if (!output) {
      throw new Error("Failed to get disposal advice from AI.");
    }
    return output;
  }
);
