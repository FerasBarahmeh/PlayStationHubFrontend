export  interface  IResponse<T> {
  response: any;
  hasError: boolean;
  message: string;
  metadata: object;
  statusCode: number;
}
