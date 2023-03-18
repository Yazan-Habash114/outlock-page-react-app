import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faStar } from '@fortawesome/free-regular-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

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
    margin-right: 15px;
`

const Inbox = () => {
    return (
        <Container>
            <Left>
                <FontAwesomeIcon icon={faCircleCheck} color='#605E5C' />
                <Title>Inbox</Title>
                <FontAwesomeIcon icon={faStar} color='#0178D4' />
            </Left>
            <Right>
                Filter <FontAwesomeIcon icon={faAngleDown} color='#0178D4' />
            </Right>
        </Container>
    )
}

export default Inbox