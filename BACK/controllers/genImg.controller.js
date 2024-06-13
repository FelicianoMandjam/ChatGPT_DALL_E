import OpenAI from "openai";
import { ENV } from "../config/env.js";

const openai = new OpenAI({
  organization: ENV.OPEN_AI_organization,
  project: ENV.OPEN_AI_project,
  apiKey: ENV.OPEN_AI,
});

export const genImg = async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    console.log(response);
    const image_url = response.data[0].url;
    res.status(200).json(image_url);
  } catch (e) {
    console.log(e.message);
    res.status(500).json("probleme generation image");
  }
};
