
# Discord Log Bot
<div align="center">

  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
  
  <img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" />
  
  <img src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" />
</div>


## 📝 Sobre
Discord Log Bot é uma aplicação que permite enviar logs de diferentes projetos para canais específicos no Discord. Perfeito para equipes que desejam centralizar seus logs em um só lugar, com visualização em tempo real através do Discord.

## ✨ Recursos
- **Gerenciamento de Projetos**: Crie e gerencie projetos com canais específicos no Discord
- **API para Envio de Logs**: Envie logs facilmente de qualquer aplicação via HTTP
- **Níveis de Log**: Suporte para diferentes níveis (info, warn, error, debug)
- **Formatação Rica**: Logs formatados de forma clara e visualmente rica no Discord
- **Informações de Rota**: Inclui detalhes de método HTTP, rota e status de resposta
- **Armazenamento Persistente**: Usa Redis para armazenar configurações de projetos
## 🚀 Instalação
### Pré-requisitos
- Node.js 18+
- Um bot do Discord com token
- Conta no Upstash Redis (ou outro Redis)
### Instalação Local

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/discord-log-bot.git
cd discord-log-bot

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas credenciais

# Iniciar em modo de desenvolvimento
npm run dev

# Para build de produção
npm run build
```
### Docker

```bash
# Construir a imagem
docker build -t discord-log-bot .

# Executar o container
docker run -p 3005:3005 \
  -e DISCORD_BOT_TOKEN=seu_token \
  -e UPSTASH_REDIS_REST_URL=sua_url \
  -e UPSTASH_REDIS_REST_TOKEN=seu_token \
  discord-log-bot
```
## ⚙️ Configuração
Crie um arquivo `.env` com as seguintes variáveis:
```bash
DISCORD_BOT_TOKEN=seu_token_do_bot
PORT=3005
UPSTASH_REDIS_REST_URL=url_do_redis
UPSTASH_REDIS_REST_TOKEN=token_do_redis
```
## 📚 API de Uso
### Enviar Log

```bash
curl -X POST http://localhost:3005/logs \
  -H "Content-Type: application/json" \
  -d '{
    "projectID": "id-do-projeto",
    "level": "info",
    "message": "Teste de log",
    "route": "/api/users",
    "method": "GET",
    "response_status": 200
  }'
```
### Gerenciar Projetos
#### Criar Projeto
```bash
curl -X POST http://localhost:3005/projects \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Meu Projeto",
    "channelID": "id-do-canal-discord"
  }'
```
#### Listar Projetos
```bash
curl -X GET http://localhost:3005/projects
```
#### Obter Projeto
```bash
curl -X GET http://localhost:3005/projects/id-do-projeto
```
#### Excluir Projeto
```bash
curl -X DELETE http://localhost:3005/projects/id-do-projeto
```
## 📊 Exemplos de Logs
Os logs no Discord serão formatados da seguinte maneira:
```bash
🔵 INFO | `17/10/2023, 15:30:45`

📦 Projeto: `Meu Projeto`

📝 Mensagem:
> Usuário autenticado com sucesso


POST /api/login -> 200

```
## 🔄 CI/CDO projeto inclui GitHub Actions para CI/CD automatizado:
- Construção da imagem Docker
- Push para o Docker Hub
- Deploy automático para VPS quando há push na branch main
## 📋 ArquiteturaO projeto segue princípios de Clean Architecture:
- /app: Casos de uso da aplicação
- /domain: Entidades e regras de domínio
- /infra: Implementações de infraestrutura (HTTP, Discord, Redis)
- /utils: Utilitários e funções auxiliares
## 🤝 Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
<div align="center"> <sub>Feito com ❤️ para simplificar o monitoramento de aplicações</sub></div>