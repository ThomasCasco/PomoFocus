import React from "react";
import { Text, View, StyleSheet } from "react-native";

export type modosDelTemporizador = "Concentrarse" | "Descansar";

type Props = {
  modoDelTemporizador: modosDelTemporizador;
};

export const ModoDelTemporizadorDisplay: React.FC<Props> = ({
  modoDelTemporizador,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textoModoDelTemporizador}>
        Tiempo de {modoDelTemporizador}
        {modoDelTemporizador === "Concentrarse" ? "💪" : "🙇‍♀️🙇‍♂️"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    backgroundColor: "#F8FFDB",
    borderRadius: 50,
    border: "solid",
    borderColor: "#383836",
    borderWidth: 2,
  },
  textoModoDelTemporizador: {
    fontSize: 30,
    fontWeight: "800",
    color: "#383836",
  },
});
