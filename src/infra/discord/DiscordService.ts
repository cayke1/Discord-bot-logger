import { Client, GatewayIntentBits, TextChannel } from "discord.js";
import { Log } from "../../domain/Log";
import { projectChannelMap } from "../../projectMap";
import { formatLogMessage } from "../../utils/formatLogMessage";

export class DiscordService {
  private client: Client;

  constructor() {
    this.client = new Client({ intents: [GatewayIntentBits.Guilds] });
  }

  async start(token: string) {
    return new Promise<void>((resolve, reject) => {
      this.client.once("ready", () => {
        console.log(`✅ Bot online como ${this.client.user?.tag}`);
        resolve();
      });

      this.client.login(token).catch(reject);
    });
  }

  async sendLog(log: Log): Promise<void> {
    const channelId = projectChannelMap[log.projectID];
    if (!channelId)
      throw new Error(`Canal não mapeado para o projeto: ${log.projectID}`);

    const channel = await this.client.channels.fetch(channelId);
    if (!channel || !(channel instanceof TextChannel)) {
      throw new Error(`Canal inválido ou não é de texto: ${channelId}`);
    }

    let content = formatLogMessage(log)

    await channel.send(content);
  }
}
