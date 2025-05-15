import { SendLogToDiscord } from "../../app/usecases/SendLogToDiscord";
import express from "express";
import { SendLogController } from "./controllers/SendLogController";

export function createServer(usecase: SendLogToDiscord) {
  const app = express();
  app.use(express.json());
  const controller = new SendLogController(usecase);

  app.post("/logs", controller.handle.bind(controller));
  return app;
}
