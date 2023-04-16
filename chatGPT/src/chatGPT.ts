import { Configuration, OpenAIApi } from "openai";
import { OPENAI_API_KEY } from "./env";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function generateText(prompt: string): Promise<string> {
  if (!configuration.apiKey) {
    alert("erreur de clé")
  }

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0.6,
    max_tokens: 2048
  });

  return response.data.choices[0].text!
}

// Exemple d'utilisation :
//const text = await generateText('Connais tu le jeu Stellaris ?');
//console.log(text); // Résultat : "Je vais bien, merci. Et vous ?"