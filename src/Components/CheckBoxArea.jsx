import React from 'react'
import './CheckBoxArea.css'
import CheckboxSmallModule from './CheckboxSmallModule' 


const CheckBoxArea = (props) => {
    return (
        <div className='checkBox-outer-container'>
            <div className='checkBox-container'>
                <CheckboxSmallModule name={'Upper-Case'} check={props.check.upperCase} setCheck={props.setCheck} />
                <CheckboxSmallModule name={'Lower-Case'} check={props.check.lowerCase}  setCheck={props.setCheck}/>
                <CheckboxSmallModule name={'Numbers'} check={props.check.number} setCheck={props.setCheck}/>
                <CheckboxSmallModule name={'Symbols'} check={props.check.symbol} setCheck={props.setCheck}/>
            </div>
        </div>
    )
}

export default CheckBoxArea