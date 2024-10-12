import {Outlet} from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <div className="flex flex-col items-center my-5">
        <h1 className="text-5xl font-bold">Hexcodle</h1>
      </div>
      <Outlet/>
    </>
  );
};