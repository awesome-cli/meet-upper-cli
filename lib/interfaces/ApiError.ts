export interface ApiError {
  errors: Error[];
}

interface Error {
  code: string;
  message: string;
}
