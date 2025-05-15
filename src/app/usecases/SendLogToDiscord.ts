import { Log } from "../../domain/Log";
import { DiscordService } from "../../infra/discord/DiscordService";

export class SendLogToDiscord {
  constructor(private discordService: DiscordService) {}

  async execute(log: Log): Promise<void> {
    await this.discordService.sendLog(log);
  }
}
