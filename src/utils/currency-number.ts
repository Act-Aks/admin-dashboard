/**
 * Method to get currency
 * @param value number
 * @param options Intl.NumberFormatOptions
 * @returns Currency
 */
export const currencyNumber = (value: number, options?: Intl.NumberFormatOptions): string => {
  if (typeof Intl === 'object' && Intl && typeof Intl.NumberFormat === 'function') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      ...options,
    }).format(value)
  }

  return value.toString()
}
