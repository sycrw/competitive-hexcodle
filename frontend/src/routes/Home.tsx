import {useEffect, useState} from 'react';
import {Button} from '../components/atoms/Button.tsx';
import {Input} from '../components/atoms/Input.tsx';
import {redirect, useNavigate} from 'react-router-dom';

export const Home = () => {

  const [slugInput, setSlugInput] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'luis = bruf';
  }, []);

  const createGame = () => {
    const slug = 'test';//createGame();
    redirect(`/game/${slug}`);
  };

  const joinGame = () => {
    //join game endpoint, await response befor rederect
    navigate(`/game/${slugInput}`);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center w-full max-w-96 gap-1">
        <Button onClick={createGame}>Create session</Button>
        <div className="w-full flex justify-center gap-1">
          <Input placeholder="SLUG" onChange={(e) => {
            setSlugInput(e.target.value);
          }}/> <Button onClick={joinGame}>Join session</Button>
        </div>
      </div>
    </div>
  );
};
