import styled from "styled-components"
import colors from "./colors"

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    position: fixed;
    top: 0;
    width: 100%;
    
    svg {
        width: 50px;
        fill: ${colors.darkPink};
    }
`

const Ul = styled.ul`
    display: flex;
    
    li {
        margin-left: 30px;
        
        span {
            font-size: 0.7em;
        }
        &:hover span {
            color: ${colors.darkPink}; 
        }
    }
`

export { Nav, Ul }