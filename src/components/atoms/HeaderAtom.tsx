import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextAtom} from './TextAtom';
import {Colors} from '@src/theme/colors';
import {moderateScale, scalePreset} from '@src/theme/metrics';

interface HeaderAtomProps {
  title: string;
}

export const HeaderAtom: React.FC<HeaderAtomProps> = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <TextAtom title={title} preset="title" style={{color: Colors.white}} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.primaryCTA,
    height: moderateScale(60),
    paddingHorizontal: scalePreset.baseScale,
    paddingVertical: scalePreset.smallScale,
    justifyContent: 'center',
  },
});
