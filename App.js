import React,{useState} from 'react';
import { View } from 'react-native';
import { Text,HelperText,TextInput,Button,List } from 'react-native-paper';
import { TailwindProvider } from 'tailwindcss-react-native';

import WalkthroughScreen from "./src/screens/Walkthrough/WalkthroughScreen";
import LoginScreen from './src/screens/Login/Login';
import RegisterScreen from './src/screens/SignUp/SignUp';
import WalkthroughAppConfig from "./src/WalkthroughAppConfig";
import DynamicAppStyles from "./src/DynamicAppStyles";


// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="WalkthroughScreen">
       <Stack.Screen
        name="WalkthroughScreen"
        component={WalkthroughScreen}
        initialParams={{appConfig: WalkthroughAppConfig, appStyles: DynamicAppStyles}}
        options={{headerShown: false,}}
      />
        <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false,}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

// const LeftDrawer = createDrawerNavigator();
// function LeftDrawerScreen() {
//   return (
//     <LeftDrawer.Navigator
//       useLegacyImplementation
//       id="LeftDrawer"
//       screenOptions={{ drawerPosition: 'left' }}>
//       <LeftDrawer.Screen name="Home" component={HomeScreen} />
//     </LeftDrawer.Navigator>
//   );
// }
export default function App() {
  return (
    // <NavigationContainer>     
    //   <TailwindProvider>
    //   <LeftDrawerScreen />
    // </TailwindProvider>
    // </NavigationContainer>
    <NavigationContainer>
    <TailwindProvider>
      <Stack.Navigator>
        {/* SplashScreen which will come once for 5 Seconds */}
        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        /> */}
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        {/* <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>
  );
}
