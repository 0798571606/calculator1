import { useState } from 'react';
import './calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('');
  const [expression, setExpression] = useState([]);

  function handleClick(value) {
    const lastItem = expression[expression.length - 1];
    if (['+', '-', '*', '÷'].includes(value) && ['+', '-', '*', '÷'].includes(lastItem)) {
      return;
    }
    setExpression([...expression, value]);
  }

  function handleResult() {
    const result = expression
      .join('')
      .split(/(\D)/g)
      .map((value) => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, crr, index, array) => {
        switch (crr) {
          case '+':
            return (acc += array[index + 1]);
          case '-':
            return (acc -= array[index + 1]);
          case '*':
            return (acc *= array[index + 1]);
          case '÷':
            return (acc /= array[index + 1]);

          default:
            return acc;
        }
      });
    setDisplay(Number.isInteger(result) ? result : result.toFixed(1));
    setExpression('');
  }

  return (
    <div className='app'>
      <h3 className='display'>{display ? display : expression}</h3>
      <button
        className='clear'
        onClick={() => {
          setDisplay('');
          setExpression([]);
        }}
      >
        Clear
      </button>

      <div className='calculator'>
        <section className='numbers'>
          <button onClick={() => handleClick(9)}>9</button>
          <button onClick={() => handleClick(9)}>9</button>
          <button onClick={() => handleClick(7)}>7</button>
          <button onClick={() => handleClick(6)}>6</button>
          <button onClick={() => handleClick(5)}>5</button>
          <button onClick={() => handleClick(4)}>4</button>
          <button onClick={() => handleClick(3)}>3</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(0)}>0</button>
        </section>
        <section className='operations'>
          <button onClick={() => handleClick('÷')}>÷</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleResult('=')}>=</button>
        </section>
      </div>
    </div>
  );
}

export default Calculator;
