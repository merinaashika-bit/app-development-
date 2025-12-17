import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [value, setValue] = useState('');

  const handlePress = (text) => {
    if (text === 'C') {
      setValue('');
    } else if (text === '=') {
      try {
        setValue(eval(value).toString());
      } catch (e) {
        setValue('Error');
      }
    } else {
      setValue(value + text);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{value || '0'}</Text>

      <View style={styles.buttonContainer}>
        {buttons.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#723d6bff',
  },
  display: {
    fontSize: 40,
    textAlign: 'right',
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '22%',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#99d1deff',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
});