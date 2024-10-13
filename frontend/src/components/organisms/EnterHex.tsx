import {useCallback, useEffect, useRef, useState} from 'react';
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/16/solid';
import {Button} from '../atoms/Button.tsx';

interface EnterHexProps {
  onSubmit: (newHex: string) => any;
}

export const EnterHex = ({onSubmit}: EnterHexProps) => {
  const [values, setValues] = useState<string[]>(['', '', '', '', '', '']);
  const [currentFocus, setCurrentFocus] = useState<number>(0);
  const itemsRef = useRef(new Array());
  const submitRef = useRef(0);

  const allowedValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', ''];

  const keyPress = useCallback((event) => {
    if (event.key === 'Backspace') {
      if (currentFocus > 0) {
        itemsRef.current[currentFocus - 1].focus();
        setValueForIndex(currentFocus, '');
        setCurrentFocus(currentFocus - 1);
      }
    }
  }, [currentFocus]);

  useEffect(() => {
    document.addEventListener("keyup", keyPress);
    return () => document.removeEventListener("keyup", keyPress);
  }, [keyPress]);

  function handleInput(index: number, value: string): void {
    const lastValue = value.slice(value.split('').length - 1);
    if (lastValue === '') {
      return;
    }

    if (allowedValues.includes(lastValue.toUpperCase())) {
      setCurrentFocus(index + 1);
      setValueForIndex(index, lastValue);
      if (index > 4) {
        submitRef.current.focus();
      } else {
        itemsRef.current[index + 1].focus();
      }
    }
  }

  function increaseValue(i: number) {
    setValueForIndex(i, allowedValues[(allowedValues.indexOf(values[i]) + 1) % allowedValues.length]);
  }

  function decreaseValue(i: number) {
    setValueForIndex(i, allowedValues[(allowedValues.indexOf(values[i]) - 1) % allowedValues.length]);
  }

  function setValueForIndex(index: number, value: string) {
    setValues([...values.slice(0, index), value.toUpperCase(), ...values.slice(index + 1)]);

  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center	items-center flex-wrap">
        <div className="lg:hidden invisible flex flex-row items-center flex-wrap">
          <Button className="m-1 w-20">SUBMIT</Button>
        </div>

        <div style={{flexGrow: '1 1 auto'}} className=" flex items-center">
          {[...Array(6)].map((_, i) => {
            return (
              <div key={i} className="flex flex-col">
                <button onClick={() => increaseValue(i)}><ChevronUpIcon/></button>
                <input value={values[i].toString()} ref={el => itemsRef.current[i] = el} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInput(i, event.currentTarget.value)}
                       className="w-10 h-10 text-center border-2 border-gray-300 rounded-lg mx-1" placeholder="F"/>
                <button onClick={() => decreaseValue(i)}><ChevronDownIcon/></button>
              </div>
            );
          })
          }
        </div>
        <div className="flex flex-row items-center flex-wrap">
          <Button ref={submitRef} onClick={() => onSubmit(values.join(""))} className="m-1 w-20">SUBMIT</Button>
        </div>

      </div>
    </div>
  );

};