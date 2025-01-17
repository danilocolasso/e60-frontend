export const dateTimeFormat = (date: string | Date | null | undefined) => {
  if (!date) {
    return ''
  }

  const dateObject = typeof date === 'string' ? new Date(date) : date

  return dateObject.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC',
  })
}
