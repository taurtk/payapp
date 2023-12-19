// src/components/RegisterForm.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/InputField';
import Button from '../components/Button';

const LoginScreen = ({navigation}) => {
  const validationSchema = Yup.object({
    
    phoneNumber: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required('Required'),
   
  });

  const handleSubmit = (values) => {
    // Handle registration logic here
    let phoneNumber = values.phoneNumber;
    const hardcodedMobileNumber = '6370157193';

    // Check if the entered mobile number matches the hardcoded value
    if (phoneNumber === hardcodedMobileNumber) {
      // Navigate to the Home screen on successful login
      navigation.navigate('Dashboard');
    } else {
      // Display an error message or handle the unsuccessful login scenario
      console.log('Invalid mobile number');
    }
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Login</Text>
      <Formik
        initialValues={{  phoneNumber: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            
            <InputField
              label="Phone Number"
              value={values.phoneNumber}
              onChangeText={handleChange('phoneNumber')}
              keyboardType="numeric"
              style={styles.input}
            />
            {errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber}</Text>}

            

            <Button title="Login" onPress={handleSubmit} style={styles.button} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
