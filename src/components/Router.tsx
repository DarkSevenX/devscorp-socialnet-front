import {useNavigate} from "../store/routerStore"
import { AuthPage } from "../pages/AuthPage"
import {Home} from "../pages/Home"
import {Profile} from "../pages/Profile"

export const Router = () => {
  const { route } = useNavigate()

  switch (route) {
    case 'auth':
      return <AuthPage/>
    case 'home':
      return <Home/>
    case 'profile':
      return <Profile/>
    default:
      break;
  }
}
