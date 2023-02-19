import React, { useState } from 'react'
import { Container } from './styles'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'


export const Input = ({icon, label, type, id, placeholder, ...rest}) => {
  const [ showPassword, setShowPassword ] = useState(false);
  const [ changeTypeInput, setChangeTypeInput ] = useState(true)

  return (
    <Container>
        <div className='container-label'>
        <label htmlFor={id}>{label}</label>
        {type === 'password' && <a className='forget-password' href='#'>Esqueci minha senha</a>}
        </div>
        <div className='wrapper-input'>
            <input {...rest} type={changeTypeInput ? type : "text"} id={id} placeholder={placeholder}></input>
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
