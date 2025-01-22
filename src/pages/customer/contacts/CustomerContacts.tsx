import { Button } from '@/components/ui/primitives/Button'
import { Fieldset, Legend } from '@/components/ui/primitives/Fieldset'
import { SidebarItem } from '@/components/ui/primitives/Sidebar'
import { Text } from '@/components/ui/primitives/Text'
import { CustomerContact as Contact } from '@/types/customer-contact'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import {
  ArrayPath,
  Control,
  FieldErrors,
  FieldValues,
  useFieldArray,
  UseFormRegister,
} from 'react-hook-form'
import { CustomerContact } from './CustomerContact'

interface CustomerContactsProps<T extends FieldValues> {
  register: UseFormRegister<T>
  control: Control<T>
  errors: FieldErrors<T>
}

export function CustomerContacts<T extends FieldValues>({
  register,
  control,
  errors,
}: CustomerContactsProps<T>) {
  const { fields, append, remove } = useFieldArray<T>({
    control,
    name: 'contacts' as ArrayPath<T>,
  })

  return (
    <Fieldset>
      <Disclosure as="div" className={'group relative flex flex-col gap-2'}>
        <DisclosureButton className={'cursor-pointer'} as={SidebarItem}>
          <Legend>Contatos</Legend>
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
          {fields.length > 0 ? (
            fields.map((field, index) => (
              <CustomerContact
                key={field.id}
                index={index}
                register={register}
                errors={errors}
                remove={remove}
              />
            ))
          ) : (
            <Text className={'self-center'}>Nenhum contato cadastrado</Text>
          )}
          <Button
            className={'md:self-end'}
            onClick={() =>
              append({
                name: '',
                department: '',
                email: '',
                phone: '',
              } as ArrayPath<Contact>)
            }
          >
            Novo Contato
          </Button>
        </DisclosurePanel>
      </Disclosure>
    </Fieldset>
  )
}
