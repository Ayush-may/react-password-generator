import React from 'react'
import './SliderButtons.css'

const SliderButtons = (props) => {
    return (
        <div className='SliderBtn-container'>
            <button className='btn btn-primary' onClick={props.copyToClipBoard} >Copy To Clipboard</button>
            <button className='btn btn-danger'  onClick={props.clearPass} >Clear</button>
        </div>
    )
}

export default SliderButtons