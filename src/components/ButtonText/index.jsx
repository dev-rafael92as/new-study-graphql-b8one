import React from 'react'
import { Container } from './styles'

export const ButtonText = ({icon: Icon, title, ...rest}) => {
  return (
    <Container {...rest}>
        {title}
        {Icon && <Icon size={20}/>}
    </Container>
  )
}
