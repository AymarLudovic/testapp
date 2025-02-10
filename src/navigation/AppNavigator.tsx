import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Profile from './Profile';
import Explore from './Explore';
import Camera from './Camera';
import Notifications from './Notifications';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
};

export default AppNavigator;