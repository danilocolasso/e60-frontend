import { DataTableAction, DataTableColumn } from '@/components/ui/composite/DataTable/index.ts'
import { DataTableActions } from '@/components/ui/composite/DataTable/DataTableActions.tsx'
import { TableBody, TableCell, TableRow } from '@/components/ui/primitives/Table'

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
        <TableRow key={index} className={'hover:bg-zinc-950/5 dark:hover:bg-white/5'}>
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
