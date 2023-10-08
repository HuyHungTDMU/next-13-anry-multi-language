const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3002";

export type ResponseData = {
  status: string;
  data: any;
};

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("Content-Type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    const message = isJson
      ? data.message || response.statusText
      : response.statusText;
    throw new Error(message);
  }

  return data as T;
}

export async function apiFetchProducts(): Promise<any[]> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/products`);

  return handleResponse<ResponseData>(response).then((data) => data.data);
}

export async function apiFetchProjects(): Promise<any[]> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/projects`);

  return handleResponse<ResponseData>(response).then((data) => data.data);
}

export async function apiFetchNews(): Promise<any[]> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/news`);

  return handleResponse<ResponseData>(response).then((data) => data.data);
}
