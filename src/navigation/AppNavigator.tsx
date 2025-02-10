import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Profile from './Profile';
import Camera from './Camera';
import Explore from './Explore';
import Activity from './Activity';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Activity" component={Activity} />
    </Stack.Navigator>
  );
}