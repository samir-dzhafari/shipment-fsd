import { type ChangeEvent, useState } from 'react'
import { Field } from '@/shared/ui/UiKit/Field/Field'
import { Paper } from '@/shared/ui/UiKit/Paper/Paper'
import { Typography } from '@/shared/ui/UiKit/Typography/Typography'

export function Page() {
  const [value, setValue] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <Paper grow elevation>
      <Typography variant="h1">Авторизация</Typography>
      <form>
        <Field label="Логин" placeholder="Введите логин" value={value} onChange={handleChange} style={{ margin: '8px' }} />
        <Field value={value} />
      </form>
    </Paper>
  )
}
