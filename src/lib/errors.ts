export function getErrorMessage(e: unknown): string {
  if (e instanceof Error) return e.message;
  else if (typeof e === 'string') return e;
  return 'unknown error';
}
