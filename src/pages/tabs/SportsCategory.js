import React, { Component } from 'react';
import { Alert,View,ActivityIndicator } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import HeadLine from '../../components/HeadLine';
import { returnArticles } from '../../rest_service/news_api_call';
import ModalComponent from '../../components/Modal';
export default class ListThumbnailExample extends Component {

  state = {
    isLoading: true,
    data: null,
    setModalVisible: false,
    modalArticleData: {}

  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  }

  componentDidMount() {
    returnArticles('sports').then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error => {
      Alert.alert('Error', 'Something went wrong!');
    }
    )
  }

  render() {
    console.log(this.state.data);

    let view = this.state.isLoading ? (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
        <Text style={{marginTop: 10}} children="Please Wait.." />
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={(data) => {
            return (
              <HeadLine onPress={this.handleItemDataOnPress} data={data} />
            )
        }} />
    )

    return (
      <Container>
        <Content>
          {view}
        </Content>
        <ModalComponent 
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}