export interface ILoginResponse {
  hasError: boolean;
  data?: {
    token: string;
  };
  errors?: object;
  statusCode: number;
  message: string;
}
