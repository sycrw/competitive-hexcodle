import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {EnterHex} from '../components/organisms/EnterHex.tsx';
import {GameContext} from "../context/GameContext.ts"

export const Game = () => {
  const [game, setGame] = useState();

  let {gameId} = useParams();

  useEffect(() => {
    // loadGame(gameId);
    // setGame
  }, []);



  return (
    <GameContext.Provider value={game}>

      <EnterHex></EnterHex>

    </GameContext.Provider>
  )
    ;
};