import { observer } from 'mobx-react-lite'
import { sessionStore } from '@/entities/session/model/store'
import {
  ToLoginButton,
} from '@/features/session/login/ui/LoginButton/ToLoginButton'

export const LayoutProfileCard = observer(() => {
  const isAuthorized = sessionStore.isAuthorized

  if (!isAuthorized) {
    return <ToLoginButton />
  }

  return <div></div>
})
