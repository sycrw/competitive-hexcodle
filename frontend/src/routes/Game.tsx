import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {EnterHex} from '../components/organisms/EnterHex.tsx';
import {GameContext} from '../context/GameContext.ts';
import {Colors} from '../components/organisms/Colors.tsx';
import {gameApi} from '../util/OpenApiFactory.ts';
import {GameWithPlayers} from '../gen';
import {envSettings} from '../util/EnvSettings.ts';

export const Game = () => {
  const [game, setGame] = useState<GameWithPlayers | undefined>();
  let {gameId} = useParams<string>();
  const ws = new WebSocket(`https://${envSettings.getHost()}/ws`);

  ws.onmessage = function (event) {
    // This runs when receiving message.
    console.log(event.data);
  };

  useEffect(() => {
    if (gameId) {
      gameApi.getGame(gameId!)
             .then((response) => {
               setGame(response!.data);
               ws.onopen = () => {
                 // This runs when we connect.
                 // Submit a message to the server
                 ws.send(`Hello, WebSocket! Sent from a browser client.`);
               };
             });
    }
  }, []);

  function updateGame(newHex: string) {
    console.log(newHex);
    ws.send(newHex)
  }

  return (
    <GameContext.Provider value={game}>
      {game && <>
        <Colors color1={''} color2={'#292929'}/>
        <EnterHex onSubmit={(newHex) => updateGame(newHex)}/>
      </>
      }


    </GameContext.Provider>
  )
    ;
};