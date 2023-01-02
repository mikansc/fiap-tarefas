import { DateTime } from "luxon";

export function asDateString(date: string): string {
  return DateTime.fromISO(date).toISODate();
}
