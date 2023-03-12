import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: ${props => props.color};
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 18px; */
`

const Char = styled.p`
    color: white;
`

const MessageIcon = ({ color, char }) => {
    return (
        <Container color={color}>
            <Char>{char}</Char>
        </Container>
    )
}

export default MessageIcon