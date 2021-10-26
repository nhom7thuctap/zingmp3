import { FastField, Form, Formik } from 'formik';
import { FormGroup, Button } from 'reactstrap';
import { MUSIC_CATEGORY_OPTIONS } from '../../../constants/global';
import InputField from '../../custom-fields/InputField';
import SelectField from '../../custom-fields/SelectField';
import './signupForm.scss';

function SignupForm(props) {
  const initialValues = {};
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log('submit: ', values)}
    >
      {(formikProps) => {
        const { values, error, touched } = formikProps;
        console.log({ values, error, touched });

        return (
          <Form>
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
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What is your category music?"
              options={MUSIC_CATEGORY_OPTIONS}
            ></FastField>
            <FormGroup>
              <Button className="submit" type="submit" color="secondary">
                Submit
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignupForm;
