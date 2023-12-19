// LoginForm.js
import React from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';
import Button from './Button';

const LoginForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = (values) => {
    // Handle login logic here
    console.log(values);
  };

  return (
    <View>
      <Text>Login Form</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <InputField label="Email" value={values.email} onChangeText={handleChange('email')} />
            {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

            <InputField
              label="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
            />
            {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}

            <Button title="Login" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;
