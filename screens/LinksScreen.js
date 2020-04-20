import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {SafeAreaView, Button, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.getText}>Welcome to Charlotte's Web's shopping section</Text>
      <Text style={styles.get}>Jewelry As Unique As You</Text>
      <Image
            source={
              __DEV__
                ? require('../assets/images/shop.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />

          <Text style={styles.ge}>Our one-of-a-kind design experience helps you make a personal statement that mass-produced jewelry can't.</Text>
          <Image
            source={
              __DEV__
                ? require('../assets/images/1.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Button title='Contact Jeweller'/>
          <Image
            source={
              __DEV__
                ? require('../assets/images/2.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Button title='Contact Jeweller'/>
          <Image
            source={
              __DEV__
                ? require('../assets/images/3.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Button title='Contact Jeweller'/>
          <Image
            source={
              __DEV__
                ? require('../assets/images/4.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Button title='Contact Jeweller'/>
          <Image
            source={
              __DEV__
                ? require('../assets/images/5.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Button title='Contact Jeweller'/>
          <Image
            source={
              __DEV__
                ? require('../assets/images/6.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Button title='Contact Jeweller'/>
          <Image
            source={
              __DEV__
                ? require('../assets/images/7.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Button title='Contact Jeweller'/>
          <Image
            source={
              __DEV__
                ? require('../assets/images/8.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Button title='Contact Jeweller'/>
          <Image
            source={
              __DEV__
                ? require('../assets/images/9.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Button title='Contact Jeweller'/>
          <Image
            source={
              __DEV__
                ? require('../assets/images/10.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Button title='Contact Jeweller'/>
          <Image
            source={
              __DEV__
                ? require('../assets/images/11.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Button title='Contact Jeweller'/>
          <Image
            source={
              __DEV__
                ? require('../assets/images/12.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Button title='Contact Jeweller'/>
          <Image
            source={
              __DEV__
                ? require('../assets/images/13.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Button title='Contact Jeweller'/>
          <Image
            source={
              __DEV__
                ? require('../assets/images/14.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Button title='Contact Jeweller'/>
          <Image
            source={
              __DEV__
                ? require('../assets/images/15.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Button title='Contact Jeweller'/>
          <Image
            source={
              __DEV__
                ? require('../assets/images/16.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Button title='Contact Jeweller'/>
         </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  welcomeImage: {
    width: 430,
    height: 300,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getText: {
    fontStyle:'italic',
    fontSize: 14,
    color: 'maroon',
    lineHeight: 24,
    textAlign: 'center'},

    get: {
      fontStyle:'italic',
      fontSize: 23,
      color: 'gold',
      lineHeight: 24,
      textAlign: 'center'},

      ge: {
        fontStyle:'italic',
        fontSize: 14,
        color: 'white',
        lineHeight: 24,
        textAlign: 'center'},
});
