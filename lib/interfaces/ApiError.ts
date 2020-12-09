export interface ApiError {
  readonly errors: Error[];
}

interface Error {
  readonly code: string;
  readonly message: string;
}
