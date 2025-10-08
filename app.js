// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import all screens
import ContactScreen from './screens/ContactScreen';
import FeesAndFormScreen from './screens/FeesAndFormScreen';
import HomeScreen from './screens/HomeScreen';
import SixMonthsInfoScreen from './screens/SixMonthsInfoScreen';
import SixMonthsScreen from './screens/SixMonthsScreen';
import SixWeeksInfoScreen from './screens/SixWeeksInfoScreen';
import SixWeeksScreen from './screens/SixWeeksScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home" // Home is your landing screen
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SixMonths" component={SixMonthsScreen} />
        <Stack.Screen name="SixWeeks" component={SixWeeksScreen} />
        <Stack.Screen name="SixMonthsInfo" component={SixMonthsInfoScreen} />
        <Stack.Screen name="SixWeeksInfo" component={SixWeeksInfoScreen} />
        <Stack.Screen name="FeesAndForm" component={FeesAndFormScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
