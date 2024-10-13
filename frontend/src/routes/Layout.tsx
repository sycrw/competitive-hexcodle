import {Outlet, useNavigate} from 'react-router-dom';

export const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center my-5">
        <button onClick={() => navigate("/") } className="text-5xl font-bold">Hexcodle</button>
      </div>
      <Outlet/>
    </>
  );
};