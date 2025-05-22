import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title?: string;
};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.btn} {...rest}>
      <Text style={styles.title}>
        {title} {rest.children}
      </Text>
    </TouchableOpacity>
  );
}
