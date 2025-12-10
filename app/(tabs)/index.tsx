import { useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

export default function PunchScreen() {
  const [punchInTime, setPunchInTime] = useState<string | null>(null);
  const [punchOutTime, setPunchOutTime] = useState<string | null>(null);

  const handlePunchIn = () => {
    if (punchInTime) {
      Alert.alert("Already Punched In", "You have already punched in.");
      return;
    }

    const time = new Date().toLocaleTimeString();
    setPunchInTime(time);
    Alert.alert("Punched In", `Time: ${time}`);
  };

  const handlePunchOut = () => {
    if (!punchInTime) {
      Alert.alert("Error", "Please punch in first!");
      return;
    }

    if (punchOutTime) {
      Alert.alert("Already Punched Out", "You have already punched out.");
      return;
    }

    const time = new Date().toLocaleTimeString();
    setPunchOutTime(time);
    Alert.alert("Punched Out", `Time: ${time}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Punch Attendance</Text>

      <View style={styles.buttonContainer}>
        <Button title="Punch In" onPress={handlePunchIn} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Punch Out" onPress={handlePunchOut} />
      </View>

      <View style={styles.resultBox}>
        <Text style={styles.text}>Punch In Time: {punchInTime || "---"}</Text>
        <Text style={styles.text}>Punch Out Time: {punchOutTime || "---"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 40,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  resultBox: {
    marginTop: 40,
    padding: 20,
    backgroundColor: "#222",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: "white",
    marginBottom: 10,
  },
});
