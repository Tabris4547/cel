import * as React from 'react';
import {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';

const Stack = createNativeStackNavigator();


const HomeScreen = ({ navigation, route }) => {
    return (
      <View style={styles.container}>
        <Text>홈 페이지</Text>
        <Button
          title="네비게이션 btn"
          onPress={() =>
              navigation.navigate('Profile')
          }/>
      </View>
  );
};

const StudyScreen = ({ navigation, route }) => {
    // const [postText, setPostText] = React.useState('');
    return (
      <View style={styles.profile}>
        <Text>스터디 상세 스크린</Text>
      </View>
      )
};

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} initialParams={{name:'dlam_'}}  options={{ headerShown: false, title: 'Welcome' }} />
          <Stack.Screen name="Profile" component={StudyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    }
});

export default App;