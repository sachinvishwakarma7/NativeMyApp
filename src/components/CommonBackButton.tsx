import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import BackIcon from '../assets/images/icons/BackIcon';

const CommonBackButton = ({onPress}: {onPress?: () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.bakcButtonIconView}>
      <BackIcon />
    </TouchableOpacity>
  );
};

export default CommonBackButton;

const styles = StyleSheet.create({
  bakcButtonIconView: {
    zIndex: 100,
    position: 'absolute',
    margin: 20,
    paddingTop: 20,
  },
});
