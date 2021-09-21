import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ISSLocation from './screens/ISSLocation';
import MeteorScreen from './screens/MeteorScreen';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Meteor" component={MeteorScreen} />
          <Stack.Screen name="ISS" component={ISSLocation} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
