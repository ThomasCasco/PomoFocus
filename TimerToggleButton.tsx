import React from "react";
import { Button, Pressable, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  estaElTemporizadorActivo: boolean;
  pararTemporizador: () => void;
  iniciarTemporizador: () => void;
};

export const TimerToggleButton: React.FC<Props> = ({
  estaElTemporizadorActivo,
  iniciarTemporizador,
  pararTemporizador,
}) => {
  return (
    <Pressable
      onPress={
        estaElTemporizadorActivo ? pararTemporizador : iniciarTemporizador
      }
    >
      <View style={styles.container}>
        <FontAwesome
          name={estaElTemporizadorActivo ? "pause" : "play"}
          size={125}
          color={estaElTemporizadorActivo ? "#F8FFDB" : "#F8FFDB"}
          style={styles.icon}
        ></FontAwesome>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
  },
  container: {
    borderWidth: 5,
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    justifyContent: "center",
    borderColor: "#F8FFDB",
    marginVertical: 50,
  },
});
