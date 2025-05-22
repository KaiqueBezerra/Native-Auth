import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import { Button } from "../components/button";
import { Input } from "../components/input";
import { router } from "expo-router";
import { userApi } from "../repositories/user-repository";
import { useAuth } from "../hooks/useAuth";

export default function Register() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleNext() {
    router.navigate("/");
  }

  async function handleSubmit() {
    if (!email || !password) return;

    try {
      const { status } = await userApi.createUser({ email, password });

      if (status === 201) {
        await login(email, password);
        router.replace("/");
      } else {
        alert("Erro ao registrar");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>Register</Text>
        <Input
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          autoCapitalize="none"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />

        <Text style={styles.link}>
          Already have an account?{" "}
          <Text style={{ color: "orange" }} onPress={handleNext}>
            Login
          </Text>
        </Text>

        <Button title="Register" onPress={handleSubmit} />
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
