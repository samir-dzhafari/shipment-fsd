import { z } from 'zod'

export const loginFormSchema = z.object({
  login: z.string().min(1, { message: 'Не введен логин' }).email({
    message: 'Введите корректый логин',
  }),
  password: z
    .string()
    .min(6, { message: 'Пароль должен состоять не менее чем из 6 символов' }),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
