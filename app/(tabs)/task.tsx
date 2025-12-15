import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  StyleSheet,
  Keyboard,
} from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add task with date
  const addTask = () => {
    const t = input.trim();
    if (!t) return;

    const newTask = {
      id: Date.now().toString(),
      text: t,
      done: false,
      date: new Date().toDateString(), // 👈 date added
    };

    setTasks((old) => [newTask, ...old]);
    setInput("");
    Keyboard.dismiss();
  };

  // Toggle done
  const toggleDone = (id) =>
    setTasks((old) =>
      old.map((x) => (x.id === id ? { ...x, done: !x.done } : x))
    );

  // Delete task
  const deleteTask = (id) =>
    Alert.alert("Delete", "Remove this task?", [
      { text: "Cancel", style: "cancel" },
      { text: "OK", onPress: () => setTasks((old) => old.filter((x) => x.id !== id)) },
    ]);

  // Each task row
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <TouchableOpacity style={{ flex: 1 }} onPress={() => toggleDone(item.id)}>
        <Text style={[styles.text, item.done && styles.done]}>
          {item.text}
        </Text>
        <Text style={styles.date}>{item.date}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.del}>
        <Text style={styles.delText}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.box}>
      <Text style={styles.title}>To-Do</Text>

      <View style={styles.inputRow}>
        <TextInput
          placeholder="Add a task..."
          value={input}
          onChangeText={setInput}
          onSubmitEditing={addTask}
          style={styles.input}
          returnKeyType="done"
        />
        <TouchableOpacity onPress={addTask} style={styles.addBtn}>
          <Text style={styles.addTxt}>＋</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.empty}>No tasks — add one</Text>
        }
        contentContainerStyle={{ paddingTop: 8 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 26, fontWeight: "600", marginBottom: 10 },

  inputRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  input: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: "#c42828ff",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  addBtn: {
    marginLeft: 8,
    width: 44,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  addTxt: { fontSize: 22 },

  row: {
    flexDirection: "row",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
    marginBottom: 8,
    alignItems: "center",
  },
  text: { fontSize: 16 },
  date: { fontSize: 12, color: "#666", marginTop: 4 },
  done: { textDecorationLine: "line-through", color: "#888" },

  del: { marginLeft: 12, padding: 6 },
  delText: { fontSize: 18, color: "#b00" },

  empty: { color: "#666", textAlign: "center", marginTop: 20 },
});
