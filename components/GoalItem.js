import {StyleSheet,View,Text, Pressable} from 'react-native';

function GoalItem(props){
return(
   
    <View style={styles.goalItem}>
         <Pressable onPress={props.OnDelete.bind(this,props.id)} android_ripple={{color:'red'}} style={({pressed})=>pressed && styles.pressedItem}>
            <Text  style={styles.goalText}>{props.nainar}</Text>
            </Pressable>
            </View>
           
)
}

export default GoalItem;

const styles=StyleSheet.create({
    goalText:{
        color:'white',
        padding:8,
      },
      goalItem:{
        borderRadius:6,
    
      margin:8,
        backgroundColor:"#5e0acc"
      },pressedItem:{
        opacity:0.5
      }
})