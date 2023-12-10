import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import React, { useState } from 'react';

// any additional imports
import Task from './components/Task'

export default function App() {
  // input Area
  const [task, setTask] = useState();


  // to store all taskes
  const [taskItems, setTaskItems] = useState([]);


  //event listener logic for creating a task
  const handleAddtask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  //event listener logic for deleting a task
  const completeTask = (index) => {
    let copyitems = [...taskItems];
    //remove the spacific task as selected by the user
    copyitems.splice(index, 1);
    //update the origanel array by rewriting it  the copied array
    setTaskItems(copyitems);
  }

  // another event handler to update text
  //logic wil be simaler to completeTask()
  // Modal 

  return (
    <View style={styles.container}>
      {/* list all of the to do items*/}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>
          To Do:
        </Text>

        {/* create a section to wrap the tasks to be rendered*/}
        <View style={styles.items}>
          {/*<Task text={"this is task 1"}/>*/}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>);
            })
          }
        </View>
      </View>

      {/* user input for todo tasks*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"add your todo item here"}
          onChangeText={(text) => setTask(text)}
        ></TextInput>

        <TouchableOpacity onPress={() => handleAddtask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
            {/* <IMAGE SOURCE={REQUIRE('./ASSETS')} /> */}
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E212B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: '#F2F3F7',
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    color: '#F2F3F7',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#1E212B',
    borderRadius: 60,
    borderColor: '#437C90',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#1E212B',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#3DFAFF",
    borderWidth: 1,
  },
  addText: {
    color: '#F2F3F7',
  }

});
