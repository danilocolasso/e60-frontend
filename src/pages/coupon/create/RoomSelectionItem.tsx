import { memo, useEffect } from 'react'
import { Control, FieldValues, Path } from 'react-hook-form'
import { Option } from '@/types/option'
import { SidebarItem } from '@/components/ui/primitives/Sidebar'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { Checkbox } from '@/components/ui/composite/Checkbox'
import { Legend } from '@/components/ui/primitives/Fieldset'
import { useRoomSelectionItem } from './useRoomSelectionItem'
import { Rooms } from './useCouponCreate'

export const RoomSelectionItem = memo(<T extends FieldValues & Rooms>({
  branch,
  control,
}: {
  branch: Option<string>,
  control: Control<T>
}) => {
  const branchId = Number(branch.value)

  const { handleOpen, isOpen, rooms, loading } = useRoomSelectionItem()

  return (
    <Disclosure
      as={'div'}
      className={'group/branch relative flex flex-col gap-2'}
      defaultOpen={false}
    >
      {({ open }) => {
        useEffect(() => {
          handleOpen(branchId, open);
        }, [open])

        return (
          <>
            <DisclosureButton
              className={'cursor-pointer'}
              as={SidebarItem}
            >
              <Legend>{branch.label}</Legend>
              <ChevronRightIcon
                aria-hidden="true"
                className="ml-auto size-5 shrink-0 group-data-[open]/branch:rotate-90 group-data-[open]/branch:text-white"
              />
            </DisclosureButton>
            {isOpen && !loading ? (
              <DisclosurePanel
                as="ul"
                className={
                  'flex flex-col gap-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/40'
                }
              >
                {rooms && rooms.length > 0 ? (
                  <Checkbox
                    options={rooms}
                    name={`rooms.${branch.value}` as Path<T>}
                    control={control}
                  />
                ) : (
                  <div className="text-sm text-zinc-500">Nenhuma sala encontrada</div>
                )}
              </DisclosurePanel>
            ) : null}
          </>
        );
      }}
    </Disclosure>
  )
})