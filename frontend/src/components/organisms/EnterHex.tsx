import {useRef, useState} from 'react';
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/16/solid';
import {Button} from '../atoms/Button.tsx';

export const EnterHex = () => {
  const [values, setValues] = useState<string[]>(['', '', '', '', '', '']);
  const [currentFocus, setCurrentFocus] = useState<number>(0);
  const itemsRef = useRef(new Array());

  const allowedValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', ''];

  addEventListener('keyup', (event) => {
    if (event.key === 'Backspace') {
      console.log('backspace');
      if (currentFocus > 0) {
        setValueForIndex(currentFocus, '');
        itemsRef.current[currentFocus - 1].focus();
        setCurrentFocus(currentFocus - 1);
      }
    }
  });

  function handleInput(index: number, value: string): void {
    const lastValue = value.slice(value.split('').length - 1);
    if (lastValue === '') {
      return;
    }

    if (allowedValues.includes(lastValue.toUpperCase())) {
      setCurrentFocus(index + 1);
      setValueForIndex(index, lastValue);
      itemsRef.current[index + 1].focus();
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
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center">
        <Button className="invisible m-1">SUBMIT</Button>

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
        <Button className="m-1">SUBMIT</Button>
      </div>
    </div>
  );

};