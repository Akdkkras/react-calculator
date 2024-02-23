import './App.css'
import { useState } from 'react'

function App () {
  const [dot, setDot] = useState(0)
  const [displayNum, setDisplayNum] = useState(0)
  const [storage, setStorage] = useState(0)
  const [currentNumber, setCurrentNumber] = useState(0)
  const [operator, setOperator] = useState('')

  function clickOnNumber (number) {
    if (dot === 1) {
      setCurrentNumber(+(currentNumber + number) / 10)
      setDisplayNum(+(currentNumber + number) / 10)
      setDot(dot + 1)
    } else {
      if (currentNumber === '0') {
        if (number === '0') return
        setCurrentNumber(+number)
        setDisplayNum(+number)
        return
      }
      setCurrentNumber(+(currentNumber + number))
      setDisplayNum(+(currentNumber + number))
    }
  }

  function clear () {
    setDisplayNum(0)
    setCurrentNumber(0)
    setStorage(0)
    setDot(0)
  }

  function changeSign () {
    setDisplayNum(-displayNum)
    setCurrentNumber(-currentNumber)
  }

  function makePercent () {
    setDisplayNum(+((displayNum / 100).toFixed(17)))
    setCurrentNumber(+((currentNumber / 100).toFixed(17)))
  }

  function clickOnOperator (operator) {
    setOperator(operator)
    setStorage(currentNumber)
    setCurrentNumber(0)
    // setDisplayNum(0)
  }

  function calculate () {
    switch (operator) {
      case '/':
        setDisplayNum(storage / currentNumber)
        setCurrentNumber(storage / currentNumber)
        break
      case 'x':
        setDisplayNum(storage * currentNumber)
        setCurrentNumber(storage * currentNumber)
        break
      case '-':
        setDisplayNum(storage - currentNumber)
        setCurrentNumber(storage - currentNumber)
        break
      case '+':
        setDisplayNum(storage + currentNumber)
        setCurrentNumber(storage + currentNumber)
        break
    }

    setOperator('')
  }

  return (
    <div className="container">
      <div className="calculator">
        <div className="dial">{displayNum}</div>
        <div className="line">
          <button className="btn" onClick={clear}>C</button>
          <button className="btn" onClick={changeSign}>+-</button>
          <button className="btn" onClick={makePercent}>%</button>
          <button className="btn" onClick={() => clickOnOperator('/')}>/
          </button>
        </div>
        <div className="line">
          <button className="btn" onClick={() => clickOnNumber('7')}>7</button>
          <button className="btn" onClick={() => clickOnNumber('8')}>8</button>
          <button className="btn" onClick={() => clickOnNumber('9')}>9</button>
          <button className="btn" onClick={() => clickOnOperator('x')}>x
          </button>
        </div>
        <div className="line">
          <button className="btn" onClick={() => clickOnNumber('4')}>4</button>
          <button className="btn" onClick={() => clickOnNumber('5')}>5</button>
          <button className="btn" onClick={() => clickOnNumber('6')}>6</button>
          <button className="btn" onClick={() => clickOnOperator('-')}>-
          </button>
        </div>
        <div className="line">
          <button className="btn" onClick={() => clickOnNumber('1')}>1</button>
          <button className="btn" onClick={() => clickOnNumber('2')}>2</button>
          <button className="btn" onClick={() => clickOnNumber('3')}>3</button>
          <button className="btn" onClick={() => clickOnOperator('+')}>+
          </button>
        </div>
        <div className="line">
          <button className="btn" onClick={() => clickOnNumber('0')}>0</button>
          <button className="btn" onClick={() => setDot(dot + 1)}>.</button>
          <button className="double-btn" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
