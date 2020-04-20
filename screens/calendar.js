import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import {View, Button, Platform, TouchableOpacity,Image, StyleSheet, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      
      <View>
        <Button onPress={showDatepicker} title="PICK A DATE HERE" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="PICK TIME BETWEEN 10am-8pm" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
        
      )}
       <TouchableOpacity
        onPress={() => alert('Appointment has been made, you will recieve a reminder 2 hours before the appointment')}
        style={{ backgroundColor: 'green' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>               Pay k10 to set appointment</Text>
      </TouchableOpacity>
      <Button onPress={() => WebBrowser.openBrowserAsync('https://www.paybills.co.zm/')} title='Online Payment'/>
      <Button onPress={() => WebBrowser.openBrowserAsync('https://www.google.com/gmail/about/#')} title='Set Appointment with Jeweller'/>
    </View>

  );
};

export default App;
