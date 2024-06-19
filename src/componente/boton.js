import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Audio } from "expo-av";

const Boton = (props) => {
  const { activo, setActivo, reiniciar } = props;

  const handleClick = () => {
    setActivo(!activo);
    playSound();
  };

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/click.mp3")
    );
    await sound.playAsync();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.boton} onPress={handleClick}>
        <Text style={styles.texto}>{activo ? "Parar" : "Comenzar"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton} onPress={reiniciar}>
        <Text style={styles.texto}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  boton: {
    backgroundColor: "white",
    margin: 10,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  texto: {
    fontSize: 20,
    alignSelf: "center",
  },
});

export default Boton;
