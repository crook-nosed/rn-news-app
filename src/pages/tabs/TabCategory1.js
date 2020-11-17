import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { returnArticles } from '../../rest_service/news_api_call';
export default class ListThumbnailExample extends Component {

  state = {
    isLoading:true,
    articles:null,

  }

  componentDidMount() {
    returnArticles().then(res => {
      this.setState({
        isLoading:false,
        articles:res,
      })
      ,err => Alert.alert("Error","Something went wrong..");
    })
  }
  render() {
    console.log(this.state.articles);
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://i.ibb.co/y8DDq6L/newslaundry-logo-5eb0c0029b58ffa7d085.png' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://i.ibb.co/y8DDq6L/newslaundry-logo-5eb0c0029b58ffa7d085.png' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://i.ibb.co/y8DDq6L/newslaundry-logo-5eb0c0029b58ffa7d085.png' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}