import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

export type TaskProps = {
  description: string;
  status: boolean;
  onConclude?: () => void;
  onRemove?: () => void;
};

export function Task({
  description,
  status = false,
  onConclude,
  onRemove,
}: TaskProps) {
  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={status}
        onValueChange={onConclude}
        color={status ? colors.purple : colors.blue}
      />
      <Text
        style={[
          styles.text,
          {
            textDecorationLine: status ? 'line-through' : 'none',
            color: status ? colors.gray[300] : colors.gray[100],
          },
        ]}
      >
        {description}
      </Text>
      <TouchableOpacity style={styles.buttonDelete} onPress={onRemove}>
        <MaterialIcons
          name="delete-outline"
          size={20}
          color={colors.gray[300]}
        />
      </TouchableOpacity>
    </View>
  );
}
