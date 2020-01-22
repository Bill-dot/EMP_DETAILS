import React from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

export default class Login extends React.Component {

    constructor(props) {
        super(props)

        let check=0

        this.state = {
            email: '',
            password: '',
        }


    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>User Name</Text>
                    <TextInput
                        placeholder='UserName'
                        textContentType='name'
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    <View>
                        <Text style={{ color: 'red' }}>
                            {(this.state.email.length > 2 && Boolean(this.check)) ? '' : 'please enter userName'}
                        </Text>
                    </View>
                    <Text>Password</Text>
                    <TextInput
                        placeholder='Password'
                        textContentType="password"
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                    <View>
                        <Text style={{ color: 'red' }}>
                            {this.state.password.length  > 2 ? '' : 'please enter password'}
                        </Text>
                    </View>
                </View>
                <View>
                    <Button
                        title='Submit'
                        onPress={() => {
                            this.check=1
                            return this.props.navigation.navigate('Employee')
                        }}
                    />
                </View>


            </View>

        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center'
    }
})