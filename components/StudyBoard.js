import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,

} from 'react-native';

const IsStudy = {
  img: 'https://cdn.pixabay.com/photo/2022/04/13/01/44/plum-blossoms-7129237_1280.jpg',
  name: 'Java Study',
  desc: ' 스터디 모임 설명을 적습니다. 스터디 상세 소개글입니다. 로렘 입숨 대신에 끄적이는 글입니다',
  leader: {
    name: '홍길동',
    part: '숭실대학교',
    age: '' // 비공개
  },
  rule: [
    '규칙 1', '규칙 2', '규칙 3', '규칙 4', '규칙 5', '규칙 6'
  ],
  options: {
    hasMento: true,
    howLong: '3개월 이상',
    rate: 4.5
  }
}


class Subject extends Component {

  // static studyProps = this.props.comp.img
  // study = {this.props.comp};
  
  render() {
    // console.log(IsStudy)
    return (
      <View>
        <Image
          style={styles.img}
          source={{
            uri: IsStudy.img,
          }}
        />
        <Text style={{color: 'gray'}}>
          {this.props.comp.name}
        </Text>
      </View>
    );
  }
}

const StudyBoard = ( { navigation, route } ) => {
  // console.log(IsStudy.img)
  

  return (
    <View>
      <Text style={[styles.container]}> 해당 스터디의 아이디는 </Text>
      <Text style={[styles.container]}> {route.params.id.id} </Text>
      <Subject comp={IsStudy}></Subject>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      color: 'black'
  },
  img: {
    width: '92%',
    height: '60%',
  },
});

export default StudyBoard;