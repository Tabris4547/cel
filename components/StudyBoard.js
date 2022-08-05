import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

function StudyBoard({navigation, route}) {
  
  // id 번호 받아오는 것 테스트
  // console.log(route.params.id.id)

  return (
    <View>
      <Text style={[styles.container]}> 해당 스터디의 아이디는 </Text>
      <Text style={[styles.container]}> {route.params.id.id} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      color: 'black'
  }
});

export default StudyBoard;