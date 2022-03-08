import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// screens
import Home from '../screens/home/Home';
import Profile from "../screens/home/Profile";
import Track from "../screens/home/Track";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const baseHeaderSettings = {
    headerShown: false
}

const MainTabs = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarStyle: { paddingVertical: 8, height: 100, alignItems: 'center', justifyContent: 'center' },
                tabBarLabelStyle: { fontSize: 10, paddingBottom: 10 }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Track"
                component={Track}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    )
}

// const HomeStack = () => {
//     return (
//         <Stack.Navigator screenOptions={baseHeaderSettings} >

//         </Stack.Navigator>
//     )
// }

// const AuthStack = () => {
//     return (
//         <Stack.Navigator screenOptions={baseHeaderSettings}>

//         </Stack.Navigator>
//     )
// }

// const TrackStack = () => {
//     return (
//         <Stack.Navigator screenOptions={baseHeaderSettings}>

//         </Stack.Navigator>
//     )
// }

// const ProfileStack = () => {
//     return (
//         <Stack.Navigator screenOptions={baseHeaderSettings}>

//         </Stack.Navigator>
//     )
// }

export default Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={baseHeaderSettings}>
                {/* add your another screen here using -> Stack.Screen */}
                {/* <Stack.Screen name="auth" component={AuthStack} /> */}
                <Stack.Screen name="main" component={MainTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}