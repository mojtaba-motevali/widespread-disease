import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

const AppHeader = props => {
    return (
        <Container>
            <Header>
                <Body>
                    <Title>Disease app </Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
      </Container>
    )
}

export default AppHeader;