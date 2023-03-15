import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid #605E5C;
    width: 332px;
    padding: 13px 18px;
    border-radius: 4px;
`

const Text = styled.p`
    color: #323130;
    font-size: 14px;
`

const Previous = ({ text }) => {
    return (
        <Container>
            <Text>{text}</Text>
        </Container>
    )
}

export default Previous