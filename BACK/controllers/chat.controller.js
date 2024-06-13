// import { response } from "express";
import OpenAI from "openai";
import { ENV } from "../config/env.js";

const openai = new OpenAI({
  organization: " org-ubVO1MO768FSDwU3GR9tlAPr",
  project: " proj_29CG0arYtkKZEuVQVZtsSQ35",
  apiKey: ENV.OPEN_AI,
});

// Exemple

export const chat = async (req, res) => {
  try {
    const { question, messages } = req.body;

    // Check if question is present in request
    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    const history = [];
    messages.forEach((message) => {
      history.push({ role: "user", content: message.user });
      history.push({ role: "assistant", content: message.assistant });
    });

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        ...history,
        { role: "user", content: question },
      ],
      model: "gpt-3.5-turbo",
    });

    res.status(200).json({ completion });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ error: "Internal server error.", message: e.message });
  }
};

// export default {
//   chat,
// };

// export const chat = async (req, res) => {
//   try {
//     const { question } = req.body;

//     // Verifier si la question présente dans la requete.
//     if (!question)
//       return res.status(400).json({ error: "Question is required" });

//     const completion = await openai.chat.completions.create({
//       messages: [
//         { role: "system", content: "You are a helpful assistant." },
//         { role: "user", content: question },
//       ],
//       model: "gpt-3.5-turbo",
//     });

//     res.status(200).json(completion.choices[0].message.content);
//   } catch (e) {
//     res
//       .status(500)
//       .json({ error: "Internal server error.", message: e.message });
//   }
// };

// export { get };
