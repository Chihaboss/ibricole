import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingPage from './src/screen/LandingPage';
import LoginScreen from './src/screen/LoginScreen';
import SearchScreen from './src/screen/SearchScreen';
import UserProfileScreen from './src/screen/userProfileScreen';
import MessagingScreen from './src/screen/MessagingScreen';
import AppointmentsScreen from './src/screen/AppointmentsScreen';
import SettingsScreen from './src/screen/SettingsScreen';
// Importez d'autres écrans si nécessaire

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const AuthStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Login">
        {props => <LoginScreen {...props} setIsSignedIn={setIsSignedIn} />}
      </Stack.Screen>
      {/* Vous pouvez ajouter d'autres écrans d'authentification ici si nécessaire */}
    </Stack.Navigator>
  );

  const MainTabs = () => (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={LandingPage} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="Profile" component={UserProfileScreen} />
    <Tab.Screen name="Appointments" component={AppointmentsScreen} />
    <Tab.Screen name="Messages" component={MessagingScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
  
  
  return (
    
  <NavigationContainer>
      {isSignedIn ? <MainTabs />  : <AuthStack />}
    </NavigationContainer>
    
  
  );
}

// Vous pouvez conserver ou ajuster vos styles si nécessaire
export default App;
