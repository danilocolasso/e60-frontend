export const timeFormat = (time: number) => {
  const hours = Math.floor(time / 60)
  const minutes = time % 60

  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`
}
