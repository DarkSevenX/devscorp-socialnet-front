//import {useNavigate} from "../store/routerStore"

export const Router = () => {
  //const { route } = useNavigate()

  switch () {
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
