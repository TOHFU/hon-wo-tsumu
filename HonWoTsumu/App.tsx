/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  Pressable,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  const [selected, setSelected] = React.useState(1);
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="white" safeAreaTop>
        <Center flex={1} />
        <HStack bg="#fff" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            opacity={selected === 0 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={() => setSelected(0)}>
            <Center>
              <Icon name="book" size={30} color="#333" />
              <Text marginTop="2" color="#333" fontSize={14}>
                よむ
              </Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 1 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={() => setSelected(1)}>
            <Center>
              <Icon name="seedling" size={30} color="#333" />
              <Text marginTop="2" color="#333" fontSize={14}>
                つむ
              </Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 2 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={() => setSelected(2)}>
            <Center>
              <Icon name="cat" size={30} color="#333" />
              <Text marginTop="2" color="#333" fontSize={14}>
                猫である
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
