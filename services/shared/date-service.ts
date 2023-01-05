import { DateTime } from "luxon";

export function asDateString(date: string): string {
  if (!date) return "";
  return DateTime.fromISO(date).toISODate();
}

export function asLocaleDateString(date: string): string {
  if (!date) return "";
  // return new Date(date).toLocaleDateString("pt-BR");
  return DateTime.fromISO(date).toUTC().toFormat("dd/MM/yyyy");
}
