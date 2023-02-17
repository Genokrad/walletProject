import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import sprite from '../../iconsSprite/icons.svg';
import {
  Container,
  Label,
  Input,
  ErrorMsg,
  Svg,
  Btn,
} from './Registration.styled';
import { Notify } from 'notiflix';

const schema = Yup.object().shape({
  name: Yup.string().min(1).max(12).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(12).required(),
  cpassword: Yup.string()
    .min(6)
    .max(12)
    .oneOf(
      [Yup.ref('password'), null],
      'Confirm password must be one of the following password'
    )
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
    )
      .unwrap()
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
            <Label className="formLabel">
              <Input
                className="inputTag"
                type="password"
                name="cpassword"
                placeholder="Confirm password:"
              />
              <Svg width="24" height="24">
                <use
                  href={sprite + '#icon-password'}
                  width="24"
                  height="24"
                ></use>
              </Svg>
              <ErrorMsg name="cpassword" component="div" />
            </Label>
            <Label className="formLabel">
              <Input
                className="inputTag"
                type="text"
                name="name"
                placeholder="Name:"
              />
              <Svg width="24" height="24">
                <use href={sprite + '#icon-name'} width="24" height="24"></use>
              </Svg>
              <ErrorMsg name="name" component="div" />
            </Label>
            <Btn title="Create account" type="submit">
              Create account
            </Btn>
          </Container>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
