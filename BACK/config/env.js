import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT,
  OPEN_AI: process.env.OPEN_AI,
  OPEN_AI_organization: process.env.OPEN_AI_organization,
  OPEN_AI_project: process.env.OPEN_AI_project,
};
