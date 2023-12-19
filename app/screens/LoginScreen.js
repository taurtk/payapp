import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleLogin = () => {
    // Hardcoded mobile number for demonstration purposes
    const hardcodedMobileNumber = '1234567890';

    // Check if the entered mobile number matches the hardcoded value
    if (mobileNumber === hardcodedMobileNumber) {
      // Navigate to the Home screen on successful login
      navigation.navigate('Dashboard');
    } else {
      // Display an error message or handle the unsuccessful login scenario
      console.log('Invalid mobile number');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="numeric"
        value={mobileNumber}
        onChangeText={(text) => setMobileNumber(text)}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default LoginScreen;
