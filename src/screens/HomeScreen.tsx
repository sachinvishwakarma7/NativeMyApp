import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {appColor} from '../assets/colors/appColor';
import {windowHeight} from '../assets/utils/Dimentions';
import CommonButton from '../components/CommonButton';
import CommonAuthView from '../components/CommonAuthView';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AuthNavigation';

import CommonBackButton from '../components/CommonBackButton';
type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({navigation}: Props) => {
  return (
    <>
      <CommonBackButton />
      <CommonAuthView isIcon={true}>
        <View style={styles.cardView}>
          <Text style={styles.titleText}>Welcome to myApp</Text>
          <Text style={styles.subTitleText}>
            Discover Amazing Thing Around You.
          </Text>
          <View style={styles.buttonView}>
            <CommonButton
              onPress={async () => navigation.navigate('SignInScreen')}
              title="Sign in"
              type="filled"
            />
            <CommonButton
              onPress={async () => navigation.navigate('SignUpScreen')}
              title="Sign Up"
              type="transparent"
            />
          </View>
          <View style={styles.dividerView}>
            <View style={styles.dividerLine} />
            <View style={styles.dividerTextView}>
              <Text style={styles.dividerText}>Or connect using</Text>
            </View>
          </View>
          <View style={styles.socialIconContainer}>
            <TouchableOpacity style={styles.socialIconView}>
              <Text style={styles.socialIconText}>f</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIconView}>
              <Text style={styles.socialIconText}>t</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIconView}>
              <Text style={styles.socialIconText}>g</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIconView}>
              <Text style={styles.socialIconText}>m</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.skipButtonView}>
          <TouchableOpacity>
            <Text style={styles.skipButtonText}>SKIP</Text>
          </TouchableOpacity>
        </View>
      </CommonAuthView>
    </>
  );
};

export default HomeScreen;

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
  mainIconView: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginBottom: 100,
    backgroundColor: appColor.white,
  },
  cardView: {
    marginTop: 140,
    width: '90%',
    backgroundColor: appColor.white,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 22,
    alignSelf: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    color: appColor.gray,
    paddingVertical: 6,
    paddingTop: 14,
    fontSize: 20,
  },
  subTitleText: {
    color: appColor.gray,
    fontSize: 16,
  },
  buttonView: {
    paddingTop: 30,
    width: '100%',
  },
  dividerView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 22,
  },
  dividerLine: {
    width: 300,
    borderColor: appColor.gray,
    borderBottomWidth: 1,
  },
  dividerTextView: {
    position: 'absolute',
    backgroundColor: appColor.white,
    padding: 6,
  },
  dividerText: {
    alignSelf: 'center',
    color: appColor.gray,
    backgroundColor: appColor.white,
    padding: 10,
  },
  socialIconContainer: {
    flexDirection: 'row',
  },
  socialIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    backgroundColor: appColor.primary,
    borderRadius: 6,
    marginHorizontal: 8,
    margin: 10,
  },
  socialIconText: {
    color: appColor.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  skipButtonView: {
    position: 'absolute',
    bottom: 40,
    padding: 4,
  },
  skipButtonText: {
    color: appColor.gray,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
