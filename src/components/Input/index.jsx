import React, { useState } from 'react'
import { Container } from './styles'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'


export const Input = ({icon, label, type, id, placeholder, ...rest}) => {
  const [ showPassword, setShowPassword ] = useState(false);
  const [ changeTypeInput, setChangeTypeInput ] = useState(true)

  return (
    <Container {...rest}>
        <label htmlFor={id}>{label}</label>
        <div className='wrapper-input'>
            <input type={changeTypeInput ? type : "text"} id={id} placeholder={placeholder}></input>
            {icon && 
            <div onClick={() => {
                setShowPassword(!showPassword)
                setChangeTypeInput(!changeTypeInput)
                }}>
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye/>}
            </div>
            }
        </div>
    </Container>
  )
}
