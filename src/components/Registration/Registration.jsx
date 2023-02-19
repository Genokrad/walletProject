import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import { Formik } from 'formik';
import { Notify } from 'notiflix';
import { useState } from 'react';
import * as Yup from 'yup';
import sprite from '../../iconsSprite/icons.svg';
import css from './Registration.module.css';
import {
  Container,
  Label,
  Input,
  ErrorMsg,
  Svg,
  Btn,
  Line,
} from './Registration.styled';

const schema = Yup.object().shape({
  name: Yup.string().min(1).max(12).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(12).required(),
  confirmation: Yup.string()
    .min(6)
    .max(12)
    .oneOf([Yup.ref('password'), null], 'confirmation must be same password')
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
  const [strength, setStrength] = useState('empty');
  const [cpassword, setCpassword] = useState('');

  const handleChange = value => {
    const checkValue = (value !== undefined)

    if (checkValue) setCpassword(value);

    let score = 0;
    if (checkValue && value.length >= 6) {
      score += 1;
    }
    if (checkValue && (value.match(/[A-Z]/g) || []).length >= 1) {
      score += 1;
    }
    if (checkValue && (value.match(/[0-9]/g) || []).length >= 1) {
      score += 1;
    }

    switch (score) {
      case 0:
        setStrength('empty');
        break;
      case 1:
        setStrength('easy');
        break;
      case 2:
        setStrength('average');
        break;
      case 3:
        setStrength('difficult');
        break;
      default:
        break;
    }
  };

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
            <Label>
              <Input type="email" name="email" placeholder="E-mail:" />
              <Svg width="24" height="24">
                <use href={sprite + '#icon-email'} width="24" height="24"></use>
              </Svg>
              <ErrorMsg name="email" component="div" />
            </Label>
            <Label>
              <Input type="password" name="password" placeholder="Password:" />
              <Svg width="24" height="24">
                <use
                  href={sprite + '#icon-password'}
                  width="24"
                  height="24"
                ></use>
              </Svg>
              <ErrorMsg name="password" component="div" />
            </Label>
            <Label>
              <Input
                type="password"
                name="confirmation"
                placeholder="Confirm password:"
                value={cpassword}
                validate={handleChange}
              />
              <Svg width="24" height="24">
                <use
                  href={sprite + '#icon-password'}
                  width="24"
                  height="24"
                ></use>
              </Svg>
              <Line>
                <div className={css[strength]} />
              </Line>
              <ErrorMsg name="confirmation" component="div" />
            </Label>
            <Label>
              <Input type="text" name="name" placeholder="Name:" />
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
