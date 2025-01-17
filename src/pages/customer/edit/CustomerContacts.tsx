import { Button } from '@/components/ui/primitives/Button'
import { Fieldset, Legend } from '@/components/ui/primitives/Fieldset'
import { SidebarItem } from '@/components/ui/primitives/Sidebar'
import { Text } from '@/components/ui/primitives/Text'
import { CustomerUpdatePayload } from '@/schemas/customer/customerUpdateSchema.ts'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import React from 'react'
import {
  Control,
  FieldErrors,
  useFieldArray,
  UseFormRegister,
} from 'react-hook-form'
import { CustomerContact } from './CustomerContact.tsx'

interface CustomerContactsProps {
  register: UseFormRegister<CustomerUpdatePayload>
  control: Control<CustomerUpdatePayload>
  errors: FieldErrors<CustomerUpdatePayload>
}

export const CustomerContacts: React.FC<CustomerContactsProps> = ({
  register,
  control,
  errors,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'contacts',
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
            onClick={() => append({ name: '', email: '', phone: '' })}
          >
            Novo Contato
          </Button>
        </DisclosurePanel>
        {errors.contacts?.message && (
          <span className="text-red-500">{errors.contacts.message}</span>
        )}
      </Disclosure>
    </Fieldset>
  )
}
