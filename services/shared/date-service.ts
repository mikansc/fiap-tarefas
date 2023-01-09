import { DateTime } from "luxon";

export function asDateString(date: string): string {
  if (!date) return "";
  return DateTime.fromISO(date).toISODate();
}

export function asLocaleDateString(date: string): string {
  if (!date) return "";
  return DateTime.fromISO(date, { zone: "utc" }).toFormat("dd/MM/yyyy");
}
