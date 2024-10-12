import {BallTriangle} from 'react-loader-spinner';

export const LoadingSpinner = () => {
  return (
           <>
             <div className="absolute top-1/2 left-1/2">
               <BallTriangle
                 height={100}
                 width={100}
                 radius={5}
                 color="#4fa94d"
                 ariaLabel="ball-triangle-loading"
                 wrapperStyle={{}}
                 wrapperClass=""
                 visible={true}
               />

             </div></>
             );
             };