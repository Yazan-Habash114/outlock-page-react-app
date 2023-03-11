import React from 'react'
import styled from 'styled-components'

const MsgTitle = styled.h3`
    color: #323130;
    font-size: 16px;
    font-weight: 400;
`

const MsgText = styled.p`
    color: #605E5C;
    font-size: 16px;
`

const Message = ({ char, color }) => {
    return (
        <div>
            <MsgTitle>Lorem Ipsum</MsgTitle>
            <MsgText>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusalo…
            </MsgText>
        </div>
    )
}

export default Message