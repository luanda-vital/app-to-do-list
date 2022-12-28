import { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

import { styles } from './styles';

import { Task } from '../../components/Task';

import logo from '../../assets/logo.png';
import clipboard from '../../assets/clipboard.png';

export function Home() {
  const [completedTasks, setcompletedTasks] = useState(0);

  const tasks:any = [];

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
        />

        <TouchableHighlight
          style={styles.addButton}
          underlayColor='#4EA8DE'
          onPress={() => {}}
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
        keyExtractor={item => item.value}
        renderItem={({ item }) => (
          <Task text={item.text}/>
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