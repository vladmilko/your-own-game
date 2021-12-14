import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteGame } from "../../store/actions";
import { Button } from "../ui-elements/buttons/Button";

export const Finish = ({SetGameTimer}) => {
  
  const gameState = useSelector((store) => (store?.gameState));
  const user = useSelector((store) => (store?.user))

  const dispatch = useDispatch();
  const butHandler = () => {
    localStorage.removeItem('answQuest');
    localStorage.removeItem('gameState');
    localStorage.removeItem('gameTimer');
    dispatch(deleteGame());
    SetGameTimer(90);
  }

  useEffect(async () => {
    await fetch('/round/add', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: new Date(),
        countAnsweredCard: gameState.count_card, 
        totalScore: gameState.total_score, 
        userId: user._id,
      })
    })
      dispatch(deleteGame());
      localStorage.removeItem('answQuest');
      localStorage.removeItem('gameState');
      localStorage.removeItem('gameTimer');
      SetGameTimer(90);
  })

  
  return (
    <div className="flex flex-col">
      <h1>
        Ваш результат: 
      </h1>
      <div>Вы ответили на {gameState.count_card} вопросов.</div>
      <div>Вы заработали {gameState.total_score} очков.</div>
      {/* <Button name={'Начать новую игру'} link='/game/start'/> */}
      <button
       onClick={butHandler}
       className='my-4 inline-flex justify-center items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
       ><Link to={`/profile/${user._id}`}>Посмотреть профиль</Link></button>
    </div>
  )
}
