import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class Details extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <View>
                <Text> Emp details</Text>
                <Image source={{ uri: this.props.navigation.getParam('picture') }} style={{ height: 200, width: 200 }} />
                <Text>ID : {this.props.navigation.getParam('id')}</Text>
                <Text>firstname: {this.props.navigation.getParam('firstName')}</Text>
                <Text>lastname: {this.props.navigation.getParam('lastName')}</Text>
                <Text>email: {this.props.navigation.getParam('email')}</Text>
                <Text>phone: {this.props.navigation.getParam('phone')}</Text>
                <Text>title: {this.props.navigation.getParam('title')}</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({})