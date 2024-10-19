import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {EnterHex} from '../components/organisms/EnterHex.tsx';
import {GameContext} from '../context/GameContext.ts';
import {Colors} from '../components/organisms/Colors.tsx';
import {gameApi} from '../util/OpenApiFactory.ts';
import {GameWithPlayers} from '../gen';
import * as SockJS from 'sockjs-client';
import {envSettings} from "../util/EnvSettings.ts";

export const Game = () => {
	const [game, setGame] = useState<GameWithPlayers | undefined>();
	let {gameId} = useParams<string>();
    let sock = new SockJS(`ws://${envSettings.getHost()}/ws`);
	useEffect(() => {

        sock.onopen = function() {
            console.log('open');
            sock.send('test');
        };
		if (gameId) {
			gameApi.getGame(gameId!)
				.then((response) => {
					setGame(response!.data);
				});
		}
	}, []);

	function updateGame(newHex: string) {
		console.log(newHex);
		sock.send(newHex)
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