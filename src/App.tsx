import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';

import { AuthScreen } from './screens/AuthScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { ExploreScreen } from './screens/ExploreScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { ThemeProvider, createTheme } from '@shopify/restyle';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const theme = createTheme({
  colors: {
    primary: '#000',
    secondary: '#fff',
  },
});

export default App = () => {
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    // Async storage
  }, []);

  const handleAuth = (authed: boolean) => {
    setIsAuthed(authed);
  };

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {!isAuthed ? (
          <Stack.Navigator>
            <Stack.Screen name="Auth" component={AuthScreen} />
          </Stack.Navigator>
        ) : (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Explore" component={ExploreScreen} />
            <Tab.Screen name="Notifications" component={NotificationsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </ThemeProvider>
  );
};