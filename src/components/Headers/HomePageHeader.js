import styled from 'styled-components'

import ImageContainer from '../Containers/ImageContainer'
import Logo from '../Logo'
import NameEmailForm from '../NameEmailForm'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80vh;
    color: ${({ theme }) => theme.colors.light};
    padding-left: 80px;
`

const FormDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`

export default function HomePageHeader () {
    return (
        <ImageContainer>
            <Container>
                <Logo />
                <h2>A melhor brincadeira do natal.</h2>
            </Container>
            <FormDiv>
                <NameEmailForm />
            </FormDiv>
        </ImageContainer>
    )
}