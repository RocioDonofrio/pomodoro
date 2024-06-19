import React from "react";
import { StyleSheet, Text, View } from "react-native";

const timer = (props) => {
  const { tiempo, colores } = props;
  const formatoTiempo = `${Math.floor(tiempo / 60)
    .toString()
    .padStart(2, "0")} : ${(tiempo % 60).toString().padStart(2, "0")}`;

  return (
    <View style={[styles.contenedor, { backgroundColor: colores.button }]}>
      <Text style={[styles.texto, { color: colores.text }]}>
        {formatoTiempo}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    borderWidth: 1,
    height: 250,
    alignContent: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 25,
  },
  texto: {
    fontSize: 60,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default timer;
