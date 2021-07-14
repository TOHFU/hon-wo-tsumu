import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NativeBaseProvider} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from './src/screens/home';
import Search from './src/screens/search';
import Recommend from './src/screens/Recommend';

export type RootBottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Recommend: undefined;
};

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Tab.Navigator
          screenOptions={({route}) => {
            switch (route.name) {
              case 'Home':
                return {
                  title: 'ほんだな',
                  tabBarIcon: ({color, size}) => (
                    <Icon name="book" size={size} color={color} />
                  ),
                };
              case 'Search':
                return {
                  title: 'つむ',
                  tabBarIcon: ({color, size}) => (
                    <Icon name="seedling" size={size} color={color} />
                  ),
                };
              case 'Recommend':
                return {
                  title: 'ねこ',
                  tabBarIcon: ({color, size}) => (
                    <Icon name="cat" size={size} color={color} />
                  ),
                };
              default:
                return {};
            }
          }}
          tabBarOptions={{
            activeTintColor: '#333',
            inactiveTintColor: '#aaa',
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Recommend" component={Recommend} />
        </Tab.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
