import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, PlatformColor, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedbackBase, View, ScrollView } from 'react-native';
import Tache from './components/Taches';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]) //met ce qu'il y a dans taskItem et ajout la nouvelle tâche au tableau
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Vos tâches d'aujourd'hui</Text>
        <View style={styles.item}>
          {
            taskItems.map((item, index) => {
              return <TouchableOpacity  key={index} onPress={() => completeTask(index)}>
                <Tache text={item}/>
              </TouchableOpacity> 
            })
          }

        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Ajouter une tâche"} value={task} onChangeText={text => setTask(text)}></TextInput>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  tasksWrapper : {
    paddingTop: 100, 
    paddingHorizontal: 20,
  }, 
  sectionTitle : {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF',
  }, 
  item : {
    marginTop: 30,
  },
  writeTaskWrapper : {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input : {
    padding: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: "#e1e2e3",
    borderRadius: 30,
    borderColor: "#b554ff",
    borderWidth: 3,
  }, 
  addWrapper : {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#e1e2e3",
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#b554ff',
    borderWidth: 3,
  },
  addText : {
    fontSize: 35,
    fontWeight: 'bold',
  },
});
