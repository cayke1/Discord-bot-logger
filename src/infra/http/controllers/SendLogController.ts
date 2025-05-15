import { Request, Response } from "express";
import { SendLogToDiscord } from "../../../app/usecases/SendLogToDiscord";

export class SendLogController {
  constructor(private usecase: SendLogToDiscord) {}

  async handle(req: Request, res: Response): Promise<void> {
    const { projectID, level = "info", message } = req.body;

    if (!projectID || !message) {
      res.status(400).json({ error: "projectID e message são obrigatórios" });
      return;
    }

    const log = {
      projectID,
      level,
      message,
      timestamp: new Date().toISOString(),
    };

    try {
      await this.usecase.execute(log);
      res.status(200).json({ status: "Log enviado" });
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  }
}
