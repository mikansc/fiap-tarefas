import { getHeaders } from "services/utils/get-headers";

export class HttpFetchClient {
  url = "/api";
  get(resource: string) {
    return fetch(this.url + resource, {
      method: "GET",
      headers: getHeaders(),
    }).then(handleResponse);
  }

  post(resource: string, data = {}) {
    return fetch(this.url + resource, {
      method: "POST",
      body: JSON.stringify(data),
      headers: getHeaders(),
    }).then(handleResponse);
  }
}

async function handleResponse(res: Response) {
  const data = await res.json();
  if (res.ok) {
    return Promise.resolve(data);
  } else {
    return Promise.reject(data);
  }
}
