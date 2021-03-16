// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screen/IndexScreen'
import {Provider} from './src/context/BlogContext'
import ShowScreen from './src/screen/ShowScreen'
import CreateScreen from './src/screen/CreateScreen'
import EditScreen from './src/screen/EditScreen'

function HomeScreen({navigation}) {
  return (
    <View >
      <IndexScreen  navigation={navigation}/>
    </View>
  );
}; 
function Show({navigation, route}){
  return(
    <View>
    <ShowScreen  navigation={navigation} route={route}/>
    </View>
  )
};
function Screen({navigation, route}){
  return(
    <View>
    <CreateScreen  navigation={navigation} route={route}/>
    </View>
  )
};
function Edit({navigation,route}){
  return(
    <View>
      <EditScreen navigation= {navigation} route={route} />
    </View>
  )
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Show" component={Show} />
        <Stack.Screen name="Screen" component={Screen} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <Provider>
     <App />
  </Provider>
};