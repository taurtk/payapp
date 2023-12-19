// src/components/LoginForm.js
import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/InputField';
import Button from '../components/Button';

const LoginScreen= () => {
  const validationSchema = Yup.object({
    mobileNumber: Yup.string().matches(/^[0-9]{10}$/, 'Invalid mobile number').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = (values) => {
    // Handle login logic here
    console.log(values);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Formik
        initialValues={{ mobileNumber: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.form}>
            <InputField
              label="Mobile Number"
              value={values.mobileNumber}
              onChangeText={handleChange('mobileNumber')}
              keyboardType="numeric"
              style={styles.input}
            />
            {errors.mobileNumber && <Text style={styles.error}>{errors.mobileNumber}</Text>}

            

            <Button title="Login" onPress={handleSubmit} style={styles.button} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '80%',
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
