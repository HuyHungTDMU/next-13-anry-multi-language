import * as process from "process";

const url = process.env.NEXT_PUBLIC_NOT_SECRET_URL;

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

export async function apiFetchProducts(): Promise<any> {
  const response = await fetch(`${url}/api/products`, { cache: "no-store" });

  return handleResponse<ResponseData>(response).then((data) => data.data);
}

export async function apiUpdateProduct(data: any): Promise<any[]> {
  const postData = {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const response = await fetch(`${url}/api/products`, postData);

  return handleResponse<ResponseData>(response).then((data) => data.data);
}

export async function apiCreateProduct(data: any): Promise<any[]> {
  console.log({ data });
  const postData = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const response = await fetch(`${url}/api/products`, postData);

  return handleResponse<ResponseData>(response).then((data) => data.data);
}

export async function apiDeleteProduct(data: any): Promise<any[]> {
  const postData = {
    method: "Delete",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const response = await fetch(`${url}/api/products`, postData);

  return handleResponse<ResponseData>(response).then((data) => data.data);
}

export async function apiFetchProjects(): Promise<any[]> {
  const response = await fetch(`${url}/api/projects`);
  return handleResponse<ResponseData>(response).then((data) => data.data);
}

export async function apiUpdateProject(data: any): Promise<any[]> {
  const postData = {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const response = await fetch(`${url}/api/projects`, postData);

  return handleResponse<ResponseData>(response).then((data) => data.data);
}

export async function apiCreateProject(data: any): Promise<any[]> {
  console.log({ data });
  const postData = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const response = await fetch(`${url}/api/projects`, postData);

  return handleResponse<ResponseData>(response).then((data) => data.data);
}

export async function apiDeleteProject(data: any): Promise<any[]> {
  const postData = {
    method: "Delete",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const response = await fetch(`${url}/api/projects`, postData);

  return handleResponse<ResponseData>(response).then((data) => data.data);
}

export async function apiFetchNews(): Promise<any[]> {
  const response = await fetch(`${url}/api/news`, { cache: "no-store" });

  return handleResponse<ResponseData>(response).then((data) => data.data);
}

export async function apiUpdateNews(data: string): Promise<any[]> {
  const postData = {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: data,
    }),
  };
  const response = await fetch(`${url}/api/news`, postData);

  return handleResponse<ResponseData>(response).then((data) => data.data);
}
