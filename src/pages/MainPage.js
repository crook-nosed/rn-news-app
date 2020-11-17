import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs,Left,Right,Body,Title,Thumbnail } from 'native-base';
import General from './tabs/GeneralCategory';
import Sports from './tabs/SportsCategory';
import Tech from './tabs/TechCategory';
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
          <Tab heading="General">
            <General />
          </Tab>
          <Tab heading="Sports">
            <Sports />
          </Tab>
          <Tab heading="Technology">
            <Tech />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}