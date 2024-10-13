import "./Button.css";
import {ButtonHTMLAttributes, forwardRef, ReactNode} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<any> {
  children: ReactNode;
  animated?: boolean;
  ref?: any
}

export const Button = forwardRef(function Button(props: ButtonProps, ref) {
  const { animated, className } = props;

  // Basic CSS for the button, with conditional animation class
  const css = `${className} h-10 px-2 border-2 border-gray-300 rounded-lg w-full ${
                                                                                   animated ? 'whoosh-animation' : ''
  }`;
  return (
    <>
      <button {...props} ref={ref} className={css}>{props.children}</button>
    </>
  );
})