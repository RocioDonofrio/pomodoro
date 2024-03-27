import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default Tabs = (props) => {
  const { seleccion, setseleccion, tiempo, setTiempo, setActivo } = props; //desarmar el props

  const opciones = ["Pomodoro", "Descanso", "Descancito"];

  const handleCambioSeleccion = (index) => {
    setseleccion(index);
    const nuevoTiempo = index === 0 ? 25 : index === 1 ? 10 : 5;
    setTiempo(nuevoTiempo * 60);

    //setTiempo(index === 0 ? 25*60 : index === 1 ? 10*60 : 5*60);
  };

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      {opciones.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.boton,
            seleccion !== index && { borderColor: "transparente" },
          ]} //si coincide con la seleccion el borde cambia
          onPress={() => handleCambioSeleccion(index)}
        >
          <Text style={styles.texto}>{item} </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
//creando el objeto "estilo"
const styles = StyleSheet.create({
  boton: {
    borderColor: "black",
    borderWhidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  texto: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
