import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { NavLinksAuthUser } from './NavLinksAuthUser';
import { NavLinksNoUser } from './NavLinksNoUser';

export const Header = () => {
  const user = useSelector((store) => (store?.user));

  console.log("nav user=>>>", user);
  const location = useLocation();

  return (
    ((!user && /auth/.test(location.pathname)) || user ) 
    &&
    <header className='flex justify-between h-16 items-center bg-gray-500 px-4'>
      <div>
        <Link 
          className='text-lg text-white font-normal'
          to='/'
        >
          СВОЯ ИГРА
        </Link>
      </div>
      <nav
        className='flex space-x-4'
      >
        {!user 
        ? <NavLinksNoUser />
        : <NavLinksAuthUser />
        }
      </nav>
    </header>
  )
}