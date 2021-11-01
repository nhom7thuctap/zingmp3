import { FastField, Form, Formik } from 'formik';
import { FormGroup, Button, Spinner } from 'reactstrap';
import { MUSIC_CATEGORY_OPTIONS } from '../../../constants/global';
import InputField from '../../custom-fields/InputField';
import SelectField from '../../custom-fields/SelectField';
import './signupForm.scss';
import * as Yup from 'yup';

function SignupForm(props) {
  const { initialValues, isAddMode } = props;

  console.log('initialvalue props: ', initialValues);
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('This field this required.'),
    email: Yup.string()
      .email('Email is invalid')
      .required('This field is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('This field is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('This field is required'),
    categoryId: Yup.string().required('This field this required.').nullable(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { isSubmitting } = formikProps;

        return (
          <Form className="form">
            <FastField
              name="username"
              component={InputField}
              label="Username"
              placeholder="Enter your username.."
            ></FastField>

            <FastField
              name="email"
              component={InputField}
              label="Email"
              placeholder="Enter your email.."
            ></FastField>

            <FastField
              type="password"
              name="password"
              component={InputField}
              label="Password"
              placeholder="Enter your password.."
            ></FastField>

            <FastField
              type="password"
              name="confirmPassword"
              component={InputField}
              label="Confirm Password"
              placeholder="Confirm your password.."
            ></FastField>

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What is your category music?"
              options={MUSIC_CATEGORY_OPTIONS}
            ></FastField>
            <FormGroup className="btn-wrapper">
              <Button className="btn reset" type="reset" color="danger">
                Reset
              </Button>
              <Button type="submit" color="primary">
                {isAddMode ? 'Register' : 'Edit'}
                {isSubmitting && <Spinner size="sm" />}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignupForm;
