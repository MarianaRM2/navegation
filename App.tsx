import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/StackNavigation';
import DrawerNavigation from './src/navigation/DrawerNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      {/*<DrawerNavigation/>*/}
      <StackNavigation/>
    </NavigationContainer>
  );
};

export default App;
