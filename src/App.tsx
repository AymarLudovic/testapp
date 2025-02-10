import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { NavigationContext } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider, useSelector } from 'react-redux';
import { ReactElement } from 'react';

import { Home, Profile, Camera, Search } from 'src/screens';

const Stack = createStackNavigator<StackNavigationTypes>();

const App: React.FC = () => {
  // Parse Deep-Links
  const context: NavigationContext = React.useContext(NavigationContext);
  useEffect(() => {
    context?.dispatch?.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }, []);

  const store = useSelector((state) => state);
  const theme = useSelector((state: any) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }} />
          <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

### Type Definition

type StackNavigationTypes = {
  Home: undefined;
  Camera: undefined;
  Search: undefined;
  Profile: undefined;
};