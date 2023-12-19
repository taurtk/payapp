// src/components/ForgetPasswordForm.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/InputField';
import Button from '../components/Button';

const ForgetPasswordScreen = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
  });

  const handleSubmit = (values) => {
    // Handle forget password logic here (e.g., send reset password email)
    console.log(values);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Forget Password</Text>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <InputField
              label="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              keyboardType="email-address"
              style={styles.input}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <Button title="Submit" onPress={handleSubmit} style={styles.button} />
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

export default ForgetPasswordScreen;
