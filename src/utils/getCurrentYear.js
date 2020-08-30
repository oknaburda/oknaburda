export const getCurrentYear = (year) => {
  const date = new Date()
  date.setFullYear(year)
  const presetDate = date.getFullYear()

  return new Date().getFullYear() - presetDate
}
