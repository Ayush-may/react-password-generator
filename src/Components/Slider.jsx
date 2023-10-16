import React,{useState} from 'react'
import './Slider.css'
import SliderButtons from './SliderButtons';


const Slider = (props) => {
    
    
    return (
    <div className='range-container container'>
        <input type='range' 
                className='slider form-range' 
                onChange={ e=>{
                    props.handleRangeValue(e);
                    props.getPass();
                }}
                min='1' max='20' 
                value={props.range} 
        />
        <div className='slider-value'>{props.range}</div>
    </div>
    )
}

export default Slider