import React, { Component } from 'react'
import { Dimensions, Share, Modal } from 'react-native'
import { WebView} from 'react-native-webview';
import { Container, Header, Body, Title, Left, Right, Icon,Button,Content} from 'native-base';

const windowHeight =  Dimensions.get('window').height - 56;

export default class ModalComponent extends Component {
    constructor(props) {
        super(props);
    }

    handleClose = () => {
        return this.props.onClose();
    }

    handleShare = () => {
        const {url, title} = this.props.articleData;
        const message = `${title}\n\nRead More @${url}\n\nShared via NL News Shorts`;
        return Share.share(
            {title, message, url: message},
            {dialogTitle:`Share ${title}`}
        );
    }

    render() {
        const { showModal, articleData } = this.props;
        const { url } = articleData;
        if( url != undefined ) {
        return (
            <Modal
                animationType="slide"
                transparent
                visible={showModal}
                onRequestClose={this.handleClose}
            >
                <Container style={{margin:15, marginBottom:0, backgroundColor:'#fff'}}>
                    <Header style={{backgroundColor:'#009387'}}>
                        <Left>
                            <Button onPress={this.handleClose} transparent>
                                <Icon name="close" style={{color: 'white', fontSize: 12}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title children={articleData.title} style={{color: 'white'}}/>
                        </Body>
                        <Right>
                            <Button onPress={this.handleShare} transparent>
                                <Icon name="share" style={{color: 'white', fontSize: 12}}/>
                            </Button>
                        </Right>
                    </Header>
                    <Content contentContainerStyle={{height: windowHeight}}>
                        <WebView source={{uri:url}} style={{flex: 1}}
                        onError={this.handleClose} startInLoadingState
                        scalesPageToFit
                        />
                    </Content>
                </Container>
            </Modal>
        );
        } else {
            return null;
        }
    }
}

