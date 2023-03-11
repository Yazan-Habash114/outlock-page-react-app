import React from 'react'
import styled from 'styled-components'
import Message from './Message'
import MessageIcon from './MessageIcon'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 332px;
    background-color: ${props => props.background};
`

const RadioButton = styled.div`
    background-color: #fff;
    border: 2px solid #979797;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin: 0 18px;
    cursor: pointer;
`

const InboxItem = ({ radio, color, char, background }) => {
    return (
        <Container background={background}>
            <div>
                {radio ? <RadioButton /> : null}
                {radio ? null : <MessageIcon color={color} char={char} />}
            </div>
            <div>
                <Message />
            </div>
        </Container>
    )
}

export default InboxItem