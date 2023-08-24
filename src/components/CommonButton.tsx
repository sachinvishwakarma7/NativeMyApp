import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {appColor} from '../assets/colors/appColor';

type appProps = {
  onPress: () => {};
  title?: string;
  type: 'filled' | 'transparent';
};

const CommonButton = ({
  onPress,
  title = 'click',
  type = 'filled',
}: appProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        type === 'filled' && styles.filledButtonView,
        type === 'transparent' && styles.transparentButtonView,
      ]}>
      <Text
        style={[
          type === 'filled' && styles.filledButtonText,
          type === 'transparent' && styles.transparentButtonText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  filledButtonView: {
    backgroundColor: appColor.primary,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginVertical: 6,
  },
  filledButtonText: {
    color: appColor.white,
  },
  transparentButtonView: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: appColor.primary,
  },
  transparentButtonText: {
    color: appColor.primary,
  },
});
