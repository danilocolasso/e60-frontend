import { DataTableAction, DataTableColumn } from '@/components/common/DataTable'
import { DataTableActions } from '@/components/common/DataTable/DataTableActions'
import { TableBody, TableCell, TableRow } from '@/components/ui/Table'

interface DataTableBodyProps<T> {
  data: T[]
  columns: DataTableColumn<T>[]
  actions?: DataTableAction<T>[]
}

export const DataTableBody = ({
  data,
  columns,
  actions,
}: DataTableBodyProps<any>) => {
  return (
    <TableBody>
      {data.map((row, index) => (
        <TableRow key={index}>
          {columns.map((column) => (
            <TableCell key={String(column.key)}>
              {column.value ? column.value(row) : (row[column.key] as string)}
            </TableCell>
          ))}
          {actions && <DataTableActions actions={actions} item={row} />}
        </TableRow>
      ))}
    </TableBody>
  )
}
