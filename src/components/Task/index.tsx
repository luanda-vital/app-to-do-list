import { View, TouchableHighlight } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

export type Task = {
  name: string;
  completed: boolean
} 

type Props = {
  task: Task;
  handleCompletedTasks: () => void;
  onRemove: () => void
}

export function Task({task, handleCompletedTasks, onRemove}: Props) {

  return(
    <View style={styles.container}>
      <BouncyCheckbox
        size={25}
        text={task.name}
        fillColor='#5E60CE'
        style={styles.checkbox}
        innerIconStyle={styles.checkboxInnerIconStyle}
        textStyle={task.completed ? styles.checkboxTextChecked : styles.checkboxText}
        onPress={handleCompletedTasks}
      />

      <TouchableHighlight
        style={styles.deleteButton}
        underlayColor='#333333'
        onPress={onRemove}
      >
        <Feather name="trash-2" size={18} color='#808080' />
      </TouchableHighlight>
    </View>
  )
}