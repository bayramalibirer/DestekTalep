import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image, } from 'react-native'


import Support from "../Pages//Support/Support.js"
import List from "../Pages/List/List.js"



const Tab = createBottomTabNavigator();


const Tabs = ({LoginStack}) => {
    return (
        <Tab.Navigator  screenOptions={{tabBarShowLabel:false}}>
            <Tab.Screen name="Support" component={Support} options={{ 
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Image
                    source={require('../assets/help.png')}
                    style={{ tintColor: color, width: size, height: size }}
                  />
                ),
                }} />
            <Tab.Screen name="List" component={List} 
             options={{ 
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Image
                    source={require('../assets/list.png')}
                    style={{ tintColor: color, width: size, height: size }}
                  />
                ),
                }} />
            <Tab.Screen name="LoginTab" component={LoginStack} 
             options={{ 
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Image
                    source={require('../assets/login.png')}
                    style={{ tintColor: color, width: size, height: size }}
                  />
                ),
                }} />
        </Tab.Navigator>
    )
}

export default Tabs;

