import { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'react-native';

export default function App() {
const[modalVisible,setModalVisible]=useState(false);
const [courseGoal,setCourseGoal]=useState([]);


  function addGoalHandler(enteredGoalText){
setCourseGoal((currentCourseGoal)=>[...currentCourseGoal,{text:enteredGoalText,id:Math.random.toString()}]);
endModal();
  }
  function DeleteItem(id){
  setCourseGoal((currentCourseGoal)=>{
    return currentCourseGoal.filter((goal)=>goal.id !== id)
  })
  }
  function Modal(){
    setModalVisible(true);
  }
  function endModal(){
    setModalVisible(false);
  }
  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button title='Add Your Goals' onPress={Modal}/>
      <GoalInput onAddGoals={addGoalHandler} visible={modalVisible} onCancel={endModal} />
      <View style={styles.goalsContainer}>
      <FlatList alwaysBounceVertical={false} data={courseGoal} renderItem={(itemData)=>{
return <GoalItem nainar={itemData.item.text} id={itemData.item.id} OnDelete={DeleteItem}/>;
      }} 
   keyExtractor={(item,index)=>String(index)}
      />
 
 
      </View>
    </View>
    </>
  );
}

const styles=StyleSheet.create({
appContainer:{
  flex:1,
  paddingTop:30,
  paddingHorizontal:16,
  backgroundColor:'#2b2b2b'
},
goalsContainer:{
  flex:5,
  marginTop:30
},

})