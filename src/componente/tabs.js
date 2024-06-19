import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default Tabs = (props) => {
  const { seleccion, setSeleccion, setTiempo, setActivo, colores } = props;
  const opciones = ["Pomodoro", "Descanso", "Descansito"];

  const handleCambioSeleccion = (index) => {
    setSeleccion(index);
    const nuevoTiempo = index === 0 ? 25 : index === 1 ? 10 : 5;
    setTiempo(nuevoTiempo * 60);
    setActivo(false);
  };

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      {opciones.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.boton,
            {
              borderColor: seleccion === index ? colores.button : "transparent",
            },
            { backgroundColor: seleccion === index ? colores.button : "white" },
          ]}
          onPress={() => handleCambioSeleccion(index)}
        >
          <Text
            style={[
              styles.texto,
              { color: seleccion === index ? colores.text : "black" },
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  texto: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
