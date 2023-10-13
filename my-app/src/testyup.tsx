import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import DateTimeList from './dateTimeEx';
import { listaTassoIntaresse } from './model';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const ValidationSchemaExample = () => {
  const a = useState<listaTassoIntaresse>([]);

  return (<div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" /> <br />
          <Error cont={errors.firstName}/>
          <Field name="lastName" /> <br />
          <Error cont={errors.lastName}/>

          <Field name="email" type="email" /> <br />
          <Error cont={errors.email}/>
          <DateTimeList lti={a}/>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>);
};

const Error = ({cont}: { cont?: string }) => {
  if (cont)
    return (<div style={{ color: "red", fontSize: 10 }}>{cont}</div>)
  else
    return null
}