import { useAuth } from "@/src/hooks/useAuth";
import { Text, View } from "react-native";
import { Button } from "../button";

import { styles } from "./styles";

export function Header() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Olá, {user.email}</Text>
      <View>
        <Button title="Sair" onPress={logout} />
      </View>
    </View>
  );
}
