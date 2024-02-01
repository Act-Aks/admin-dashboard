import dayjs from 'dayjs'

type DateColors = 'success' | 'processing' | 'error' | 'default' | 'warning'

type GetDateColorArgs = {
  date: string
  defaultColor?: DateColors
}

/**
 * Method to get diff color for dates
 * @param args of type GetDateColorArgs
 * @returns A color based on the date
 */
export const getDateColor = (args: GetDateColorArgs): DateColors => {
  const date = dayjs(args.date)
  const today = dayjs()

  if (date.isBefore(today)) {
    return 'error'
  }

  if (date.isBefore(today.add(3, 'day'))) {
    return 'warning'
  }

  return args.defaultColor ?? 'default'
}
