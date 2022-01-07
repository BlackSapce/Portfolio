import React, { Fragment } from 'react'
import styled from 'styled-components'
import colors from '../Styles/colors'

const PinkUppercase = styled.span`
    color: ${colors.darkPink};
`

const PinkUpper = props => {
    return (
        <Fragment>
            <PinkUppercase>
                {props.children.charAt(0)}
            </PinkUppercase>
            <span>{props.children.slice(1)}</span>
        </Fragment>
    )
}

export default PinkUpper
