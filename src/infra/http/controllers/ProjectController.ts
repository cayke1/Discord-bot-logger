import { Request, Response } from "express";
import { ProjectService } from "../../projects/ProjectService";

export class ProjectController {
  constructor(private projectService: ProjectService) {}

  async getProject(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const project = await this.projectService.getProject(id);
      if (!project) {
        res.status(404).json({ error: "Projeto não encontrado" });
        return;
      }
      res.status(200).json(project);
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  }

  async getAllProjects(req: Request, res: Response) {
    try {
      const projects = await this.projectService.getAllProjects();
      res.status(200).json(projects);
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  }

  async createProject(req: Request, res: Response) {
    const { name, channelID } = req.body;

    if (!name || !channelID) {
      res.status(400).json({ error: "name e channelID são obrigatórios" });
      return;
    }

    try {
      const project = await this.projectService.createProject({
        name,
        channelID,
      });
      res.status(201).json(project);
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  }

  async deleteProject(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const project = await this.projectService.deleteProject(id);
      res.status(200).json(project);
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  }
}
