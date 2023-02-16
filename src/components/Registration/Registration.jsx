import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Button } from '../Button/Button';

const schema = Yup.object().shape({
  name: Yup.string().min(1).max(12).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(12).required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        username: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
        <Form autoComplete="off">
          <h2 className="title">Please register</h2>
          <label className="formLabel">
            <span className="labelTitle">Name:</span>
            <Field className="inputTag" type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label className="formLabel">
            <span className="labelTitle">E-mail:</span>
            <Field className="inputTag" type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label className="formLabel">
            <span className="labelTitle">Password:</span>
            <Field className="inputTag" type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </label>
          <Button title="Create account" type="submit" />
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationForm;

