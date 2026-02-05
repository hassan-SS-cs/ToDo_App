import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { ToDoProvider } from './context/ToDo.context';

export default function _layout() {
  return ( <PaperProvider>
    <ToDoProvider>

 <Stack>
          <Stack.Screen name="index" options={{headerShown: false}} />
          <Stack.Screen name="AddToDo" options={{headerTitle: "Add New ToDo Task "}} />
          <Stack.Screen name="TaskScreen" options={{headerTitle: "Task Screen"}} />
    </Stack>




    </ToDoProvider>
   
    
  </PaperProvider>
)}