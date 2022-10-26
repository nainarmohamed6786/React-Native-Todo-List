import {StyleSheet,View,TextInput,Button,Modal, Image} from 'react-native'
import {useState} from 'react'
function GoalInput (props){
    const [enteredGoalText,setEnteredGoalText]=useState('');
    function inputGoalHandler(enteredText){
        setEnteredGoalText(enteredText);
          }
          function addGoalHandler(){
            props.onAddGoals(enteredGoalText);
            setEnteredGoalText('');
          }
    return(
        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.InputContainer}>
            <Image source={require('../assets/icon.png')} style={styles.image} />
        <TextInput placeholder='Enter Your Goals' style={styles.textInput} onChangeText={inputGoalHandler} value={enteredGoalText}/>
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button title="Add Your Goals" onPress={addGoalHandler} color="#5e0acc"/>
            </View>
            <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color="#f31282"/>
            </View>
        </View>
      </View>
      </Modal>
    )
}

export default GoalInput;


const styles=StyleSheet.create({
    InputContainer:{
        flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#311b6b',
      padding:30
      },
      textInput:{
      borderWidth:2,
      borderColor:'#cccccc',
      width:'100%',
      marginRight:10,
      padding:16,
      borderColor:'#e4d0ff',
      backgroundColor:'#e4d0ff',
      borderRadius:16,

      },
      buttonContainer:{
        flexDirection:'row',
        marginTop:20
      },
      button:{
       width:"40%",
     marginHorizontal:8
      },
      image:{
        width:100,
        height:100,
        margin:30
      }
})
