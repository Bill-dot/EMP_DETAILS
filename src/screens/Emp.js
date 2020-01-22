import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

export default class Emp extends React.Component {
    constructor(Props) {
        super(Props)
        const data_state=" "

        this.state = {
            data: " "

        }
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://employee-directory-services.herokuapp.com/employees')
            const resposeJSON = await response.json()

            // console.log(resposeJSON)

            this.setState({
                data: resposeJSON
            })
            data_state=this.state.data
        } catch (e) {
            console.log(e)
        }
    }

    


    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(data_state) => data_state.id}
                    renderItem={({ item }) => {
                        // console.log(item)
                        return <Text style={{fontSize: 30, marginHorizontal:10}} onPress={() => {
                            console.log('called')
                            return this.props.navigation.navigate('Details', {
                                picture: item.picture,
                                id: item.id,
                                firstName: item.firstName,
                                lastName: item.lastName,
                                email: item.email,
                                phone: item.phone,
                                title: item.title
                            })
                        }}>{item.firstName}</Text>
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})