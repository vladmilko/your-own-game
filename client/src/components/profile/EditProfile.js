import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../store/actions';
import { Button } from '../ui-elements/buttons/Button';

export const EditProfile = () => {

  const dispatch = useDispatch();

  const [edit, setEdit] = useState('');
  const user = useSelector((store) => (store.user));


  console.log('iddd profile=>>', user._id)

  const updateInfo = async (event) => {
    event.preventDefault();

    let response = await fetch(`/user/${user._id}/edit`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: event.target.newInfo.value,
        userId: user._id
      }),
    });
    let newUser = await response.json();

    if (newUser) {
      dispatch(setAuth(newUser._id, newUser.name));
      setEdit('');
    }
  }

  return (
    <div class="mb-4 text-center" >
      <p className="text-lg font-semibold">
        Ваше имя:
      </p>
      {edit === 'edit'
        ? <div>
            <form onSubmit={updateInfo}>
              <input 
              class="w-full max-w-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              defaultValue={user.name}
              name="newInfo">
              </input> 
              <Button name={'Обновить'} type="submit"/>
            </form>
          </div>
        : <div
        className="mb-4">
            <p>{user.name}</p>
            <span 
            onClick={()=>setEdit('edit')}>&#9998;</span>
          </div>}
    </div>
  )
}