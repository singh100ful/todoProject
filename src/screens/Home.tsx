import {FloatingButtonAtom} from '@src/components/atoms/FloatingButtonAtom';
import {HeaderAtom} from '@src/components/atoms/HeaderAtom';
import {TextAtom} from '@src/components/atoms/TextAtom';
import {AddTaskMolecule} from '@src/components/molecules/AddTaskMolecule';
import {TaskMolecule} from '@src/components/molecules/TaskMolecule';
import {Colors} from '@src/theme/colors';
import {scalePreset} from '@src/theme/metrics';
import * as React from 'react';
import {Alert, SectionList, StyleSheet, View} from 'react-native';

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

  const groupedTasks = todo.reduce((grouped, task, index) => {
    const firstLetter = task[0].toUpperCase();
    if (!grouped[firstLetter]) {
      grouped[firstLetter] = [];
    }
    grouped[firstLetter].push({key: `${index}`, value: task});
    return grouped;
  }, {});

  const sections = Object.keys(groupedTasks)
    .sort()
    .map(key => ({title: key, data: groupedTasks[key]}));

  console.log(sections);
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
      <SectionList
        sections={sections}
        renderItem={({item}) => (
          <TaskMolecule
            item={item.value}
            deleteTask={deleteTask}
            index={parseInt(item.key)}
          />
        )}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.sectionHeader}>
            <TextAtom preset="bodyBold" title={title} />
          </View>
        )}
      />
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
  sectionHeader: {
    padding: scalePreset.mediumScale,
    backgroundColor: Colors.gray,
  },
});
