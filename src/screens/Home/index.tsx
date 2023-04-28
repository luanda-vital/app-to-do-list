import { useState } from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableHighlight, Alert, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { Task } from '../../components/Task';
import logo from '../../assets/logo.png';
import clipboard from '../../assets/clipboard.png';

export function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [completedTasks, setCompletedTasks] = useState<number>(0);

  function handleNewTask() {
    if (newTask=='') {
      return Alert.alert('Tarefa vazia', 'Não é possível criar tarefas vazias.')
    }

    var exists = false;
    for(var i = 0; i < tasks.length; i++) {
      if (tasks[i].name == newTask) {
        exists = true;
      }
    }

    if (exists) {
      return Alert.alert('Tarefa já adicionada', 'Você já adicionou essa tarefa.')
    }

    const newTaskArray = {
      name: newTask,
      completed: false
    }
    
    setTasks(prevState => [...prevState, newTaskArray]);
    setNewTask('');
  }

  function handleCompletedTasks(name: string) {
    const taskIndex = tasks.findIndex((obj => obj.name == name));
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    handleTaskChange(tasks);
  }

  function handleTaskChange(tasks: Task[]) {
    setCompletedTasks(tasks.filter((task) => task.completed == true).length);
  }

  function handleTaskRemove(name: string) {
    const taskIndex = tasks.findIndex((obj => obj.name == name));

    Alert.alert('Excluir tarefa', `Você confirma a exclusão da tarefa?`, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks(prevState => prevState.filter(task => task !== tasks[taskIndex])),
          handleTaskChange(tasks.filter(task => task !== tasks[taskIndex]))
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={'#0D0D0D'}
        barStyle='light-content'
      />

      <View style={styles.blackContainer}>
        <Image
          source={logo}
          style={styles.logo}
        />
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            style={[styles.input, isFocused && {borderWidth: 1, borderColor: '#5E60CE'}]}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
            cursorColor='white'
            onChangeText={setNewTask}
            value={newTask}
          />

          <TouchableHighlight
            style={styles.addButton}
            underlayColor='#4EA8DE'
            onPress={handleNewTask}
          >
            <Feather name="plus-circle" size={20} color='#F2F2F2' />
          </TouchableHighlight>
        </View>

        <View style={styles.taskStatusContainer}>
          <View style={styles.row}>
            <Text style={styles.createdTasks}>Criadas</Text>
            <Text style={styles.tasksValues}>{tasks.length}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.completedTasks}>Concluídas</Text>
            <Text style={styles.tasksValues}>{completedTasks}</Text>
          </View>
        </View>

        <FlatList
          contentContainerStyle={styles.listContent}
          data={tasks}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <Task
              task={item}
              handleCompletedTasks={() => handleCompletedTasks(item.name)}
              onRemove={() => handleTaskRemove(item.name)}/>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <Image
                source={clipboard}
                style={styles.listEmptyImage}
              />
              <Text style={styles.listEmptyBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyRegular}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}