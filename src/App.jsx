import { useState } from 'react'
import './styles/index.css'

function Display({value}){
  return (
    <div className='display'>
      {value}
    </div>
  )
}

function ButtonPanel({onButtonClick}){
  const buttons =  
  ['AC', '%','+/-', '/',
  '7', '8', '9', 'X',
  '4', '5', '6', '+',
  '1', '2', '3', '-',
  '0', '.', '=']; // added missing operands and changed * to x and did a reorder

  const ids='a';

  return(
    <div className="button-panel">
      {buttons.map((btn,index)=>( <button key={btn} id={String.fromCharCode(65 + index)} 
      onClick={()=>onButtonClick(btn)}>
        {btn}
      </button>
      ))}
    </div>
  );
}

function App() {
    const [input,setInput]=useState("");

    const handleButtonClick = (value) => {
      switch (value) { // changed if condition to switch case to handle the added operands
      case '=':{
        try {
          setInput(eval(input).toString());
        }
        catch(error){
          setInput('Error');
        }
        break;
      }

      case 'X': {
        setInput(input + '*');
        break;
      }

      case 'AC': {
        setInput('');
        break;
      }

      case '+/-': {
        setInput((Number(input) * -1)); //fails when it encounters an operator (results into NaN)
        break;
      }



      
      default: {
        setInput(input + value);
        break;
      } 
    }
    };

    return (
    <div className='calculator'>
    <Display value={input}/>
    <ButtonPanel onButtonClick={handleButtonClick} />
    </div>
    )
}

export default App
