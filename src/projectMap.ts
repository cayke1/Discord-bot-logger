import { env } from "./config/env";

export const projectChannelMap: Record<string, string> = {
  sereno: env.serenoChannel,
};
