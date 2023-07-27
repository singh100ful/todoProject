import {FloatingButtonAtom} from '@src/components/atoms/FloatingButtonAtom';
import {HeaderAtom} from '@src/components/atoms/HeaderAtom';
import {AddTaskMolecule} from '@src/components/molecules/AddTaskMolecule';
import {TaskMolecule} from '@src/components/molecules/TaskMolecule';
import {scalePreset} from '@src/theme/metrics';
import * as React from 'react';
import {Alert, FlatList, StyleSheet, View} from 'react-native';

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const [modal, setModal] = React.useState<boolean>(false);
  const [task, setTask] = React.useState<string>('');
  const [todo, setTodo] = React.useState<string[]>([]);

  const handleAdd = (): void => {
    if (task.trim() === '') {
      Alert.alert('Error', 'Task cannot be empty');
    } else {
      setTodo([...todo, task]);
      setTask('');
      setModal(false);
    }
  };

  const deleteTask = (index: number): void => {
    let itemsCopy = [...todo];
    itemsCopy.splice(index, 1);
    setTodo(itemsCopy);
  };

  console.log(task);
  return (
    <View style={{flex: 1}}>
      <AddTaskMolecule
        modal={modal}
        setModal={setModal}
        task={task}
        setTask={setTask}
        handleAdd={handleAdd}
      />
      <HeaderAtom title="ToDo" />
      <View>
        <FlatList
          data={todo}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TaskMolecule index={index} deleteTask={deleteTask} item={item} />
            );
          }}
        />
      </View>
      <View style={styles.buttonPosition}>
        <FloatingButtonAtom onPress={() => setModal(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    position: 'absolute',
    bottom: scalePreset.largeScale,
    right: scalePreset.largeScale,
  },
});
