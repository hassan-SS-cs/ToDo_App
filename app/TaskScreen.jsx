import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ToDoContext } from "./context/ToDo.context";

const TaskScreen = () => {
  const { taskId } = useLocalSearchParams();
  const { todos, removeTodo, toggleTodo, updateTask } = useContext(ToDoContext);
  const router = useRouter();

  const task = todos.find((t) => t.id === Number(taskId));

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState("");
  const [newDesc, setNewDesc] = useState("");

  useEffect(() => {
    if (task) {
      setNewText(task.text);
      setNewDesc(task.description);
    }
  }, [task, isEditing]);

  if (!task)
    return (
      <View>
        <Text>Task not found!</Text>
      </View>
    );

  const handleSave = () => {
    if (!newText.trim()) {
      Alert.alert("Error", "Title cannot be empty");
      return;
    }
    updateTask(task.id, newText, newDesc);
    setIsEditing(false);
  };

  const handleDelete = () => {
    Alert.alert("Delete Task", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          removeTodo(task.id);
          router.back();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {isEditing ? (
        <View>
          <Text style={styles.header}>Editing Task</Text>

          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={newText}
            onChangeText={setNewText}
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={newDesc}
            onChangeText={setNewDesc}
            multiline
            numberOfLines={4}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={handleSave}
            >
              <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => setIsEditing(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        
        <View>
          <Text style={styles.label}>Title:</Text>
          <Text style={styles.title}>{task.text}</Text>

          <Text style={styles.label}>Description:</Text>
          <Text style={styles.description}>
            {task.description || "No description"}
          </Text>

          <Text style={styles.label}>Status:</Text>
          <Text
            style={[styles.status, { color: task.done ? "green" : "orange" }]}
          >
            {task.done ? "COMPLETED" : "PENDING"}
          </Text>

          <View style={styles.buttonContainer}>
            {/* ✅ Toggle Edit Mode */}
            <TouchableOpacity
              style={[styles.button, styles.editButton]}
              onPress={() => setIsEditing(true)}
            >
              <Text style={styles.buttonText}>Edit Task</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.toggleButton]}
              onPress={() => {
                toggleTodo(task.id);
                router.back();
              }}
            >
              <Text style={styles.buttonText}>
                {task.done ? "Mark as Pending" : "Mark as Done"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.deleteButton]}
              onPress={handleDelete}
            >
              <Text style={styles.buttonText}>Delete Task</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#333" },
  label: { fontSize: 18, color: "#000000", marginTop: 15, fontWeight: "600" },
  title: { fontSize: 24, fontWeight: "bold", color: "#333", marginTop: 5 },
  description: { fontSize: 16, color: "#555", marginTop: 5 },
  status: { fontSize: 18, fontWeight: "bold", marginTop: 5 },

  input: {
    borderWidth: 3,
    borderColor: "rgb(102, 177, 175)",
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  textArea: { height: 100, textAlignVertical: "top" },

  buttonContainer: { marginTop: 30, gap: 15 },
  button: { paddingVertical: 15, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  editButton: { backgroundColor: "#FFA500" },
  saveButton: { backgroundColor: "#4CAF50" },
  cancelButton: { backgroundColor: "#999" },
  toggleButton: { backgroundColor: "rgb(102, 177, 175)" },
  deleteButton: { backgroundColor: "#d32f2f" },
});
