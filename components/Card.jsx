import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { use } from 'react';
import { ToDoContext } from '../app/context/ToDo.context';
import { Checkbox } from 'react-native-paper';
import { useRouter } from 'expo-router'; 

export default function Card({ todo }) {
  const { removeTodo, toggleTodo } = use(ToDoContext);
  const router = useRouter(); // Initialize router

  const handlerRemoveTodo = () => {
    Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => removeTodo(todo.id)
      }
    ]); 
  };

  return (
    <TouchableOpacity 
      onLongPress={handlerRemoveTodo} 
      activeOpacity={0.5} 
      key={todo.id} 
      style={styles.ToDoCard}
    >
      <Checkbox.Item 
        label="" 
        status={todo.done ? "checked" : "unchecked"} 
        onPress={() => toggleTodo(todo.id)}
      />
      
      <View style={styles.taskInfo}>
        <Text style={styles.ToDoTitle}>{todo.text}</Text>
        <Text style={styles.timeText}>
          {new Date(todo.displayDate).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </Text>
      </View>

      {/* BUTTON TO VIEW DETAILS */}
      <TouchableOpacity 
        style={styles.detailsButton}
        onPress={() => router.push({
          pathname: '/TaskScreen',
          params: { taskId: todo.id }
        })}
      >
        <Text style={styles.detailsButtonText}>View</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ToDoCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 10,
    backgroundColor: "rgb(102, 177, 175)",
    borderRadius: 15,
    elevation: 2,
    justifyContent: "space-between",
  },
  taskInfo: {
    flex: 1,
    marginLeft: 10,
  },
  ToDoTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  timeText: {
    fontSize: 12,
    color: "#333",
    marginTop: 4,
  },
  detailsButton: {
    backgroundColor: "rgb(40, 43, 42)",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  detailsButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
