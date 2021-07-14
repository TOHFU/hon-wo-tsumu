import React from 'react';
import { StyleSheet } from 'react-native';
import { Center, Container, View, Text } from 'native-base';

const Recommend: React.FC = () => {
  return (
    <View style={page.container}>
      <Center flex={1}>
        <Text>Recommend</Text>
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


export default Recommend;
