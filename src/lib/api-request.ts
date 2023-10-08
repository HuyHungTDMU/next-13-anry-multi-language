import { useRouter } from "next/router";

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

export async function apiFetchProducts(url: string): Promise<any[]> {
  const { asPath } = useRouter();
  const response = await fetch(`${asPath}/api/products`);

  return handleResponse<ResponseData>(response).then((data) => data.data);
}

export async function apiFetchProjects(url: string): Promise<any[]> {
  const response = await fetch(`${url}/api/projects`);

  return handleResponse<ResponseData>(response).then((data) => data.data);
}

export async function apiFetchNews(url: string): Promise<any[]> {
  const response = await fetch(`${url}/api/news`);

  return handleResponse<ResponseData>(response).then((data) => data.data);
}
