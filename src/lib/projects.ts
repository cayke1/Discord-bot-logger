import { getProject, setProject, getAllProjects, deleteProject } from "./redis";
import { Project } from "../types/project";
import { randomUUID } from "node:crypto";

export async function getProjectById(id: string): Promise<Project | null> {
  const project = await getProject(id);
  return (project as Project) || null;
}

export async function saveProject(project: Omit<Project, "id">): Promise<any> {
  const id = randomUUID();
  const newProject = {
    ...project,
    id,
  };
  await setProject(id, newProject);
  return newProject;
}

export async function getAllProjectsList(): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects as Project[];
}

export async function removeProject(id: string): Promise<void> {
  await deleteProject(id);
}
