import { Button } from '@/components/Button'
import { Checkbox, CheckboxField } from '@/components/Checkbox'
import { Field, Fieldset, Label } from '@/components/Fieldset'
import { Input } from '@/components/Input'
import { useLogin } from '@/pages/Login/useLogin'
import React from 'react'

export const Login: React.FC = () => {
  const { handleSubmit, credentials, setCredentials } = useLogin()

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          alt="Escape 60'"
          src="logo.svg"
          className="mx-auto h-20 w-auto dark:hidden"
        />
        <img
          alt="Escape 60'"
          src="logo-white.svg"
          className="mx-auto hidden h-20 w-auto dark:flex"
        />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="sm:bg-white px-6 py-12 sm:shadow sm:rounded-lg sm:px-12 sm:dark:bg-slate-800">
          <form onSubmit={handleSubmit} className={'space-y-6'}>
            <Fieldset className={'space-y-6'}>
              <Field>
                <Label htmlFor={'email'}>Email</Label>
                <Input
                  id={'email'}
                  name={'email'}
                  type={'email'}
                  required
                  autoComplete={'email'}
                  value={credentials.email}
                  onChange={(e) =>
                    setCredentials({ ...credentials, email: e.target.value })
                  }
                />
              </Field>
              <Field>
                <Label htmlFor={'password'}>Senha</Label>
                <Input
                  id={'password'}
                  name={'password'}
                  type={'password'}
                  required
                  autoComplete={'current-password'}
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                />
              </Field>
              <Field>
                <div className={'flex items-center justify-between'}>
                  <CheckboxField>
                    <Checkbox id={'remember-me'} name={'remember-me'} />
                    <Label htmlFor={'remember-me'}>Lembrar-me</Label>
                  </CheckboxField>

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
        </div>
      </div>
    </div>
  )
}
