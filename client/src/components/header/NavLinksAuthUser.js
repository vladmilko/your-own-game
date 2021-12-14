import { NavigLink } from "../ui-elements/nav-links/NavLink"
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../store/actions';

export const NavLinksAuthUser = () => {

  const user = useSelector((store) => (store.user));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = async () => {
    let response = await fetch('/auth/signout');

    if (response.status === 200) {
      dispatch(signout());
      navigate('/');
    } 
  }

  return (
    <>
      <NavigLink value={'Главная'} link={'/'}/>
      <NavigLink value={'Мой профиль'} link={`/profile/${user._id}`}/>
      <Link 
      className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-base font-medium leading-5 transition duration-150 ease-in-out"
      to="/signout " 
      onClick={signOut}>
        Выйти
      </Link>
    </>
  )
}