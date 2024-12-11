import {
  DataTableAction,
  DataTableColumn,
} from '@/components/common/DataTable/DataTable.tsx'
import { TableHead, TableHeader, TableRow } from '@/components/ui/Table'

interface DataTableHeadProps<T> {
  columns: DataTableColumn<T>[]
  sort?: keyof T
  order?: 'asc' | 'desc'
  actions?: DataTableAction<T>[]
  onSort: (key: keyof T) => void
}

export const DataTableHead = <T,>({
  columns,
  sort,
  order,
  actions,
  onSort,
}: DataTableHeadProps<T>) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableHeader
            key={String(column.key)}
            className={column.sortable ? 'hover:bg-gray-500/5 rounded-t-md' : ''}
            onClick={() => column.sortable && onSort(column.key)}
          >
            {column.label}
            {sort === column.key && (
              <span className={'ml-1'}>{order === 'asc' ? '↑' : '↓'}</span>
            )}
          </TableHeader>
        ))}
        {actions && (
          <TableHeader className="relative w-0">
            <span className="sr-only">Actions</span>
          </TableHeader>
        )}
      </TableRow>
    </TableHead>
  )
}
