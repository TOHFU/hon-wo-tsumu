import React from 'react';
import {StyleSheet} from 'react-native';
import {Center, View, Text, Button} from 'native-base';

import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RootBottomTabParamList} from '../../../App';

type HomeScreenNavigationProp = BottomTabNavigationProp<
  RootBottomTabParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <View style={page.container}>
      <Center flex={1}>
        <Text>Home</Text>
        <Button marginTop="2" onPress={() => navigation.navigate('Search')}>
          <Text>to Search</Text>
        </Button>
      </Center>
    </View>
  );
};

const page = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
