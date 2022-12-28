import { View, TouchableHighlight } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

type Props = {
  text: string;
}

export function Task({text}: Props) {
  return(
    <View style={styles.container}>
      <BouncyCheckbox
        size={25}
        text={text}
        fillColor='#5E60CE'
        style={styles.checkbox}
        innerIconStyle={styles.checkboxInnerIconStyle}
        textStyle={styles.checkboxText}
        onPress={() => {}}
      />

      <TouchableHighlight
        style={styles.deleteButton}
        underlayColor='#333333'
        onPress={() => {}}
      >
        <Feather name="trash-2" size={18} color='#808080' />
      </TouchableHighlight>
    </View>
  )
}