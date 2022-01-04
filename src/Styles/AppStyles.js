import styled from "styled-components"
import colors from "./colors"

const Main = styled.div`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: ${colors.text};
        font-family: 'DM Sans', sans-serif;
        font-size: 20px;
        text-decoration: none;
        transition: 0.3s;
    }
    ul {
        list-style: none;
    }
`

export default Main