import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { Button } from "../components/button";

export default function Home() {
  const { user } = useAuth();
  const [count, setCount] = useState(0);

  return (
    <View style={styles.home}>
      <View style={styles.container}>
        <Text style={styles.text}>Bem vindo</Text>
        <Text style={styles.link}>{user?.email}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Contador</Text>
        <Button onPress={() => setCount(count + 1)}>{count}</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    gap: 10,
  },
  container: {
    gap: 10,
    width: 300,
    padding: 50,
    borderWidth: 1,
    borderColor: "orange",
    backgroundColor: "#3F3F47",
    borderStyle: "dashed",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "orange",
    textAlign: "center",
  },
  link: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
  },
});
