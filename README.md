# Discord Log Bot
<div align="center">

  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
  
  <img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" />
  
  <img src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" />
</div>

*[Versão em Português](README.pt.md)*

## 📝 About
Discord Log Bot is an application that allows you to send logs from different projects to specific Discord channels. Perfect for teams who want to centralize their logs in one place, with real-time visualization through Discord.

## ✨ Features
- **Project Management**: Create and manage projects with specific Discord channels
- **API for Sending Logs**: Easily send logs from any application via HTTP
- **Log Levels**: Support for different levels (info, warn, error, debug)
- **Rich Formatting**: Logs formatted clearly and visually rich in Discord
- **Route Information**: Includes details of HTTP method, route, and response status
- **Persistent Storage**: Uses Redis to store project configurations

## 🚀 Installation
### Prerequisites
- Node.js 18+
- A Discord bot with token
- Upstash Redis account (or other Redis)

### Local Installation

```bash
# Clone the repository
git clone https://github.com/your-username/discord-log-bot.git
cd discord-log-bot

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit the .env file with your credentials

# Start in development mode
npm run dev

# For production build
npm run build
```

### Docker

```bash
# Build the image
docker build -t discord-log-bot .

# Run the container
docker run -p 3005:3005 \
  -e DISCORD_BOT_TOKEN=your_token \
  -e UPSTASH_REDIS_REST_URL=your_url \
  -e UPSTASH_REDIS_REST_TOKEN=your_token \
  discord-log-bot
```

## ⚙️ Configuration
Create a `.env` file with the following variables:
```bash
DISCORD_BOT_TOKEN=your_bot_token
PORT=3005
UPSTASH_REDIS_REST_URL=redis_url
UPSTASH_REDIS_REST_TOKEN=redis_token
```

## 📚 API Usage
### Send Log

```bash
curl -X POST http://localhost:3005/logs \
  -H "Content-Type: application/json" \
  -d '{
    "projectID": "project-id",
    "level": "info",
    "message": "Log test",
    "route": "/api/users",
    "method": "GET",
    "response_status": 200
  }'
```

### Manage Projects
#### Create Project
```bash
curl -X POST http://localhost:3005/projects \
  -H "Content-Type: application/json" \
  -d '{
    "name": "My Project",
    "channelID": "discord-channel-id"
  }'
```

#### List Projects
```bash
curl -X GET http://localhost:3005/projects
```

#### Get Project
```bash
curl -X GET http://localhost:3005/projects/project-id
```

#### Delete Project
```bash
curl -X DELETE http://localhost:3005/projects/project-id
```

## 📊 Log Examples
Logs in Discord will be formatted as follows:
```bash
🔵 INFO | `10/17/2023, 15:30:45`

📦 Project: `My Project`

📝 Message:
> User authenticated successfully


POST /api/login -> 200
```

## 🔄 CI/CD
The project includes GitHub Actions for automated CI/CD:
- Building the Docker image
- Push to Docker Hub
- Automatic deployment to VPS when pushing to the main branch

## 📋 Architecture
The project follows Clean Architecture principles:
- /app: Application use cases
- /domain: Domain entities and rules
- /infra: Infrastructure implementations (HTTP, Discord, Redis)
- /utils: Utilities and helper functions

## 🤝 Contributing
Contributions are welcome! Feel free to open issues and pull requests.

<div align="center"> <sub>Made with ❤️ to simplify application monitoring</sub></div>