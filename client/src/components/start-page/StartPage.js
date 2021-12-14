import { useSelector } from 'react-redux';
import { Button } from '../ui-elements/buttons/Button';

export const StartPage = () => {
  const user = useSelector((store) => (store?.user));

  return (
    <div
    className='flex flex-col'
    >
      {!user ? 
        <>
          <h1
            className='text-6xl text-center my-4'
          >СВОЯ ИГРА</h1>
          <Button name={'Войти'} link='/auth/signin' />
          <Button name={'Зарегистрироваться'} link='/auth/signup' />
        </>
      :
      <>
        <h1
          className='text-6xl text-center my-4'
        >Привет, {user.name}!</h1>
        <Button name={'Начать игру'} link='/game/start' />
      </>
      }
      
    </div>
  )
}