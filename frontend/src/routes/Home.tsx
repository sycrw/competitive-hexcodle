import {useEffect, useState} from 'react';
import {Button} from '../components/atoms/Button.tsx';
import {Input} from '../components/atoms/Input.tsx';
import {useNavigate} from 'react-router-dom';
import {gameApi} from '../util/OpenApiFactory.ts';

export const Home = () => {

    const [slugInput, setSlugInput] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const createGame = () => {
        setLoading(true);
        gameApi.createGame().then((response) => {
            navigate(`/game/${response.data.game?.slug}?playerId=${response.data.playerList![0].id}`);
            setLoading(false)
        }).catch((e) => {
            setLoading(false);
            throw e
        });
    };

    const joinGame = async () => {
        try {
            const res = await gameApi.joinGame(slugInput);
            navigate(`/game/${slugInput}?playerId=${res.data.id}`);
        } catch (e) {
            // TODO GAME NOT FOUND
            throw e;
        }
    };

    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col items-center w-full max-w-96 gap-1">
                <Button onClick={createGame} animated={true}>Create Game</Button>
                <div className="w-full flex justify-center gap-1">
                    <Input placeholder="SLUG" onChange={(e) => {
                        setSlugInput(e.target.value);
                    }}/> <Button onClick={joinGame}>Join session</Button>
                </div>
            </div>
        </div>
    );
};
