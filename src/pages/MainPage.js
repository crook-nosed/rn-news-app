import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs,Left,Right,Body,Title } from 'native-base';
import TabCategory1 from './tabs/TabCategory1';
import TabCategory2 from './tabs/TabCategory2';
import TabCategory3 from './tabs/TabCategory3';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs >
            <Left/>
                <Body>
                    <Title>NL News Shorts</Title>
                </Body>
            <Right />
        </Header>
        <Tabs>
          <Tab heading="Tab1">
            <TabCategory1 />
          </Tab>
          <Tab heading="Tab2">
            <TabCategory2 />
          </Tab>
          <Tab heading="Tab3">
            <TabCategory3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}