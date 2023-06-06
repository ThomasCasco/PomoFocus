import React from "react";
import { Text, View, StyleSheet } from "react-native";

type Props = {
  fechaDelContador: Date;
};
export const ContadorCuentaRegresivaDisplay: React.FC<Props> = ({
  fechaDelContador,
}) => {
  return (
    <View style={styles.ContainerCuentaRegresiva}>
      <Text style={styles.ContadorCuentaRegresivaDisplay}>
        {fechaDelContador.getMinutes().toString().padStart(2, "0")}:
        {fechaDelContador.getSeconds().toString().padStart(2, "0")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ContadorCuentaRegresivaDisplay: {
    fontSize: 40,
    fontWeight: "800",
    color: "#383836",
    backgroundColor: "#F8FFDB",
    borderRadius: 50,
    width: "50%",
  },
  ContainerCuentaRegresiva: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    backgroundColor: "#F8FFDB",
    borderRadius: 50,
    border: "solid",
    borderColor: "#383836",
    borderWidth: 2,
  },
});
