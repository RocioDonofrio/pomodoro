import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Tabs from "../componente/tabs";
import Timer from "../componente/timer";
import Boton from "../componente/boton";
import { useState, useEffect } from "react";
import { Audio } from "expo-av";

export default principal = () => {
  const colores = [
    { background: "#B991E8", button: "#46167F", text: "#FFFFFF" }, // Pomodoro
    { background: "#4682B4", button: "#A8BBF5", text: "#FFFFFF" }, // Descanso
    { background: "#E9A262", button: "#FF6347", text: "#FFFFFF" }, // Descansito
  ];

  const [seleccion, setSeleccion] = useState(0); // 0 for Pomodoro, 1 for Descanso, 2 for Descansito
  const [tiempo, setTiempo] = useState(25 * 60);
  const [activo, setActivo] = useState(false);

  const Alarma = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/click.mp3")
    );
    await sound.playAsync();
  };

  useEffect(() => {
    let interval = null;

    if (activo) {
      interval = setInterval(() => {
        setTiempo(tiempo - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (tiempo === 0) {
      setActivo(false);
      setTiempo(seleccion === 0 ? 1500 : seleccion === 1 ? 300 : 900);
      Alarma();
    }

    return () => clearInterval(interval);
  }, [tiempo, activo]);
  const reiniciar = () => {
    setActivo(false);
    setTiempo(seleccion === 0 ? 25 * 60 : seleccion === 1 ? 10 * 60 : 5 * 60);
  };

  return (
    <SafeAreaView
      style={[
        styles.contenedor,
        {
          backgroundColor: colores[seleccion].background,
        },
      ]}
    >
      <View style={{ marginTop: Platform.OS === "android" && 30 }}>
        <Tabs
          seleccion={seleccion}
          setSeleccion={setSeleccion}
          setTiempo={setTiempo}
          setActivo={setActivo}
          colores={colores[seleccion]}
        />
        <Timer tiempo={tiempo} colores={colores[seleccion]} />
        <Boton
          activo={activo}
          setActivo={setActivo}
          reiniciar={reiniciar}
          colores={colores[seleccion]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
