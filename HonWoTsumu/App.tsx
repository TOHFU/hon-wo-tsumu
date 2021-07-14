import React from 'react';

import {NativeBaseProvider, Box, Center} from 'native-base';

import BottomNavigation from './src/components/bottomNavigation';
import Home from './src/screens/home';

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <Box flex={1} safeAreaTop>
        <Center flex={1}>
          <Home />
        </Center>
        <BottomNavigation />
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
