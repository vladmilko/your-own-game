import { NavigLink } from "../ui-elements/nav-links/NavLink"

export const NavLinksNoUser = () => {

  return (
    <>
      <NavigLink value={'Войти'} link={'/auth/signin'}/>
      <NavigLink value={'Зарегистрироваться'} link={'/auth/signup'}/>
    </>
  )
}