import React from 'react'
import styled from 'styled-components'
import Inbox from './Inbox'
import InboxItem from './InboxItem'
import Previous from './Previous'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 351px;
`

const LeftSide = () => {
    return (
        <Container>
            <Inbox />
            <InboxItem radio={true} color='' char='' background={'#C7E0F4'} />
            <InboxItem radio={false} color='#8E562E' char='A' background={'white'} />
            <InboxItem radio={false} color='#E3008C' char='T' background={'white'} />
            <Previous text={'April'} />
            <InboxItem radio={false} color='#4F6BEE' char='N' background={'white'} />
            <Previous text={'Older'} />
            <InboxItem radio={false} color='#CA5110' char='L' background={'white'} />
        </Container>
    )
}

export default LeftSide