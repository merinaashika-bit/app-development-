import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {

  const [punchInTime, setPunchInTime] = useState('');
  const [punchOutTime, setPunchOutTime] = useState('');

  const handlePunchIn = () => {
    const time = new Date().toLocaleTimeString();
    setPunchInTime(time);
  };

  const handlePunchOut = () => {
    const time = new Date().toLocaleTimeString();
    setPunchOutTime(time);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Punch In / Punch Out</Text>

      <Text style={styles.timeText}>
        Punch In: {punchInTime ? punchInTime : '---'}
      </Text>

      <Button title="Punch In" onPress={handlePunchIn} />

      <Text style={[styles.timeText, { marginTop: 30 }]}>
        Punch Out: {punchOutTime ? punchOutTime : '---'}
      </Text>

      <Button title="Punch Out" onPress={handlePunchOut} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 20,
    marginBottom: 10,
  },
});
