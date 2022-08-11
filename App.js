import * as React from 'react';
// import {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeTab from './components/main/Home'
import StudyBoard from './components/StudyBoard'

const Tab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



// 네비게이션 설정
const Setting = () => {
  return (
    <View style={[styles.container, { backgroundColor: "#EEE" }]}>
      <Text> 세팅 페이지</Text>
    </View>
  );
};
// const Home = () => {
//   return (
//     <View style={styles.card}>
//       <TextInput style={styles.input} placeholder="Add an item!" />
//       <ScrollView>
//           <Text>TodoList</Text>
//       </ScrollView>
//     </View>
//   );
// };
const Chat = () => {
  return (
    <View style={[styles.container, { backgroundColor: "#EEE" }]}>
      <Text> 채팅 페이지</Text>
    </View>
  );
};
const MyPage = () => {
  return (
    <View style={[styles.container, { backgroundColor: "#EEE" }]}>
      <Text> 마이 페이지</Text>
    </View>
  );
};


// 네이게이션 최상단 설정
function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen name="Login" component={Setting} options={ {headerShown: false} } />
      <Stack.Screen name="Root" component={TabNavigator} options={ {headerShown: false} } />
      <Stack.Screen name="StudyBoard" component={StudyBoard} options={ {headerShown: false} } />
      <Stack.Screen name="SearchBoard" component={StudyBoard} options={ {headerShown: false} } />
    </Stack.Navigator>
  );
}
// 하단바 네비게이션
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="홈"
      activeColor= "#56D3DB"
      barStyle={{ backgroundColor: "white", border: "none" }}>

      <Tab.Screen name="설정" component={Setting} 
        options={{headerShown: false,
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
          <Ionicons name="ios-settings" color={color} size={25} />
        ),
      }} />
      <Tab.Screen name="홈" component={HomeTab} 
        options={{headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
          <Ionicons name="home" color={color} size={25} />
          ),
        }} />
      <Tab.Screen name="대화" component={Chat}
        options={{headerShown: false,
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
          <Ionicons name="chatbox" color={color} size={25} />
        ),
      }} />
      <Tab.Screen name="마이페이지" component={MyPage}
        options={{headerShown: false,
            tabBarLabel: 'MyPage',
            tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={25} />
          ),
        }} />
    </Tab.Navigator>
  );
}

const App = () => {
    return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;