import React from 'react';
import {Text, HStack, Center, Pressable} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Props {}
interface State {
  selected: number;
}

class BottomNavigation extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      selected: 1,
    };
  }

  render() {
    return (
      <HStack alignItems="center" safeAreaBottom>
        <Pressable
          opacity={this.state.selected === 0 ? 1 : 0.5}
          py={2}
          flex={1}
          onPress={() => this.setState({selected: 0})}>
          <Center>
            <Icon name="book" size={30} color="#333" />
            <Text marginTop="2" color="#333" fontSize={14}>
              よむ
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={this.state.selected === 1 ? 1 : 0.5}
          py={2}
          flex={1}
          onPress={() => this.setState({selected: 1})}>
          <Center>
            <Icon name="seedling" size={30} color="#333" />
            <Text marginTop="2" color="#333" fontSize={14}>
              つむ
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={this.state.selected === 2 ? 1 : 0.5}
          py={2}
          flex={1}
          onPress={() => this.setState({selected: 2})}>
          <Center>
            <Icon name="cat" size={30} color="#333" />
            <Text marginTop="2" color="#333" fontSize={14}>
              猫である
            </Text>
          </Center>
        </Pressable>
      </HStack>
    );
  }
}

export default BottomNavigation;
