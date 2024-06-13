import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT,
  OPEN_AI: process.env.OPEN_AI,
};
