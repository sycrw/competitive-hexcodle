import {useEffect, useState} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import {EnterHex} from '../components/organisms/EnterHex.tsx';
import {GameContext} from '../context/GameContext.ts';
import {Colors} from '../components/organisms/Colors.tsx';
import {GameWithPlayers} from '../gen';
import {connect, disconnect, sendMessage} from "../util/WebSocket.ts";
import {gameApi} from "../util/OpenApiFactory.ts";

export const Game = () => {
	const [game, setGame] = useState<GameWithPlayers | undefined>();
	const [guess, setGuess] = useState<string>("rgba(91,91,95,0.68)");
	let {gameSlug} = useParams<string>();
	let {playerId} = useSearchParams();
	useEffect(() => {
		if(gameSlug){
			gameApi.getGame(gameSlug).then((res)=>{setGame(res.data)});
		}
		connect(handleBets,handlePlayer,handleGame,{gameSlug:gameSlug});

	}, []);

	const handleBets = (message) => {
		console.log("BETS: " + JSON.stringify(message));
	};
	const handlePlayer = (message) => {
		console.log("PLAYER: " + JSON.stringify(message));
	};
	const handleGame = (message) => {
		console.log("GAME: " + JSON.stringify(message));
	};

	function updateGame(newHex: string) {
		const prefixed = `#${newHex}`
		setGuess(prefixed);
		sendMessage({
			gameId:game?.game?.id,
			playerId: playerId,
			hexCode: guess
		},"/app/bet");
	}

	return (
		<GameContext.Provider value={game}>
			{game && <>
				<Colors color1={guess} color2={game.game?.colorHexCode!}/>
				<EnterHex onSubmit={(newHex) => updateGame(newHex)}/>
			</>
			}
		</GameContext.Provider>
	)
		;
};