import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import type {
  LoginFormSchema,
} from '@/features/session/login/model/loginFormSchema'
import {
  loginFormSchema,
} from '@/features/session/login/model/loginFormSchema'
import { Button } from '@/shared/ui/UiKit/Button/Button'
import { Field } from '@/shared/ui/UiKit/Field/Field'
import css from './LoginForm.module.css'

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  })

  const styleWidth = {
    minWidth: '220px',
    width: '100%',
    maxWidth: '320px',
  }

  const onValid = useCallback((data: unknown) => {
    console.log('onValid', data)
  }, [])

  return (
    <form
      onSubmit={handleSubmit(d => console.log(d))}
      className={css.form}
    >
      <Field
        label="Логин"
        placeholder="Введите логин"
        {...register('login')}
        style={styleWidth}
        isError={Boolean(errors.login?.message)}
        helperText={errors.login?.message}
      />

      <Field
        label="Пароль"
        placeholder="Введите пароль"
        {...register('password')}
        style={styleWidth}
        type="password"
        isError={Boolean(errors.password?.message)}
        helperText={errors.password?.message}
      />

      <Button submit size="medium" style={styleWidth}>Войти</Button>
    </form>
  )
}
