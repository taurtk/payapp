// src/components/RegisterForm.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/InputField';
import Button from '../components/Button';

const RegisterScreen = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phoneNumber: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = (values) => {
    // Handle registration logic here
    console.log(values);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Register</Text>
      <Formik
        initialValues={{ fullName: '', email: '', phoneNumber: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <InputField
              label="Full Name"
              value={values.fullName}
              onChangeText={handleChange('fullName')}
              style={styles.input}
            />
            {errors.fullName && <Text style={styles.error}>{errors.fullName}</Text>}

            <InputField
              label="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              keyboardType="email-address"
              style={styles.input}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <InputField
              label="Phone Number"
              value={values.phoneNumber}
              onChangeText={handleChange('phoneNumber')}
              keyboardType="numeric"
              style={styles.input}
            />
            {errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber}</Text>}

            <InputField
              label="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
              style={styles.input}
            />
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}

            <Button title="Register" onPress={handleSubmit} style={styles.button} />
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

export default RegisterScreen;
