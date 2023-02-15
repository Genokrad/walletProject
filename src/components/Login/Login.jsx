import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Button } from '../Button/Button';
const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(12).required(),
});
const initialValues = {
  email:'',
  password: '',
}

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      login({
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
          <h2 className="title">Please log in</h2>
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
          <Button title="Log in" type="submit" />
        </Form>
      </Formik>
    </>
  );
};
