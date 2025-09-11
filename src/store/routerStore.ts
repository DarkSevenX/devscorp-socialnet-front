import { create } from 'zustand'

type Route = 'auth' | 'home' | 'profile'

type NavigateType = {
  route: Route
  navigate: (to: Route) => void
}

export const useNavigate = create<NavigateType>((set) => ({
  route: 'auth',
  navigate: (to: Route) => {
    set({ route: to })
  },
}))
