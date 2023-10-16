import React from 'react'
import './CheckboxSmallModule.css'


const CheckboxSmallModule = (props) => {
    return (
        <div className='form-check'>
            <input 
                type='checkbox' 
                id={props.name} 
                className='form-check-input' 
                checked={props.check}  
                onChange={e=>{
                    props.setCheck( e )
                }}
            />
            <label className='form-check-label' htmlFor={props.name}>{props.name}</label>
        </div>
    )
}

export default CheckboxSmallModule