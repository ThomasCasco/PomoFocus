import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { ContadorCuentaRegresivaDisplay } from "./ContadorCuentaRegresivaDisplay";
import { TimerToggleButton } from "./TimerToggleButton";
import {
  ModoDelTemporizadorDisplay,
  modosDelTemporizador,
} from "./ModoDelTemporizadorDisplay";

const MINUTOS_DE_CONCENTRACION = 25 * 60 * 1000;
const MINUTOS_DE_DESCANSO = 25 * 60 * 1000;

export default function App() {
  const [contadorDeTiempo, setContadorDeTiempo] = useState<number>(
    MINUTOS_DE_CONCENTRACION
  );

  const [intervaloDeTiempo, setIntervaloDeTiempo] =
    useState<NodeJS.Timer | null>(null);

  const [estaElTemporizadorActivo, setEstaElTemporizadorActivo] =
    useState<boolean>(false);

  const [modoDelTemporizador, setModoDelTemporizador] =
    useState<modosDelTemporizador>("Concentrarse");

  useEffect(() => {
    if (contadorDeTiempo === 0) {
      if (modoDelTemporizador === "Concentrarse") {
        setModoDelTemporizador("Descansar");
        setContadorDeTiempo(MINUTOS_DE_DESCANSO);
      } else {
        setModoDelTemporizador("Concentrarse");
        setContadorDeTiempo(MINUTOS_DE_CONCENTRACION);
      }
      pararTemporizador();
    }
  }, [contadorDeTiempo]);
  const iniciarTemporizador = () => {
    setEstaElTemporizadorActivo(true);
    const id = setInterval(
      () => setContadorDeTiempo((prev) => prev - 1000),
      1000
    );
    setIntervaloDeTiempo(id);
  };

  const pararTemporizador = () => {
    if (intervaloDeTiempo !== null) {
      clearInterval(intervaloDeTiempo);
    }
    setEstaElTemporizadorActivo(false);
  };

  return (
    <View
      style={{
        ...styles.container,
        ...{
          backgroundColor:
            modoDelTemporizador === "Descansar" ? "#91b676" : "#FF6464",
        },
      }}
    >
      <Text
        style={{
          fontSize: 50,
          fontWeight: "800",
          color: "#F8FFDB",
          marginBottom: 80,
          marginTop: 10,
        }}
      >
        {" "}
        PomoFocus
      </Text>
      <ModoDelTemporizadorDisplay modoDelTemporizador={modoDelTemporizador} />
      <StatusBar style="auto" />
      <TimerToggleButton
        estaElTemporizadorActivo={estaElTemporizadorActivo}
        iniciarTemporizador={iniciarTemporizador}
        pararTemporizador={pararTemporizador}
      />
      <ContadorCuentaRegresivaDisplay
        fechaDelContador={new Date(contadorDeTiempo)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF6464",
    alignItems: "center",
    justifyContent: "center",
  },
});
