import { useNavigate } from 'react-router-dom';

export const Button = ({name = '', link = ''}) => {
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate(link);
  }

  return (
    <button
      onClick={buttonHandler}
      className='my-4 inline-flex justify-center items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
    >
      {name}
    </button>
  )
}
