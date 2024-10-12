import {useEffect} from 'react';

export const Home = () => {

  useEffect(() => {
    document.title = "luis = bruf"
  }, []);
  return (
    <>
      <h1 className='text-4xl font-bold'>Hexcodle</h1>
      <button>Create session</button>
      <button>Join session</button>
    </>
  );
};
