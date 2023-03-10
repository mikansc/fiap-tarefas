import { toast } from "react-toastify";
import { getHeaders } from "services/frontend/utils/get-headers";

export class HttpFetchClient<T> {
  url = "/api";
  get(resource: string) {
    return fetch(this.url + resource, {
      method: "GET",
      headers: getHeaders(),
    }).then(handleResponse);
  }

  post(resource: string, data?: T) {
    return fetch(this.url + resource, {
      method: "POST",
      body: JSON.stringify(data),
      headers: getHeaders(),
    }).then(handleResponse);
  }

  put(resource: string, data: T) {
    return fetch(this.url + resource, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: getHeaders(),
    }).then(handleResponse);
  }

  delete(resource: string) {
    return fetch(this.url + resource, {
      method: "DELETE",
      headers: getHeaders(),
    }).then(handleResponse);
  }
}

async function handleResponse(res: Response) {
  const data = await res.json();
  if (res.ok) {
    if (data.message) {
      toast.success(data.message);
    }
    return Promise.resolve(data);
  } else {
    if (data.error) {
      toast.error(data.error);
    }
    return Promise.reject(data.error);
  }
}
