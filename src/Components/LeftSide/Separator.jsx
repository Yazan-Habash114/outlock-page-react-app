import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid #323130;
    width: 332px;
`

const Text = styled.p`
    color: #323130;
    font-size: 14px;
    margin-left: 18px;
`

const Separator = ({ text }) => {
    return (
        <Container>
            <Text>{text}</Text>
        </Container>
    )
}

export default Separator