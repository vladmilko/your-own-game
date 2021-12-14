// import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router';
import { Header } from './components/header/Header';
import { AuthForm } from "./components/auth/Form";
import { StartPage } from './components/start-page/StartPage';
import { ProfilePage } from './components/profile/Profile';
import { Game } from './components/game/Game';
import { Finish } from './components/finish/Finish';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from './store/actions';


const routes = [
  {
    path: '/',
    element: <StartPage />,
  },
  {
    path: '/auth/:authPath', 
    element: <AuthForm />
  },
  {
    path: '/profile/:id', 
    element: <ProfilePage />
  },
  {
    path: '/game/start',
    element: <Game />
  },
  {
    path: '/game/finish',
    element: <Finish />
  }
]

function App() {
  const dispatch = useDispatch();
  const content = useRoutes(routes);
  useEffect(async() => {
    const req = await fetch('/auth//isUser');
    const { id, name } = await req.json();
    if (id) dispatch(setAuth(id, name));
  })
  return (
    <>
    <Header />
    <div
      className='max-w-max mx-auto my-20'
    >
      {content}
    </div>
    </>
  );
}

export default App;
