export const recordToOptions = (record: Record<string, string>) =>
  Object.keys(record).map((key) => ({
    value: key,
    label: record[key],
  }))
