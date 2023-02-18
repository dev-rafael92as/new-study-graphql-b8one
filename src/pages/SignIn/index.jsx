import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Container } from './styles'

export const SignIn = () => {

  return (
    <Container>
        <Header />

        <form className='container-authForm'>
          <h4>
            Olá, entre com e-mail e senha.
          </h4>

          <div className='container-inputs'>
            <Input type="email" id="email" placeholder="exemplo@email.com" label="Seu e-mail"/>
          
            <Input type="password" id="password" placeholder="Digite sua senha" label="Senha" icon="true"/>
          </div>


        </form>
    </Container>
  )
}
