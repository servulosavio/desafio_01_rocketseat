import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { colors } from '@/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Task, TaskProps } from '@/components/Task';
import { Tag } from '@/components/Tag';
import { NoneTask } from '@/components/NoneTask';

export function Home() {
  const [isFocused, setIsFocused] = useState(false);

  const [task, setTask] = useState<string>('');
  const [taskList, setTaskList] = useState<TaskProps[]>([]);

  const counterCriated = taskList.length;
  const counterCloncludes = taskList.filter(
    (item) => item.status === true
  ).length;

  function handleTaskAdd() {
    setTaskList((prevState) => [
      ...prevState,
      { description: task, status: false },
    ]);
    setTask('');
  }

  function handleTaskRemove(item: string) {
    Alert.alert('Remover', 'Deseja remover a tarefa?', [
      {
        text: 'Sim',
        onPress: () => {
          setTaskList((prevState) =>
            prevState.filter((task) => task.description !== item)
          );
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  function handleTaskConclude(item: string) {
    setTaskList((prevState) =>
      prevState.map((task) =>
        task.description === item ? { ...task, status: !task.status } : task
      )
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('@/assets/image.png')} />
      </View>

      <View style={styles.form}>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: isFocused ? colors.purple : colors.gray[700],
            },
          ]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray[300]}
          onChangeText={setTask}
          value={task}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <MaterialIcons
            name="add-circle-outline"
            size={16}
            color={colors.gray[100]}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tags}>
        <Tag name="Criadas" counter={counterCriated} color={colors.blue} />
        <Tag
          name="Concluídas"
          counter={counterCloncludes}
          color={colors.purple}
        />
      </View>

      {counterCriated === 0 ? (
        <NoneTask />
      ) : (
        <FlatList
          style={styles.listContainer}
          data={taskList}
          keyExtractor={(item) => item.description}
          renderItem={({ item }) => (
            <Task
              key={item.description}
              description={item.description}
              status={item.status}
              onRemove={() => handleTaskRemove(item.description)}
              onConclude={() => handleTaskConclude(item.description)}
            />
          )}
        />
      )}
    </View>
  );
}
