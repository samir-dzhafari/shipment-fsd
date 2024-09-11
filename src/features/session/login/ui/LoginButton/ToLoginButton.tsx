import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared/ui/UiKit/Button/Button'

export const ToLoginButton = () => {
  const navigate = useNavigate()

  const loginHandle = () => {
    navigate('/login')
  }
  return <Button variant="primary" size="small" onClick={loginHandle}>Войти</Button>
}
