import { ErrorMessage, Field, Fieldset, Legend } from '@/components/ui/primitives/Fieldset'
import { SidebarItem } from '@/components/ui/primitives/Sidebar'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { Rooms, useRoomSelection } from './useRoomSelection'
import { Control, FieldError, FieldValues } from 'react-hook-form'
import { RoomSelectionItem } from './RoomSelectionItem'

interface RoomSelectionProps<T extends FieldValues & Rooms> {
  control: Control<T>
  error?: string | FieldError | Record<string, any>
  loadedBranchIds?: number[]
}

export const RoomSelection = <T extends FieldValues & Rooms>(
  props: RoomSelectionProps<T>
) => {
  const { branches, loading } = useRoomSelection()

  const errorMessage = typeof props.error === 'string'
    ? props.error
    : props.error?.message as string | undefined

  return (
    <Fieldset disabled={loading}>
      <Disclosure
        as={'div'}
        className={'group relative flex flex-col gap-2'}
        defaultOpen={true}
      >
        <DisclosureButton
          className={'cursor-pointer'}
          as={SidebarItem}
        >
          <Legend>Filiais / Salas</Legend>
          <ChevronRightIcon
            aria-hidden="true"
            className="ml-auto size-5 shrink-0 group-data-[open]:rotate-90 group-data-[open]:text-white"
          />
        </DisclosureButton>
        <DisclosurePanel
          as="ul"
          className={
            'flex flex-col gap-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/40'
          }
        >
          <Field>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            {branches.map((branch) => (
              <RoomSelectionItem
                key={branch.value}
                branch={branch}
                control={props.control as Control<FieldValues & Rooms>}
                defaultOpen={props.loadedBranchIds?.includes(Number(branch.value))}
              />
            ))}
          </Field>
        </DisclosurePanel>
      </Disclosure>
    </Fieldset>
  )
}
