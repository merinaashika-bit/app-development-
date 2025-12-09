import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {

  const [punchTime, setPunchTime] = useState('');

  const handlePunchIn = () => {
    const time = new Date().toLocaleTimeString();
    setPunchTime(time);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>
        Punch In Time: {punchTime ? punchTime : '---'}
      </Text>

      <Button title="Punch In" onPress={handlePunchIn} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 20,
    marginBottom: 20,
  }
});

