import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarInactiveTintColor: '#2d6aef',
      tabBarInactiveTintColor: '#111111',
      tabBarStyle: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        height: 78,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5
      },
      tabBarItemStyle: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      tabBarIcon: ({ color, size, focused }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        }
        else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }
        return <Ionicons name={iconName} size={30} color={color} />
      }
    })}>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
