import styled from 'styled-components'

const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryLight};
    padding: 20px;
    margin: 20px;
    max-width: 200px;
    border-radius: 10px;
`

export default function StepCard () {
    return (
        <Card>
            <h3>1. Título</h3>
            <p>Descrição do card.</p>
        </Card>
    )
}