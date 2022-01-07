import styled from 'styled-components'
import colors from './colors'

const Title = styled.h2`
    background-color: ${colors.dark};
    width: fit-content;
    padding: 0 10px;
    span {
        font-size: 1.8em;
    }
`
const Container = styled.div`
    width: 100%;
    max-width: 800px;
    margin: auto;
`

export { Title, Container }