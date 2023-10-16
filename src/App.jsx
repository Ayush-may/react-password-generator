import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import React,{useState} from 'react'
import jquery from "jquery";
import Header from './components/Header'
import OtherComponents from './components/OtherComponents'
import PasswordShow from './components/PasswordShow'
import Slider from './components/Slider'
import SliderButtons from './components/SliderButtons'
import CheckBoxArea from './components/CheckBoxArea'
import {generatePass} from './components/logic'

// https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html
//Symbols = 33 - 47 , 58 - 63 , 91 - 96 , 123 - 126
//Numbers =  48 to 57
//lowerCase = 65 to 90
//UpperCase = 97 to 122

function App() {
  const [range, setRange] = useState(0);
  const [checkValue, setCheck] = useState({
    nubmer: false,
    symbol: false,
    upperCase: false,
    lowerCase: false
  });
  const [pass, setPass] = useState('');


  const getPass =  ()=>{
    setPass( generatePass(checkValue, range) );
  }



  const checkingCheck=(e)=>{
    // if( e.target.id === 'Upper-Case' )
    switch ( e.target.id ) {
      case 'Upper-Case':
        // console.log('upper')
        setCheck({ ...checkValue, upperCase: e.target.checked } );
        break;
      case 'Lower-Case':
        // console.log('lower')
        setCheck({ ...checkValue, lowerCase: e.target.checked } );
        break;
      case 'Numbers':
        // console.log('Number')
        setCheck({ ...checkValue, number: e.target.checked } );
        break;
      case 'Symbols':
        // console.log('symbol')
        setCheck({ ...checkValue, symbol: e.target.checked } );
        break;
      default:
        break;
    }
  }

  const handleRangeValue = (e)=>{
    setRange( e.target.value );    
  }

  const copyToClipBoard = ()=>{
    navigator.clipboard.writeText(pass+'');
  }

  const clearPass = ()=>{
    setPass('');
  }

  return (
      <>
        <div className='test'>
          
        </div>

        <div className="container">
            <Header />
            <Slider range={range} getPass={getPass} handleRangeValue={handleRangeValue} />
            <PasswordShow pass={pass}/>
            <SliderButtons clearPass={clearPass} copyToClipBoard={copyToClipBoard} />
            <CheckBoxArea check={checkValue} setCheck={checkingCheck} />     
        </div>
      </>
  )

}

export default App
