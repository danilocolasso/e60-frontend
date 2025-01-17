export const dateFormat = (date: string | Date | null | undefined) => {
  if (!date) {
    return ''
  }

  const dateObject = typeof date === 'string' ? new Date(date) : date

  return dateObject.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
