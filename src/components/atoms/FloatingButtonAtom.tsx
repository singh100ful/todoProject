import {Colors} from '@src/theme/colors';
import {moderateScale, scalePreset} from '@src/theme/metrics';
import * as React from 'react';
import {Pressable, PressableProps, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface FloatingButtonAtomProps extends PressableProps {}

export const FloatingButtonAtom: React.FC<FloatingButtonAtomProps> = props => {
  return (
    <Pressable
      {...props}
      style={({pressed}) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}>
      <View style={styles.buttonContainer}>
        <Icon
          name="add-sharp"
          color={Colors.white}
          size={scalePreset.largeScale}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primaryCTA,
    paddingHorizontal: scalePreset.baseScale,
    paddingVertical: scalePreset.baseScale,
    borderRadius: moderateScale(40),
  },
});
