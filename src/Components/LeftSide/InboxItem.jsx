import React from 'react'
import styled from 'styled-components'
import Message from './Message'
import MessageIcon from './MessageIcon'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 332px;
    height: 81px;
    background-color: ${props => props.background};
    cursor: pointer;
    border-radius: 4px;
`

const IconBox = styled.div`
    width: 100px;
    display: flex;
    justify-content: center;
    padding-top: 18px;
`

const RadioButton = styled.div`
    background-color: #fff;
    border: 1px solid #979797;
    width: 16px;
    height: 16px;
    border-radius: 50%;
`

const InboxItem = ({ radio, color, char, background }) => {
    return (
        <Container background={background}>
            <IconBox>
                {radio ? <RadioButton /> : null}
                {radio ? null : <MessageIcon color={color} char={char} />}
            </IconBox>
            <Message />
        </Container>
    )
}

export default InboxItem