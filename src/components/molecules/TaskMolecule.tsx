import {Colors} from '@src/theme/colors';
import {scalePreset} from '@src/theme/metrics';
import * as React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextAtom} from '../atoms/TextAtom';

interface TaskMoleculeProps {
  item: string;
  deleteTask: (index: number) => void;
  index: number;
}

export const TaskMolecule: React.FC<TaskMoleculeProps> = ({
  item,
  deleteTask,
  index,
}) => {
  return (
    <View
      key={index}
      style={{
        paddingHorizontal: scalePreset.largeScale,
        paddingVertical: scalePreset.mediumScale,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TextAtom
        style={{paddingHorizontal: scalePreset.mediumScale}}
        title={item}
      />
      <Icon
        name="trash-outline"
        color={Colors.error}
        size={scalePreset.largeScale}
        onPress={() => deleteTask(index)}
      />
    </View>
  );
};
