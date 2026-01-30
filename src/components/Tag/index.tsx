import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  name: string;
  counter: number;
  color: string;
};

export function Tag({ name, counter, color }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: color }]}>{name}</Text>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{counter}</Text>
      </View>
    </View>
  );
}
