import React from 'react';

import {NativeBaseProvider, Box, Center} from 'native-base';

import BottomNavigation from './src/components/bottomNavigation';

const App = () => {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="white" safeAreaTop>
        <Center flex={1} />
        <BottomNavigation />
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
