import React from 'react';
import {Center, Container, View, Text, Button} from 'native-base';

const Home: React.FC = () => {
  return (
    <Container>
      <View>
        <Center flex={1}>
          <Text>Home</Text>
          <Button marginTop="2" onPress={() => {}}>
            <Text>to Search</Text>
          </Button>
        </Center>
      </View>
    </Container>
  );
};

export default Home;
