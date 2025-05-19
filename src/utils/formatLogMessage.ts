import { Log, LogLevel } from '../domain/Log';

function getEmojiForLevel(level: LogLevel): string {
  switch (level) {
    case 'info':
      return '🔵';
    case 'warn':
      return '🟠';
    case 'error':
      return '🔴';
    case 'debug':
      return '🛠️';
    default:
      return 'ℹ️';
  }
}

function formatTimestamp(timestamp?: string): string {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  return date.toLocaleString('pt-BR', { timeZone: 'UTC' });
}

export function formatLogMessage(log: Log): string {
  const emoji = getEmojiForLevel(log.level);
  const timestamp = formatTimestamp(log.timestamp);

  const header = `${emoji} **${log.level.toUpperCase()}** ${timestamp ? `| \`${timestamp}\`` : ''}`;
  const projectLine = `📦 Projeto: \`${log.projectName}\``;
  const messageLine = `📝 Mensagem:\n> ${log.message}`;

  let routeBlock = '';
  if (log.route || log.method || log.response_status) {
    const method = log.method ?? 'GET';
    const route = log.route ?? '/';
    const status = log.response_status ?? 200;

    routeBlock = `\n\`\`\`rota\n${method} ${route} -> ${status}\n\`\`\``;
  }

  return [header, projectLine, messageLine, routeBlock].join('\n\n');
}
