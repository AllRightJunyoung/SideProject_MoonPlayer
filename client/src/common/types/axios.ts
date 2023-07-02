interface APIDataResponse<T> {
  result: T;
}

export interface CommonResponse<T> {
  data: APIDataResponse<T>;
  status: number;
  statusText: string;
}
