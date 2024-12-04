import { LoginLayout } from '@/components/layouts/LoginLayout.tsx'
import { Button } from '@/components/ui/Button'
import { Checkbox, CheckboxField } from '@/components/ui/Checkbox'
import { Field, Fieldset, Label } from '@/components/ui/Fieldset'
import { Input } from '@/components/ui/Input'
import { useLogin } from '@/pages/Login/useLogin'
import React from 'react'
import { Controller } from 'react-hook-form'

export const Login: React.FC = () => {
  const { register, control, handleSubmit, errors } = useLogin()

  return (
    <LoginLayout>
      <form onSubmit={handleSubmit} className={'space-y-6'}>
        <Fieldset className={'space-y-6'}>
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
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
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
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
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
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Esqueci minha senha
                </a>
              </div>
            </div>
          </Field>
        </Fieldset>
        <Button className={'w-full'} type={'submit'} color={'blue'}>
          Sign in
        </Button>
      </form>
    </LoginLayout>
  )
}
