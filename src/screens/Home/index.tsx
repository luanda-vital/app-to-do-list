import { useState } from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableHighlight, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { Task } from '../../components/Task';
import logo from '../../assets/logo.png';
import clipboard from '../../assets/clipboard.png';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [completedTasks, setCompletedTasks] = useState<number>(0);

  function handleNewTask() {
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
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.logo}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
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
  );
}