import { SendLogToDiscord } from "../../app/usecases/SendLogToDiscord";
import express from "express";
import { SendLogController } from "./controllers/SendLogController";
import { ProjectController } from "./controllers/ProjectController";
import { ProjectService } from "../projects/ProjectService";

export function createServer(usecase: SendLogToDiscord) {
  const app = express();
  app.use(express.json());
  const controller = new SendLogController(usecase);
  const projectService = new ProjectService();
  const projectController = new ProjectController(projectService);

  app.post("/logs", controller.handle.bind(controller));
  app.get(
    "/projects",
    projectController.getAllProjects.bind(projectController)
  );
  app.get(
    "/projects/:id",
    projectController.getProject.bind(projectController)
  );
  app.post(
    "/projects",
    projectController.createProject.bind(projectController)
  );
  app.delete(
    "/projects/:id",
    projectController.deleteProject.bind(projectController)
  );
  return app;
}
