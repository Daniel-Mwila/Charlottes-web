import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {SafeAreaView, Button, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.getText}>Welcome to Charlotte's Web's Contact section</Text>
      <Text style={styles.get}>Jewelry As Unique As You</Text>
      

          <Text style={styles.ge}>Schedule a time to meet with our designers to discuss design possibilities.</Text>
          <Text style={styles.ge}>Email our designers</Text>
          <Image
            source={
              __DEV__
                ? require('../assets/images/q.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <OptionButton
        icon="md-contact"
        label="Contact: Aika"
        onPress={() => WebBrowser.openBrowserAsync('https://www.google.com/gmail/about/#')}
      />
          <Image
            source={
              __DEV__
                ? require('../assets/images/w.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <OptionButton
        icon="md-contact"
        label="Contact: Amara"
        onPress={() => WebBrowser.openBrowserAsync('https://www.google.com/gmail/about/#')}
      />
          <Image
            source={
              __DEV__
                ? require('../assets/images/e.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <OptionButton
        icon="md-contact"
        label="Contact: Abhimanyu"
        onPress={() => WebBrowser.openBrowserAsync('https://www.google.com/gmail/about/#')}
      />
          <Image
            source={
              __DEV__
                ? require('../assets/images/r.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        <OptionButton
        icon="md-contact"
        label="Contact: Jane"
        onPress={() => WebBrowser.openBrowserAsync('https://www.google.com/gmail/about/#')}
      />

      
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
