export type LogLevel = "info" | "warn" | "error" | "debug";

export interface Log {
  projectID: string;
  level: LogLevel;
  message: string;
  timestamp?: string;
}
