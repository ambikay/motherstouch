import 'react-native-gesture-handler';
import React, { Component, useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, Resource4, Screen1, Screen2, Screen3, Screen4, PregRisks, newbornCare, vaccinePregWomen, mentalHealth, firstTrimester, secondTrimester, thirdTrimester, mentalPhysHealth, preconception, pregnancy, postpreg} from './src/screens'
import { firebase } from './src/firebase/config'
import {createSwitchNavigator } from 'react-navigation';
import BottomTabNavigator from './BottomTabNavigator';
// import { createTabNavigator } from 'react-navigation-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); 

function TabsStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='HomeScreen' component={HomeScreen} />
      {/* <Tab.Screen name='Resource4' component={Resource4} /> */}
    </Tab.Navigator>
  )
}
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

export default function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [loggedin, setLoggedIn] = useState(false)

  useEffect(() => {
    const usersRef =  firebase.firestore().collection('users')
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setUser(userData)
            setLoading(false)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
    //return firebase.auth().onAuthStateChanged(setLoggedIn);
  }, []);


  return (
   <NavigationContainer  >
      <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'} >
        <Stack.Screen name="HomeScreen"  options={{ title: '', headerStyle: {
              backgroundColor: '#caf7e3'
           } }}>
          {props => <HomeScreen {...props} extraData={user}/>}
        </Stack.Screen>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login', headerStyle: {
              backgroundColor: '#caf7e3'
           } }}  />
        {/* <Stack.Screen name="Dashboard">
          {props => <DashBoard {...props}/>}
        </Stack.Screen> */}
       
        <Stack.Screen name="Registration" component={RegistrationScreen} />
       
        <Stack.Screen name="Resource4" component={Resource4} options={{ title: '', headerStyle: {
              backgroundColor: '#caf7e3'
           } }} />
        <Stack.Screen name="Screen1" component={Screen1}  options={{ title: '', headerStyle: {
              backgroundColor: '#caf7e3'
           } }}/>
        <Stack.Screen name="Screen2" component={Screen2}   options={{ title: 'COVID-19 & Pregnancy', headerStyle: {
              backgroundColor: '#caf7e3'
           } }}/>
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
        <Stack.Screen name="PregRisks" component={PregRisks} options={{ title: '', headerStyle: {
              backgroundColor: '#e4bad4'
           } }} />
            <Stack.Screen name="newbornCare" component={newbornCare} options={{ title: '', headerStyle: {
              backgroundColor: '#a0829b'
           } }} />
            <Stack.Screen name="vaccinePregWomen" component={vaccinePregWomen} options={{ title: '', headerStyle: {
              backgroundColor: '#e4bac2'
           } }} />
            <Stack.Screen name="mentalHealth" component={mentalHealth} options={{ title: '', headerStyle: {
              backgroundColor: '#c197d2'
           } }} />
           <Stack.Screen name="firstTrimester" component={firstTrimester} options={{ title: '', headerStyle: {
              backgroundColor: '#c197d2'
           } }} />
           <Stack.Screen name="secondTrimester" component={secondTrimester} options={{ title: '', headerStyle: {
              backgroundColor: '#c197d2'
           } }} />
           <Stack.Screen name="thirdTrimester" component={thirdTrimester} options={{ title: '', headerStyle: {
              backgroundColor: '#c197d2'
           } }} />
           <Stack.Screen name="mentalPhysHealth" component={mentalPhysHealth} options={{ title: '', headerStyle: {
              backgroundColor: '#c197d2'
           } }} />
           <Stack.Screen name="preconception" component={preconception} options={{ title: '', headerStyle: {
              backgroundColor: '#c197d2'
           } }} />
           <Stack.Screen name="pregnancy" component={pregnancy} options={{ title: '', headerStyle: {
              backgroundColor: '#c197d2'
           } }} />
           <Stack.Screen name="postpreg" component={postpreg} options={{ title: '', headerStyle: {
              backgroundColor: '#c197d2'
           } }} />
           
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//caf7e3
