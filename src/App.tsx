import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Home, Profile, Explore, Camera, Activity } from './src/screens';
import * as Linking from 'expo-linking';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const ExploreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  );
};

const CameraStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Camera" component={Camera} />
    </Stack.Navigator>
  );
};

const ActivityStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Activity" component={Activity} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [initialRoute, setInitialRoute] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getInitialRoute = async () => {
      const initialRoute = await Linking.getInitialURL();

      if (initialRoute) {
        const route = initialRoute.replace(/^.+\:\/\/[\w\d:#@%/;$()~_?\+-=\\\.&]*\/\/?/g, '');
        const [routeName, params] = route.split('?');
        const queryParams = params ? JSON.parse('{"' + decodeURI(params).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}') : {};

        if (routeName === 'post') {
          setInitialRoute('PostStack', { params: { postId: queryParams.postId } });
        }
      }

      setIsLoading(false);
    };

    getInitialRoute();
  }, []);

  if (isLoading) {
    return <></>;
  }

  return (
    <NavigationContainer initialState={initialRoute}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} /> }} />
        <Tab.Screen name="Explore" component={ExploreStack} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} /> }} />
        <Tab.Screen name="Camera" component={CameraStack} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="camera" size={size} color={color} /> }} />
        <Tab.Screen name="Activity" component={ActivityStack} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="heart" size={size} color={color} /> }} />
        <Tab.Screen name="Profile" component={ProfileStack} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;