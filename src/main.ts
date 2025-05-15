import { SendLogToDiscord } from "./app/usecases/SendLogToDiscord";
import { env } from "./config/env";
import { DiscordService } from "./infra/discord/DiscordService";
import { createServer } from "./infra/http/server";

async function bootstrap() {
  const discordService = new DiscordService();
  await discordService.start(env.discordToken);

  const usecase = new SendLogToDiscord(discordService);
  const app = createServer(usecase);
  app.listen(env.port, () => {
    console.log(`🚀 Server running on http://localhost:${env.port}`);
  });
}

bootstrap().catch((err) => {
  console.error("Error starting the server:", err);
  process.exit(1);
});
