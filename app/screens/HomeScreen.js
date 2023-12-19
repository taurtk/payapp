import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";

const navigateToLogin = () => {
 
};
const navigateToRegister = () => {
 
};
function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/bg.jpeg")}
    >
      <View style={styles.logoContainer}>
        {/* <Image style={styles.logo} source={require("../assets/logo-red.png")} /> */}
        <Text style={styles.tagline}>Travel where ever you want</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" onPress={()=>{ navigation.navigate('Login');}} />
        <Button title="Register"  onPress={()=>{ navigation.navigate('Register');}} color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width:400
  },
  buttonsContainer: {
    // padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default HomeScreen;
