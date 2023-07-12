interface APIResponse<T> {
  result: T;
}

export interface CommonResponse<T> {
  data: APIResponse<T>;
  status: number;
  statusText: string;
}
