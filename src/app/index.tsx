import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import { Button } from "../components/button";
import { Input } from "../components/input";
import { router } from "expo-router";

import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  function handleNext() {
    router.navigate("/register");
  }

  async function handleSubmit() {
    if (!email || !password) return;

    const success = await login(email, password);
    if (success) router.replace("/");
    else alert("Credenciais inválidas");
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>Login</Text>
        <Input
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Text style={styles.link}>
          Don't have an account?{" "}
          <Text style={{ color: "orange" }} onPress={handleNext}>
            Register
          </Text>
        </Text>

        <Button title="Login" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  form: {
    gap: 10,
    width: 300,
    padding: 50,
    borderWidth: 1,
    borderColor: "orange",
    backgroundColor: "#3F3F47",
    borderStyle: "dashed",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  link: {
    fontSize: 10,
    color: "#fff",
    textAlign: "left",
  },
});
