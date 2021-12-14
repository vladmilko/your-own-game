import { NavLink } from "react-router-dom"

export const NavigLink = ({link, value}) => {
  return (
    <NavLink
      // activeClassName="border-indigo-500 text-white"
      // inactiveClassName="text-white hover:text-gray-700 hover:border-gray-300"
      className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-base font-medium leading-5 transition duration-150 ease-in-out"
      to={link}
    >
      {value}
    </NavLink>
  )
}