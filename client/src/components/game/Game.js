import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Finish } from "../finish/Finish";
import { GameTable } from "./GameTable";

export const Game = () => {
  let [gameTimer, SetGameTimer] = useState(
    JSON.parse(localStorage.getItem('gameTimer')) ?? 90
  );
  const gameState = useSelector((store) => (store?.gameState));

  useEffect(() => {
    const timer = setInterval(() => {
      if (!gameTimer) {
        console.log('Время вышло!');
        clearInterval(timer);
      }
      SetGameTimer(gameTimer --);
      localStorage.setItem('gameTimer', JSON.stringify(gameTimer));
    }, 1000);

    if (!(JSON.parse(localStorage.getItem('gameState')))) localStorage.setItem('gameState', JSON.stringify(gameState)); 
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, []);
return gameTimer ? <GameTable gameTimer={gameTimer}/> : <Finish SetGameTimer={SetGameTimer}/>;
}