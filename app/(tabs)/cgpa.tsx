import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [semCount, setSemCount] = useState("");
  const [semesters, setSemesters] = useState([]);
  const [cgpa, setCgpa] = useState(null);

  const handleSemesterCount = (value) => {
    if (value > 10) return;

    setSemCount(value);
    const temp = [];
    for (let i = 0; i < value; i++) {
      temp.push({ gpa: "", credits: "" });
    }
    setSemesters(temp);
  };

  const updateSemester = (index, field, value) => {
    const temp = [...semesters];
    temp[index][field] = value;
    setSemesters(temp);
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let weightedSum = 0;

    semesters.forEach((sem) => {
      const gpa = parseFloat(sem.gpa);
      const credits = parseFloat(sem.credits);

      if (!isNaN(gpa) && !isNaN(credits)) {
        totalCredits += credits;
        weightedSum += gpa * credits;
      }
    });

    if (totalCredits === 0) return;

    const result = (weightedSum / totalCredits).toFixed(2);
    setCgpa(result);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>
        CGPA Calculator{"\n"}
        <Text style={styles.subHeading}>
          Sri Venkateswara College of Engineering
        </Text>
      </Text>

      <Text style={styles.label}>
        Enter Number of Semesters Completed (Max 10)
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Eg: 4"
        placeholderTextColor="#777"
        value={semCount}
        onChangeText={handleSemesterCount}
      />

      {semesters.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.semTitle}>Semester {index + 1}</Text>

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter GPA"
            placeholderTextColor="#777"
            value={item.gpa}
            onChangeText={(value) =>
              updateSemester(index, "gpa", value)
            }
          />

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter Semester Credits"
            placeholderTextColor="#777"
            value={item.credits}
            onChangeText={(value) =>
              updateSemester(index, "credits", value)
            }
          />
        </View>
      ))}

      {semesters.length > 0 && (
        <TouchableOpacity style={styles.button} onPress={calculateCGPA}>
          <Text style={styles.buttonText}>Calculate CGPA</Text>
        </TouchableOpacity>
      )}

      {cgpa && (
        <Text style={styles.result}>
          CGPA = {cgpa}
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d1117",
    padding: 16,
  },
  heading: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 14,
    color: "#9da7b3",
  },
  label: {
    color: "#c9d1d9",
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#161b22",
    color: "#ffffff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#161b22",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  semTitle: {
    color: "#58a6ff",
    marginBottom: 8,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#238636",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  result: {
    color: "#58a6ff",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
  },
});
