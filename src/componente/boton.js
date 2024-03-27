import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Audio } from "expo-av";

export default Boton = (props) => {
  const { activo, setActivo } = props;

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
    <View>
      <TouchableOpacity style={styles.boton} onPress={() => handleClick()}>
        <text>{activo ? "Parar" : "Comenzar"}</text>// si el boton lo vamos a
        usar solo una vez esta seria la opcion, si se va a usar mas d euna vez
        lo ideal seria parametrizar
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  boton: {
    backgroundColor: "white",
    margin: 10,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
  },

  texto: {
    fontSize: 20,
    alignSelf: "center",
  },
});

//export default Boton = (props) => {
//const { Text } = props;
// return (
// <View>
// <Text>{texto}</Text>
// </View>
//);
//};
