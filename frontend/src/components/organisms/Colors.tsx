import {useEffect, useRef} from 'react';

interface GameProps {
  color1: string;
  color2: string;
}

export const Colors = ({color1,color2}:GameProps)=>{

  return(<div className="flex justify-center gap-2 w-full">
    <div style={{backgroundColor: color1}} className={`w-96 h-96 rounded-xl`}>

    </div>
    <div style={{backgroundColor: color2}} className={`w-96 h-96 rounded-xl`}>

    </div>
  </div>);
}