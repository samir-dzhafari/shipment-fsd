import { LoginForm } from '@/features/session/login/ui/LoginForm/LoginForm'
import { Paper } from '@/shared/ui/UiKit/Paper/Paper'
import { Typography } from '@/shared/ui/UiKit/Typography/Typography'
import css from './Page.module.css'

export function Page() {
  return (
    <Paper grow elevation className={css.root}>
      <Typography variant="h4" align="center" gutterBottom>Авторизация</Typography>
      <LoginForm />
    </Paper>
  )
}
