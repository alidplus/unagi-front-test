
const dateTimeFormat = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export function formatDate(value: string | Date): string {
  const d = value instanceof Date ? value : new Date(value)
  return dateTimeFormat.format(d)
}