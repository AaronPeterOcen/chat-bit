import express from "express";
import cors from "cors";
import { OpenAI } from "openai";

const app = express();
const port = process.env.PORT || 3005;
// assigning apikey
const apikey = process.env.VITE_OPEN_AI_KEY;
const openai = new OpenAI({ apiKey: apikey });

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

app.post("/chatbot", async (req, res) => {
  const { question } = req.body;

  const response = await openai.chat.completions.create({
    messages: [
      // We give the chatbot a role with some content to determine how it will behave
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      // We ask the chatbot to generate an answer based on the user's question
      // Remember, this question will come from the frontend
      {
        role: "user",
        content: question,
      },
    ],
    model: "gpt-3.5",
    max_tokens: 300,
  });
  res.send(response.choices[0].message.content);
});
