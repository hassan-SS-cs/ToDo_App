# ToDo List App (React Native + Expo)

A clean and functional To-Do mobile application built with React Native (Expo).  
This app allows users to create tasks, view details, edit tasks directly within the details screen, mark them as completed, and delete them.

This project was built to demonstrate clean UI/UX, effective state management with Context API, and smooth navigation using Expo Router.

##  Features
- **Task List:** View all tasks with their status (Completed/Pending).
- **Add Task:** Create new tasks with a title and description.
- **Task Details:** View full task information including creation time.
- **Edit Mode:** Update task details directly from the Task Screen (toggle view/edit mode).
- **Task Management:** Mark tasks as done/undone or delete them with a confirmation dialog.
- **Persisted Timestamp:** Tasks show the exact time they were created.

## Installation & Setup

Follow these commands to download and run the project on your machine.

### 1. Clone the Repository ...
```bash
git clone https://github.com/hassan-SS-cs/ToDo_App.git
cd ToDo_App

# Install core dependencies

npm installD

# Install UI Library
npm install react-native-paper --legacy-peer-deps

# Install Icons
npm install @react-native-vector-icons/material-design-icons --legacy-peer-deps

# Install Navigation & System libraries (Expo Router)
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
