import { LoginLayout } from '@/components/layouts/LoginLayout.tsx'
import { Button } from '@/components/ui/primitives/Button'
import { Checkbox, CheckboxField } from '@/components/ui/primitives/Checkbox'
import {
  ErrorMessage,
  Field,
  FieldGroup,
  Label,
} from '@/components/ui/primitives/Fieldset'
import { Input } from '@/components/ui/primitives/Input'
import { Link } from '@/components/ui/primitives/Link'
import { useLogin } from '@/pages/Login/useLogin'
import React from 'react'
import { Controller } from 'react-hook-form'

export const Login: React.FC = () => {
  const { register, control, handleSubmit, errors } = useLogin()

  return (
    <LoginLayout>
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <Field>
            <Label htmlFor={'email'}>Email</Label>
            <Input
              id={'email'}
              type={'email'}
              required
              autoComplete={'email'}
              {...register('email')}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label htmlFor={'password'}>Senha</Label>
            <Input
              id={'password'}
              type={'password'}
              required
              autoComplete={'current-password'}
              {...register('password')}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <div className={'flex items-center justify-between'}>
              <Controller
                name={'remember'}
                control={control}
                render={({ field }) => (
                  <CheckboxField>
                    <Checkbox
                      id={'remember-me'}
                      checked={field.value}
                      onChange={field.onChange}
                    />
                    <Label htmlFor={'remember-me'}>Lembrar-me</Label>
                  </CheckboxField>
                )}
              />

              <div className="text-sm/6">
                <Link href="/esqueci-senha">Esqueci minha senha</Link>
              </div>
            </div>
          </Field>
        </FieldGroup>
        <Button className={'mt-8 w-full'} type={'submit'}>
          Sign in
        </Button>
      </form>
    </LoginLayout>
  )
}
