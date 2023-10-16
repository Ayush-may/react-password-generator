import React, { useState } from 'react'
import './PasswordShow.css'


const PasswordShow = (props) => {
    // const [val,setVal] = useState(props.pass);


    return (
        <div className={`passwordShow-container`}>
            {
                props.pass === '' ? '':
                <div className='passwordArea'>{props.pass}</div> 
            }
        </div>
    )
}

export default PasswordShow