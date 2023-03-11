import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 332px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Right = styled.div``

const Left = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h2`
    color: #323130;
    font-size: 17px;
    margin-left: 17px;
`

const Icon = styled.p`
    color: #605E5C;
    /* width: 17px; */
    /* height: 17px; */
    /* border-radius: 50%; */
`

const Star = styled.p`
    /* width: 17px; */
    /* height: 17px; */
    margin-left: 15px;
`

const Filter = styled.p`
    color: #0178D4;
`

const Inbox = () => {
    return (
        <Container>
            <Left>
                <Icon>Icon</Icon>
                <Title>Inbox</Title>
                <Star>Star</Star>
            </Left>
            <Right>
                <Filter>Filter</Filter>
            </Right>
        </Container>
    )
}

export default Inbox