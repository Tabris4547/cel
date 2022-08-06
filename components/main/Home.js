// import React, { Component } from 'react';
import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  // ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'

// 스터디 목록
const studyList = [
  {
    id: '1',
    name: 'Study 01',
    tag: ['tag 01', 'tag 02', 'tag 03']
  },
  {
    id: '2',
    name: 'Study 02',
    tag: ['tag 01', 'tag 02', 'tag 03']
  },
  {
    id: '3',
    name: 'Study 03',
    tag: ['tag 01', 'tag 02', 'tag 03']
  },
  {
    id: '4',
    name: 'Study 04',
    tag: ['tag 01', 'tag 02', 'tag 03']
  },
  {
    id: '5',
    name: 'Study 05',
    tag: ['tag 01', 'tag 02', 'tag 03']
  },
  {
    id: '6',
    name: 'Study 06',
    tag: ['tag 01', 'tag 02', 'tag 03']
  },
  {
    id: '7',
    name: 'Study 07',
    tag: ['tag 01', 'tag 02', 'tag 03']
  },
]

// 스터디 컴포넌트
const Item = ({ id, name, tags, navigation }) => (
  <TouchableOpacity style={styles.studyComponent} onPress={ () => { navigation.navigate('StudyBoard', {id: {id}}) }}>
    <Text style={styles.compTitle}> {name}  </Text>
    <View style={styles.tagBox}>
      {tags.map((tag, idx) => (
          <Text style={styles.compTag} key={idx}> # {tag} </Text>
      ))}
    </View>
  </TouchableOpacity>
);

const Home = ( {navigation} ) => {
  
  // 스터디 객체 생성 
  const renderItem = ({ item }) => (
    <Item id={item.id} name={item.name} tags={item.tag} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
          activeOpacity={0.7}
          // onPress={추가 명령어}
          style={styles.touchableOpacityStyle}>
          <AntDesign style={styles.floatingButtonStyle} name="pluscircle" color={"#56D3DB"} size={54} />
        </TouchableOpacity>

      <View style={styles.searchBar}>
        <TouchableOpacity><Ionicons style={{paddingRight: 24}} name="search" color={"black"} size={24} /></TouchableOpacity>
      </View>

      <FlatList
        data={studyList}
        renderItem={renderItem}
        keyExtractor={item => item.id}>
      </FlatList>

    </View>
  );

}

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: 'absolute',
    width: 0,
    height: 0,
    alignItems: 'center',
    justifyContent: 'center',
    right: 50,
    bottom: 50,
    zIndex: 100, // works on ios
    elevation: 100, // works on android
  },
  floatingButtonStyle: {
    width: 55,
    height: 55,
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignContent: 'center',
  },
  searchBar: {
    width: '100%',
    height: 55,
    backgroundColor: "#ffffff",
    zIndex: 10,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  studyComponent: {
    width: '92.3%',
    backgroundColor: '#F8F8F8',
    borderRadius: 5,
    // 중앙 정렬 안되서 우선 %로 밀기
    marginLeft: '3.35%',
    padding: 11,
    marginBottom: 5,
    overflow: 'hidden',
    zIndex: 0,
    elevation: 0,

  },
  compTitle: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  tagBox: {
    flex: 1,
    flexDirection: 'row'
  },
  compTag: {
    backgroundColor: 'red',
    padding: 4,
    marginRight: 4,
    borderRadius: 100,
    backgroundColor: '#E3E3E3',
    color: '#152536',
  },

});

export default Home;