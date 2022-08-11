import React from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from 'react-native'

// // // // // // // // // //
// 각데이터 유효성 검사 거쳐야 됨
// // // // // // // // // //

const CreateStudy = ( {navigation} ) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.Subject, {marginTop: 50}]}>스터디 이름</Text>
      <TextInput
        style={[styles.inputbox, {height: 40}]}
        placeholder="스터디 이름을 입력해 주세요" placeholderTextColor='white'>  
      </TextInput>

      <Text style={styles.Subject}>스터디 설명</Text>
      <TextInput
        style={[styles.inputbox, {height: 100}]}
        placeholder="스터디 소개말을 입력해주세요" placeholderTextColor='white'>  
      </TextInput>

      <Text style={styles.Subject}>스터디 규칙</Text>
      <TextInput
        style={[styles.inputbox, {height: 150}]}
        multiline={true}
        placeholder="스터디 규칙을 입력해 주세요" placeholderTextColor='white'>  
      </TextInput>

      <Text style={styles.Subject}>스터디 오픈톡방 주소</Text>
      <TextInput
        style={[styles.inputbox, {height: 40}]}
        placeholder="연락을 받을 오픈 톡방 주소" placeholderTextColor='white'>  
      </TextInput>

      <Text style={styles.Subject}>스터디 태그</Text>
      <TextInput
        style={[styles.inputbox, {height: 40}]}
        placeholder="#" placeholderTextColor='white'>  
      </TextInput>

      <View style={{ marginTop: 15, marginBottom: 15, flexDirection: 'row', justifyContent: 'space-evenly', }}>
        <Button 
          onPress={() => {navigation.goBack()}}
          title = "돌아가기"
          color = "#DB5656"/>
        <Button
          // onPress={}
          title = "스터디 개설"
          color = "#56DB83"/>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
      // color: 'black'
      flex: 1,
      width: "90%",
      marginLeft: '5%',
      // marginTop: 50,
      // backgroundColor: 'red',
  },
  Subject: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15,
  },
  inputbox: {
    backgroundColor: '#DDD',
    borderRadius: 5,
    textAlignVertical: 'top',
    paddingLeft: 12,
    paddingRight: 12,
    color: 'gray',

    // textAlign: 'flex-start',
    
    // height: 300,
    // placeholderTextColor: 'gray',
  },
  // img: {
  //   width: '92%',
  //   height: '60%',
  // },
});

export default CreateStudy