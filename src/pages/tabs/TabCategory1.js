import React, { Component } from 'react';
import { Alert,View,ActivityIndicator } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import HeadLine from '../../components/HeadLine';
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
    const view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text>Please wait ...</Text>
      </View>
    ) :
    (
      <List 
            dataArray={this.state.articles}
            renderRow = { data => 
            <HeadLine data={data} />}
          />

    );
    return (
      <Container>
        <Content>
          {view}
        </Content>
      </Container>
    );
  }
}