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
import { useLogin } from '@/pages/login/useLogin'
import React from 'react'
import { Controller } from 'react-hook-form'

export const Login: React.FC = () => {
  const { register, control, handleSubmit, errors, loading } = useLogin()

  return (
    <LoginLayout>
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <Field>
            <Label htmlFor={'email'}>Usuário</Label>
            <Input
              id={'username'}
              required
              autoComplete={'username'}
              {...register('username')}
            />
            {errors.username && (
              <ErrorMessage>{errors.username.message}</ErrorMessage>
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
        <Button className={'mt-8 w-full'} type={'submit'} disabled={loading}>
          { loading ? 'Entrando...' : 'Entrar' }
        </Button>
      </form>
    </LoginLayout>
  )
}
