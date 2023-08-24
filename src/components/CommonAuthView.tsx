import {StyleSheet, View} from 'react-native';
import React from 'react';
import {windowHeight} from '../assets/utils/Dimentions';
import {appColor} from '../assets/colors/appColor';
import CommonIcon from './CommonIcon';

type Props = {
  children: React.ReactNode;
  iconHeight?: number;
  iconWidth?: number;
  isIcon?: boolean;
};

const CommonAuthView = ({children, isIcon = false}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.primaryCard}>
        {isIcon && (
          <View style={styles.cardIconView}>
            <CommonIcon />
          </View>
        )}
      </View>
      <View style={styles.mainContainer}>{children}</View>
    </View>
  );
};

export default CommonAuthView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.lightGray,
  },
  text: {
    color: 'white',
  },
  primaryCard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight / 2,
    backgroundColor: appColor.primary,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  mainContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardIconView: {
    marginBottom: 30,
  },
});
