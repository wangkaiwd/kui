let index = 0;

export function uuid (key: string): string {
  return key + index++;
}