import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Link } from "expo-router";
import { Checkbox } from 'react-native-paper';
import { AppButton } from "../components";
import { ToDoContext } from "./context/ToDo.context";
import Card from "../components/Card";
import { ScrollView } from "react-native";

const index = () => {
  const { todos } = useContext(ToDoContext);
  const { child } = useContext(ToDoContext);
  return (
     <SafeAreaProvider style={{flex:1}}>
    <View style={styles.container}>
      <ScrollView style={styles.ToDoContainer}>
      <Text style={styles.ToDoHeader}>Todo App</Text>
  
    
     {todos.reverse().map((todo) => (
          <Card key={todo.id} todo={todo} />
          
        ))}
      {todos.length === 0 && (
        <Text style={styles.emptyToDo}>No Task yet!</Text>
      )}
    
       
    </ScrollView>
    
    <View>
      
      <Link asChild href="/AddToDo">
      <AppButton 
      onPress={() => {}}
      >Add New ToDo</AppButton>

</Link>

    </View>
        </View>
        </SafeAreaProvider>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  justifyContent: "space-between",
  },

  ToDoContainer: {
    marginVertical: 5,
    padding: 10,
    
  },
  ToDoHeader: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 35,
},

  // below styles are for card component

  emptyToDo: {
    alignSelf: "center",
    marginTop: 50,  
    fontSize: 18,
    color: "#000000",
    fontWeight: "bold",
  },

});