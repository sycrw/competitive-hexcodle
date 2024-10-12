import {InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<any>{
}
export const Input = (props:InputProps) => {
  return(
    <input className="border-2 border-gray-300 rounded-lg w-full text-center"  {...props}/>
  )
}