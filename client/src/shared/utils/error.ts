import { AxiosError } from 'axios';

export class ValidationError extends Error {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(message: string) {
    super(message);
  }
}
export const reportError = (error: unknown) => {
  if (error instanceof ValidationError) {
    return error.message;
  } else if (error instanceof AxiosError) {
    return error.response?.data;
  }
};
