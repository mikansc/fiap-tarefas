import type { IUserResponse } from "types/User";

import { getFromStorage } from "services/frontend/storage-service";

export function getHeaders(): HeadersInit {
  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set("Accept", "application/json");

  const user = getFromStorage<IUserResponse>("usr");
  if (user && user.token) {
    headers.set("Authorization", "Bearer " + user.token);
  }

  return headers;
}
