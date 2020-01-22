import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Login from './src/screens/Login'
import Emp from './src/screens/Emp'
import Details from './src/screens/Details'

const AppNavigator = createStackNavigator({
     Login: Login,
     Employee: Emp,
     Details: Details
})

export default createAppContainer(AppNavigator)