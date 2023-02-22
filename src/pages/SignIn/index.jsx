import { useMutation } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { SIGN_IN } from '../../graphql/signIn'
import { Container } from './styles'

export const SignIn = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const navigate = useNavigate()
  
  const [SignInPage, { data, error }] = useMutation(SIGN_IN);
  
  // const handleAuth = async (event) => {
  //   event.preventDefault();
  //   await signIN({variables: {input: {email, password}}})
  //   if (!data?.signIn || error) return;
  //   console.log('data', data)
  // }

  useEffect(() => {
    if(data) {
      localStorage.setItem("b8one@token", (data.signIn.token))
      navigate("/dashboard")
    }
  }, [data])

  useEffect(() => {
    if (localStorage.getItem("b8one@token")){
      navigate("/dashboard")
    }
  }, [])

  const signIn = (event) => {
    event.preventDefault();
    SignInPage({variables: {input: {email, password}}})

    console.log(data)
  }

  console.log('email', email, 'senha', password)
  // console.log(signIn);
  
  return (
    <Container>
        <Header />

        <form className='container-authForm'>
          <h4>
            Olá, entre com e-mail e senha.
          </h4>

          <div className='container-inputs'>
            <Input type="email" id="email" placeholder="exemplo@email.com" label="Seu e-mail" onChange={(e) => setEmail(e.target.value)}/>
          
            <Input type="password" id="password" placeholder="Digite sua senha" label="Senha" icon="true" onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className='container-keep-conect'>
            <input type="checkbox" id="keep-conect"></input>
            <label htmlFor="keep-conect">Manter conectado</label>
          </div>

          <div className='wrapper-button'>
            <Button title="Entrar" onClick={signIn}/>
          </div>

          <div className='wrapper-signUp'>
            <ButtonText title="Não possui conta? Cadastre-se!" to="/"/> 
          </div>

        </form>
    </Container>
  )
}
