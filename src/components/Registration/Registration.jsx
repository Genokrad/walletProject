import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '../Button/Button';
import { Notify } from 'notiflix';

const schema = Yup.object().shape({
  name: Yup.string().min(1).max(12).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(12).required(),
  cpassword: Yup.string()
    .min(6)
    .max(12)
    .oneOf([Yup.ref('password'), null], 'Confirm password must be one of the following password')
    .required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  cpassword: '',
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
    ).unwrap()
      .then(() => {
        Notify.success('Create user succesfully');
      })
      .catch(() => {
        Notify.failure(
          `Ops... Something was wrong, check your data for correctness`
        );
      });
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {() => (
          <Form>
            <label className="formLabel">
              <Field
                className="inputTag"
                type="email"
                name="email"
                placeholder="E-mail:"
              />
              <ErrorMessage name="email" component="div" />
            </label>
            <label className="formLabel">
              <Field
                className="inputTag"
                type="password"
                name="password"
                placeholder="Password:"
              />
              <ErrorMessage name="password" component="div" />
            </label>
            <label className="formLabel">
              <Field
                className="inputTag"
                type="password"
                name="cpassword"
                placeholder="Confirm password:"
              />
              <ErrorMessage name="cpassword" component="div" />
            </label>
            <label className="formLabel">
              <Field
                className="inputTag"
                type="text"
                name="name"
                placeholder="Name:"
              />
              <ErrorMessage name="name" component="div" />
            </label>
            <Button title="Create account" type="submit" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;

