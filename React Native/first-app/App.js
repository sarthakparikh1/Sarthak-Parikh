
import {StyleSheet,  View, FlatList,Button} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisiable,setModalIsVisiable]=useState(false)
  const [courseGoal, serCourseGoals]= useState([])

  function startAddGoalHandeller(){
    setModalIsVisiable(true)
  }
function endAddGoalHandeller(){
    setModalIsVisiable(false)
}
  function  addGoalHandeller(enteredGoalText){

    console.log(enteredGoalText)
    serCourseGoals(currentCourseGoal=>[...courseGoal,
      {text:enteredGoalText,id:Math.random().toString()},
    ])
    endAddGoalHandeller()
  }

  function deleteGoalHandeller(id){
    // console.log("DELETE")
  serCourseGoals(currentCourseGoal=>{

    return currentCourseGoal.filter((goal)=> goal.id !== id);

  })
  }



  return (
      <>
      <StatusBar style={"light"}></StatusBar>
<View style={styles.appContainer}>
  <Button title={'Add New Goal'} color="#a065ec" onPress={startAddGoalHandeller}></Button>
   <GoalInput onAddGoal={addGoalHandeller} visiable={modalIsVisiable} toCancle={endAddGoalHandeller}/>
  <View  style={styles.goalsContainer}>
    <FlatList data={courseGoal} renderItem={(itemData)=>{
      return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandeller} id={itemData.item.id}/>

    }}
              keyExtractor={(item,index)=>{
                return item.id
              }}
              alwaysBounceVertical={false}

    >



    </FlatList>
  </View>


</View>
      </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding: 50,
    flex:1,
    backgroundColor:'#1e0558'
  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'
  },
  textInput:{
    borderWidth:1,
    borderColor:'#CCCCCC',
    width:'70%',
    marginRight:8,
    padding:8
  },
  goalsContainer:{
    flex:4
  },
  goalItem:{
    margin:8,
    padding:8,
    borderRadius: 6,
    backgroundColor:'#5e0acc',
    color:'white'
  },
  goalTExt:{
    color:'white'
  }

});
