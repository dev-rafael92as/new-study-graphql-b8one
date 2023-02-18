import React, { useState } from 'react'
import { Container } from './styles'

export const Header = () => {
    const [ loged, setLoged ] = useState(false)
  
    return (
    <Container>
      { !loged && 
        <>
            <div className='container-header'>
                <div className='logo-signIn'>
                    Academy <span>Store</span>
                </div>
            </div>
        </>
      }
    </Container>
  )
}
