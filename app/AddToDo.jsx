import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState, useContext } from "react";
import { TextInput } from 'react-native-paper';
import { AppButton } from '../components'; 
import { ToDoContext } from './context/ToDo.context'; 

const AddToDo = () => {
  const { addTodo } = useContext(ToDoContext); 
  
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");

  const handleAddTodo = () => {
    if (!text && !desc) {
      Alert.alert("Error", "Please enter a task title and description");
      return;
    }

    addTodo(text, desc); 
    
    setText("");
    setDesc("");
    Alert.alert("Success", "Todo added successfully");
  }; 

  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>Add your new ToDo Tasks</Text>

      <View style={styles.FormContainer}>
        <TextInput
          label="Task Title"
          value={text}
          onChangeText={text => setText(text)}
          mode="outlined"
          placeholder='Enter your task title'          
        />
      </View>
      
      <View>
        <TextInput
          label="Task Description"
          value={desc}
          onChangeText={desc => setDesc(desc)}
          mode="outlined"
          multiline={true}
          numberOfLines={3}
          placeholder='Enter your task description'
        />
        <AppButton onPress={handleAddTodo}>Add your Todo</AppButton>
      </View>
    </View>
  );
}

export default AddToDo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 15,
  },
  HeaderText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 20,
  },
  FormContainer: {
    marginVertical: 10,
    marginBottom: 10,
  },
});
