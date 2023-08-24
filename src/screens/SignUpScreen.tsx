import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CommonAuthView from '../components/CommonAuthView';
import CommonBackButton from '../components/CommonBackButton';
import {appColor} from '../assets/colors/appColor';
import CommonButton from '../components/CommonButton';
import CommonInputText from '../components/CommonInputText';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../navigation/AuthNavigation';
type Props = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

const SignUpScreen = ({navigation}: Props) => {
  return (
    // <View style={styles.container}>
    <>
      <CommonBackButton onPress={async () => navigation.goBack()} />
      <CommonAuthView>
        <View style={styles.titleTextView}>
          <Text style={styles.titleText}>Sign Up</Text>
          <Text style={styles.subTitleText}>
            Sign Up discover amazing things near around you.
          </Text>
        </View>
        <View style={styles.cardView}>
          <View style={styles.buttonView}>
            <CommonInputText placeholder="Full Name" />
            <CommonInputText placeholder="Email" />
            <CommonInputText placeholder="Password" />
            <CommonButton
              onPress={async () => {}}
              title="Sign Up"
              type="filled"
            />
          </View>
          <View>
            <Text style={styles.forgotPasswordText}>
              By signing up accept our{' '}
              <TouchableOpacity>
                <Text style={styles.termsAndServicesText}>
                  Terms of services
                </Text>
              </TouchableOpacity>
              and{' '}
              <TouchableOpacity>
                <Text style={styles.termsAndServicesText}>Privicy Policy</Text>
              </TouchableOpacity>
            </Text>
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
      {/* </View> */}
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardView: {
    zIndex: 3,
    marginTop: 140,
    width: '90%',
    backgroundColor: appColor.white,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 22,
    alignSelf: 'center',
    alignItems: 'center',
  },
  titleTextView: {
    position: 'absolute',
    right: 0,
    left: 22,
    bottom: 0,
    top: 100,
  },
  termsAndServicesText: {
    color: appColor.primary,
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: appColor.white,
    paddingVertical: 6,
  },
  forgotPasswordText: {
    color: appColor.gray,
    paddingVertical: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  subTitleText: {
    fontSize: 16,
    paddingVertical: 6,
    color: appColor.white,
    width: 280,
  },
  skipButtonView: {
    position: 'absolute',
    bottom: 26,
    padding: 4,
  },
  skipButtonText: {
    color: appColor.gray,
    fontSize: 18,
    fontWeight: 'bold',
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
    margin: 20,
  },
  socialIconText: {
    color: appColor.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonView: {
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
  },
});
