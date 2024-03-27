import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Boton from "../componente/boton";
import { useState } from "react";
import { useEffect } from "react";
import { Audio } from "expo-av";

export default principal = () => {
  const colores = ["#21EB98", "BF60EB", "EBBE21"];

  const [seleccion, setSeleccion] = useState("POMO" | "SHORT" | "LONG");

  const [tiempo, setTiempo] = useState(25 * 60);

  conts[(activo, setActivo)] = useState(false);

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
      setTiempo(tiempoActual === 0 ? 1500 : tiempoActual === 1 ? 300 : 900);
      Alarma();
    }

    return () => clearInterval(interval);
  }, [tiempo, activo]);

  return (
    <SafeAreaView
      Style={[
        styles.contenedor,
        {
          backgroundColor: colores[seleccion],
        },
      ]}
    >
      <View style={{ marginTop: Platform.OS === "android" && 30 }}>
        <Tabs
          seleccion={seleccion}
          setSeleccion={setSeleccion}
          tiempo={tiempo}
          setTiempo={setTiempo}
        />
        <Timer tiempo={tiempo} />
        <Boton activo={activo} setActivo={setActivo} />
      </View>
    </SafeAreaView>
  );
};

//const styles = StyleSheet.create({
//  contenedor: {
//   backgroundColor: "red",
//    flex: 0.25,
//    marginTop: 10,
//  },
//});
