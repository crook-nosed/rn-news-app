import React , { Component } from 'react';
import { View } from 'react-native';
import { ListItem, Left, Body, Right, Button,Text,Thumbnail} from 'native-base';
import TimeFormatter from './TimeFormatter';

class Headline extends Component {

    constructor(props){
        super(props);
        this.data = props.data;
    }

    render() {
        return (
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: this.data.urlToImage !== null ? this.data.urlToImage : 'https://i.ibb.co/y8DDq6L/newslaundry-logo-5eb0c0029b58ffa7d085.png' }} />
                </Left>
                <Body>
                    <Text not numberOfLines={1}>{this.data.title}</Text>
                    <Text note numberOfLines={2}>{this.data.description}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>{this.data.source.name}</Text>
                    <TimeFormatter time={this.data.publishedAt}/>
                </View>
                </Body>
                <Right>
                    <Button transparent>
                    <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        );
    }
}

export default Headline;
