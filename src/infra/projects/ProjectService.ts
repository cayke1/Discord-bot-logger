import {
  getAllProjectsList,
  getProjectById,
  removeProject,
  saveProject,
} from "../../lib/projects";
import { Project } from "../../types/project";

export class ProjectService {
  async getProject(id: string) {
    const project = await getProjectById(id);
    return project;
  }

  async getAllProjects() {
    const projects = await getAllProjectsList();
    return projects;
  }

  async createProject(project: Omit<Project, "id">) {
    const newProject = await saveProject(project);
    return newProject;
  }

  async deleteProject(id: string) {
    const project = await getProjectById(id);
    if (!project) {
      throw new Error("Project not found");
    }
    await removeProject(id);
    return project;
  }
}
