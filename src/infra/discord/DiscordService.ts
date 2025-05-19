import { Client, GatewayIntentBits, TextChannel } from "discord.js";
import { Log } from "../../domain/Log";
import { formatLogMessage } from "../../utils/formatLogMessage";
import { getProjectById } from "../../lib/projects";

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
    const project = await getProjectById(log.projectID);
    if (!project) {
      throw new Error(`Projeto não encontrado: ${log.projectID}`);
    }
    const channelId = project.channelID;
    if (!channelId)
      throw new Error(`Canal não mapeado para o projeto: ${log.projectID}`);

    const channel = await this.client.channels.fetch(channelId);
    if (!channel || !(channel instanceof TextChannel)) {
      throw new Error(`Canal inválido ou não é de texto: ${channelId}`);
    }

    const logMessage = {...log, projectName: project.name};
    let content = formatLogMessage(logMessage);

    await channel.send(content);
  }
}
