import { Image, Text, View } from 'react-native';
import { styles } from './styles';

export function NoneTask() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('@/assets/none_task.png')} />
      <View style={styles.textContainer}>
        <Text style={styles.textBold}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
