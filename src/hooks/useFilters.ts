import { ChangeEvent, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

type FilterValues = Record<string, any>

interface FilterHandlers<T extends FilterValues> {
  filters: T
  setFilters: (filters: T) => void
  handleDebouncedFilter: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useFilters = <T extends FilterValues>(
  initialFilters: T,
  delay: number = 500,
): FilterHandlers<T> => {
  const [filters, setFilters] = useState<T>(initialFilters)

  const debouncedSetFilter = useDebouncedCallback(
    (field: keyof T, value: any) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [field]: value,
      }))
    },
    delay,
  )

  const handleDebouncedFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    if (!name) {
      console.error('The input filter element must have a name attribute')
      return
    }
    const fieldValue = type === 'checkbox' ? checked : value
    debouncedSetFilter(name as keyof T, fieldValue)
  }

  return {
    filters,
    setFilters,
    handleDebouncedFilter,
  }
}
