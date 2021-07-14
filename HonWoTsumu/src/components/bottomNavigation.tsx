import React, {useState} from 'react';
import {Text, HStack, Center, Pressable} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

const BottomNavigation: React.FC = () => {
  const [selected, setSelected] = useState<number>(1);

  return (
    <HStack alignItems="center" safeAreaBottom>
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
  );
};

export default BottomNavigation;
