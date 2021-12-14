import { useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../../store/actions';
import { Button } from '../ui-elements/buttons/Button';

export const AuthForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addUser = async (event) => {
    event.preventDefault();

    let request = await fetch(`/auth/${params.authPath}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: event.target.name?.value,
        password: event.target.password.value,
        email: event.target.email.value
      }),
    });

    const { _id, name } = await request.json();

    if (_id) dispatch(setAuth(_id, name));
    navigate(`/profile/${_id}`);
  };

  return (
    <div class="w-full max-w-xs flex flex-col content-center">
    {params.authPath === 'signup' && 
      <h1 
      className='text-4xl text-center my-4'>
        Зарегистрироваться
      </h1>
    }

    {params.authPath === 'signin' && 
      <h1 
      className='text-4xl text-center my-4'>
        Войти
      </h1>
    }
      <form 
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={addUser}>
        {params.authPath === 'signup' && 
          <div class="mb-4">
            <input 
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              name="name"
              id="username" 
              type="text" 
              placeholder="имя"/>
          </div>
        }
        <div class="mb-4">
          <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            name="email"
            id="email" 
            type="text" 
            placeholder="email"/>
        </div>
        <div class="mb-6">
          <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            name="password"
            id="password" 
            type="password" 
            placeholder="пароль"/>
        </div>
        <div class="flex items-center justify-between">
          {params.authPath === 'signup' && 
            <Button
            name={'Зарегистрироваться'}
            class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="submit"
            />
          }

          {params.authPath === 'signin' && 
            <Button 
            name={'Войти'}
            class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="submit"
            />
          }
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2021 Acme Corp. All rights reserved.
      </p>
    </div>
  )
}