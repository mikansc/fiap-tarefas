type LogType = "error" | "warn" | "info";
type LogContext = "front" | "db" | "back";

export const logger = (type: LogType, ctx: LogContext, message: string) => {
  if (process.env.NODE_ENV === "production") return;
  console.log(`${new Date().toISOString()} | ${type || "info"} [${ctx || "front"}] | message: ${message}`);
};
