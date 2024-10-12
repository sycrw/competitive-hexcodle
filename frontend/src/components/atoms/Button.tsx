import {ButtonHTMLAttributes, ReactNode} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<any> {
  children: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const css = `${props.className} h-10 px-2 border-2 border-gray-300 rounded-lg w-full`;
  return (
    <>
      <button {...props} className={css}>{props.children}</button>
    </>
  );
};