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
    < parei aqui >
    
    justify-content: center;
    min-height: 80vh;
    color: ${({ theme }) => theme.colors.light};
    padding-left: 80px;
`

export default function HomePageHeader () {
    return (
        <ImageContainer>
            <Container>
                <Logo />
                <h2>A melhor brincadeira do natal.</h2>
            </Container>

        </ImageContainer>
    )
}