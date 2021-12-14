import { EditProfile } from './EditProfile';
import { GameStats } from './GameStats';

export const ProfilePage = () => {

  return (
    <div className="">
      <h1 
      className='text-5xl text-center my-4 mb-7'>
        Мой Профиль
      </h1>
      <EditProfile/> 
      <h2
      className="text-lg mb-4 font-semibold text-center">
        Статистика игр:
      </h2>
      <GameStats/>
    </div>
  )
}
