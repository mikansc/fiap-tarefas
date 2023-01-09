import { DateTime } from "luxon";

export function asIsoDateString(date: string): string {
  if (!date) return "";
  return DateTime.fromISO(date, { zone: "utc" }).toISODate();
}

export function asLocaleDateString(date: string): string {
  if (!date) return "";
  return DateTime.fromISO(date, { zone: "utc" }).toFormat("dd/MM/yyyy");
}
