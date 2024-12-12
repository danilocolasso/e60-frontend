import { DataTableAction } from '@/components/ui/composite/DataTable/DataTable.tsx'
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from '@/components/ui/primitives/Dropdown'
import { TableCell } from '@/components/ui/primitives/Table'
import { EllipsisHorizontalIcon } from '@heroicons/react/16/solid'

interface DataTableActionsProps<T> {
  actions: DataTableAction<T>[]
  item: T
}

export const DataTableActions = <T,>({
  actions,
  item,
}: DataTableActionsProps<T>) => (
  <TableCell>
    <div className="-my-1.5">
      <Dropdown>
        <DropdownButton plain aria-label="More options">
          <EllipsisHorizontalIcon />
        </DropdownButton>
        <DropdownMenu anchor="bottom end">
          {actions.map((action, index) => (
            <DropdownItem key={index} onClick={() => action.onClick(item)}>
              {action.icon && <action.icon />}
              {action.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  </TableCell>
)
