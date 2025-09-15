import { useEffect } from 'react';
import { Router } from './components/Router';
import useAuth from './store/authStore';
import { useNavigate } from './store/routerStore';

function App() {
  const { token } = useAuth();
  console.log(token)
  const { navigate } = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('home');
    }
    else {
      navigate('auth')
    }
  }, []);

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
