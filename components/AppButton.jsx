import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function AppButton({children,onPress}) {
  return (
  <TouchableOpacity 
   activeOpacity={0.6}  
  style={styles.createTodoButton }
        onPress={onPress} 
>
            <Text style={styles.buttonText}>
                {children}
</Text>
  </TouchableOpacity>
  )
}
const styles = StyleSheet.create({

//button style
  createTodoButton: {
    backgroundColor: "rgb(102, 177, 175)",
    paddingVertical: 24,
    margin: 30,
    borderRadius: 40,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },

});