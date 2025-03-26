import {useEffect, useRef, useState} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import {EnterHex} from '../components/organisms/EnterHex.tsx';
import {GameContext} from '../context/GameContext.ts';
import {Colors} from '../components/organisms/Colors.tsx';
import {GameWithPlayers, Player} from '../gen';
import {connect} from "../util/WebSocket.ts";
import {gameApi, playerApi} from "../util/OpenApiFactory.ts";
import {playerMessageHandler} from "../util/messages/handlers/player.ts";
import PlayerList from "../components/organisms/PlayerList.tsx";
import {Button} from "../components/atoms/Button.tsx";

export const Game = () => {
        const [game, setGame] = useState<GameWithPlayers | undefined>();
        const [guess, setGuess] = useState<string>("rgba(91,91,95,0.68)");
        let {gameSlug} = useParams<string>();
        let [searchParams] = useSearchParams();
        let playerId = Number(searchParams.get("playerId"));
        useEffect(() => {
            if (gameSlug) {
                gameApi.getGame(gameSlug).then((res) => {
                    setGame(res.data)
                });
            }
            connect(handleBets, handlePlayer, handleGame, {gameSlug: gameSlug});

        }, []);

        const handleBets = (message) => {
            console.log("BETS: " + JSON.stringify(message));
        };
        const handlePlayer = (message) => {
            console.log("handle Player:")
            setGame((prevState) => playerMessageHandler(message, prevState));
        };
        const handleGame = (message) => {
            console.log("GAME: " + JSON.stringify(message));
        };

        function bet(newHex: string) {
            const prefixed = `#${newHex}`
            setGuess(prefixed);

        }

        return (
            <GameContext.Provider value={game}>
                {game?.game?.gameState == "STARTED" && <>
                    <Colors color1={guess} color2={game.game?.colorHexCode!}/>
                    <EnterHex onSubmit={(newHex) => bet(newHex)}/>
                </>
                }
                {
                    game?.game?.gameState == "LOBBY" && (
                        <div className="flex flex-col items-center gap-1">
                            <PlayerList currentPlayerId={playerId}/>
                            <div className="w-96 flex justify-evenly items-center gap-1">
                                <Button onClick={() => {
                                    console.log(playerId, "playerId");
                                    playerApi.ready(gameSlug!, playerId)
                                }}>
                                    {
                                        game.playerList!.find((player: Player) => player.id == playerId)!.ready ? "Unready" : "Ready"
                                    }
                                </Button>
                                <p className="text-nowrap m-5" >{
                                    game.playerList!.filter((player: Player) => player.ready).length
                                } / {game.playerList!.length} </p>
                            </div>

                        </div>
                    )
                }

            </GameContext.Provider>
        )
            ;
    }
;