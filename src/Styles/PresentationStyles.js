import styled, { keyframes } from 'styled-components';
import colors from './colors';

const Header = styled.header`
    height: 100vh;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`

const Container =  styled.div`
    width: 100%;
    overflow: hidden;
    text-align: center;
    position: relative;

    h1 {
        font-size: 2.5em;
        color: ${colors.light};
        transition-delay: 0.3s;
    }
    p {
        transition-delay: 0.5s;
        font-size: 1.2em;
    }
    * {
        position: relative;
        transition: 0.6s;
    }
`

const stroke = keyframes`
    100% {
        stroke: ${colors.pink};
        stroke-dashoffset: 0;
        visibility: visible;
    }
`
const blur = keyframes`
    40% {
        stroke-width: 20px;
        filter: blur(10px);
    }
    100% {
        stroke-width: 10px;
        filter: blur(10px);
    }
`

const SvgContainer = styled.div`
    height: 340px;
    width: 450px;
    margin: auto;

    svg {
        width: 100%;
        position: absolute;
        left: 0;
        left: -20px;
        bottom: -100%;
        .stroke {
            stroke-width: 10px;
            stroke-linecap: round;
            fill: transparent;
            visibility: hidden;
            stroke-dasharray: 2628;
            stroke-dashoffset: 2625;
            stroke: ${colors.deepPink};
            animation: ${stroke} 0.5s linear forwards;
            animation-delay: 0.6s;
        }
        .fill {
            fill: ${colors.darkPink};
        }
        .blur {
            stroke-width: 1px;
            filter: blur(0);
            stroke: ${colors.pink};
            animation: ${blur} 1s linear forwards;
            animation-delay: 0.95s;
        }
    }
`

export { Header, Container, SvgContainer }