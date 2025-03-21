export const currencyFormat = (
  value: number | string,
  options: { showPrefix?: boolean } = { showPrefix: true }
) => {
  const numericValue = typeof value === 'string' ? parseFloat(value) : value

  if (isNaN(numericValue)) {
    return ''
  }

  const formatted = new Intl.NumberFormat('pt-BR', {
    style: options.showPrefix ? 'currency' : 'decimal',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericValue)

  return formatted
}
