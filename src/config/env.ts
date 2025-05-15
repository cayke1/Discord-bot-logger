import dotenv from "dotenv";
dotenv.config();

export const env = {
  discordToken: process.env.DISCORD_BOT_TOKEN || "",
  port: Number(process.env.PORT) || 3000,
};
