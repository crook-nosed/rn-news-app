import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import moment from 'moment'

export default class TimeFormatter extends Component {
    constructor(props) {
        super(props);
        this.date = props.time;
    }

    render() {
        const time = moment( this.date || moment.now() ).fromNow();
        return (
            <Text note style={{marginHorizontal:10}}>{time}</Text>
        );
    }
}
