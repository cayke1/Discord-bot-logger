import { Redis } from '@upstash/redis'
import { env } from '../config/env'

// Initialize Redis client
export const redis = new Redis({
  url: env.upstashRedisUrl,
  token: env.upstashRedisToken,
})

// Project related Redis operations
export async function getProject(id: string) {
  return redis.get(`project:${id}`)
}

export async function setProject(id: string, data: any) {
  return redis.set(`project:${id}`, data)
}

export async function getAllProjects() {
  const keys = await redis.keys('project:*')
  if (keys.length === 0) return []
  
  const projects = await redis.mget(...keys)
  return projects.filter(Boolean)
}

export async function deleteProject(id: string) {
  return redis.del(`project:${id}`)
} 