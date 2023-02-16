import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '../Button/Button';
import { Notify } from 'notiflix';
import { Container, Label, Input, ErrorMsg, Svg } from './Login.styled';
import sprite from '../../iconsSprite/icons.svg';

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(12).required(),
});
const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        Notify.success('Login user succesfully');
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
        <Container>
          <Label className="formLabel">
            <Input
              className="inputTag"
              type="email"
              name="email"
              placeholder="E-mail:"
            />
            <Svg width="24" height="24">
              <use href={sprite + '#icon-email'} width="24" height="24"></use>
            </Svg>
            <ErrorMsg name="email" component="div" />
          </Label>
          <Label className="formLabel">
            <Input
              className="inputTag"
              type="password"
              name="password"
              placeholder="Password:"
            />
            <Svg width="24" height="24">
              <use
                href={sprite + '#icon-password'}
                width="24"
                height="24"
              ></use>
            </Svg>
            <ErrorMsg name="password" component="div" />
          </Label>
          <Button title="Log in" type="submit" />
        </Container>
      </Formik>
    </>
  );
};
