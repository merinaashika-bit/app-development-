import { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

export default function SimpleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !mobile || !dob || !address) {
      Alert.alert("Please fill all fields");
      return;
    }

    Alert.alert(
      "Form Submitted",
      `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nDOB: ${dob}\nAddress: ${address}`
    );

    // Clear fields
    setName("");
    setEmail("");
    setMobile("");
    setDob("");
    setAddress("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Form</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Mobile"
        value={mobile}
        onChangeText={setMobile}
        keyboardType="number-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter DOB (DD-MM-YYYY)"
        value={dob}
        onChangeText={setDob}
      />

      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Enter Address"
        value={address}
        onChangeText={setAddress}
        multiline
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#111",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  input: {
    backgroundColor: "#222",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#444",
  },
});
