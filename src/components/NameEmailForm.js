import styled from 'styled-components'

import Input from './Input'
import Button from './Button'

const Form = styled.form`

`

function NameEmailForm ({ buttonText }) {
    return (
        <Form>
            <Input 
                placeholder="Seu nome"
                required
            />
            <Input
                type="email" 
                placeholder="Seu email"
                required
            />
            <Button>{ buttonText }</Button>
        </Form>
    )
}

NameEmailForm.defaultProps = {
    buttonText: "Criar"
}

export default NameEmailForm