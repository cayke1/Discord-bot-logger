import dotenv from "dotenv";
dotenv.config();

export const env = {
  discordToken: process.env.DISCORD_BOT_TOKEN || "",
  port: Number(process.env.PORT) || 3005,
  upstashRedisUrl: process.env.UPSTASH_REDIS_REST_URL || "",
  upstashRedisToken: process.env.UPSTASH_REDIS_REST_TOKEN || "",
};
