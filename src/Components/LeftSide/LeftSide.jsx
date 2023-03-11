import React from 'react'
import styled from 'styled-components'
import Inbox from './Inbox'
import InboxItem from './InboxItem'
import Separator from './Separator'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const LeftSide = () => {
    return (
        <Container>
            <Inbox />
            <InboxItem radio={true} color='' char='' background={'#C7E0F4'} />
            <InboxItem radio={false} color='#8E562E' char='A' background={'white'} />
            <InboxItem radio={false} color='#E3008C' char='T' background={'white'} />
            <Separator text={'April'} />
            <InboxItem radio={false} color='#4F6BEE' char='N' background={'white'} />
            <Separator text={'Older'} />
            <InboxItem radio={false} color='#CA5110' char='N' background={'white'} />
        </Container>
    )
}

export default LeftSide