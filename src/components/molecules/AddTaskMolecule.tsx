import {Colors} from '@src/theme/colors';
import {scalePreset} from '@src/theme/metrics';
import * as React from 'react';
import {Button, Modal, StyleSheet, TextInput, View} from 'react-native';
import {TextAtom} from '@src/components/atoms/TextAtom';

interface AddTaskMoleculeProps {
  modal: boolean;
  setModal: (visible: boolean) => void;
  task: string;
  setTask: (task: string) => void;
  handleAdd: () => void;
}

export const AddTaskMolecule: React.FC<AddTaskMoleculeProps> = ({
  modal,
  setModal,
  task,
  setTask,
  handleAdd,
}) => {
  return (
    <Modal animationType="slide" visible={modal} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <TextAtom title="Add a new task" />
          <TextInput
            style={styles.input}
            value={task}
            onChangeText={text => setTask(text)}
          />
          <View style={styles.buttonContainer}>
            <Button title="Add" onPress={handleAdd} />
            <Button title="Cancel" onPress={() => setModal(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: scalePreset.largeScale,
    paddingVertical: scalePreset.mediumScale,
    borderRadius: scalePreset.smallScale,
    borderColor: Colors.border,
    borderWidth: 1,
    width: '80%',
  },
  buttonPosition: {
    position: 'absolute',
    bottom: scalePreset.largeScale,
    right: scalePreset.largeScale,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  buttonContainer: {
    paddingVertical: scalePreset.largeScale,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
