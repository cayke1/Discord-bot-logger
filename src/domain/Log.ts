export type LogLevel = "info" | "warn" | "error" | "debug";
export type METHOD =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "OPTIONS"
  | "HEAD";

export interface Log {
  projectID: string;
  level: LogLevel;
  message: string;
  timestamp?: string;
  route?: string;
  method?: METHOD;
  response_status?: number;
}
