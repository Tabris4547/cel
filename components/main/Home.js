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
  const renderItem = ({ item }) => (
    <Item id={item.id} name={item.name} tags={item.tag} navigation={navigation} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={studyList}
        renderItem={renderItem}
        keyExtractor={item => item.id}>
      </FlatList>  

    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignContent: 'center',
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
  }
});

export default Home;