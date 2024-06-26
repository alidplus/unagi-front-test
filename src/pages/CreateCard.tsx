import { Formik } from 'formik';
import { useCallback, useState } from 'react';
import { Field } from '../components/Field';
import { Box, Form, PrimaryBtn } from '../components/styled';
import { PlayerSchema } from '../lib/player';
import { TPlayer } from '../types';
import { isSuccessSaveCard, saveCard } from '../lib/api';
import { ErrorMessage } from '../components/styled/Message';

const initialValues: TPlayer = {
  firstname: '',
  lastname: '',
  birthday: '',
  image: '',
};

/**
 * Step 3: Render a form and everything needed to be able to create a card
 */
export function CreateCard() {
  const [error, setError] = useState<string | undefined>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = useCallback(async (values, { setSubmitting }) => {
    const res = await saveCard(values);
    if (isSuccessSaveCard(res)) {
      setSubmitted(true);
    } else {
      setError(res.error);
    }
    console.log({ res });

    setSubmitting(false);
  }, []);

  return (
    <Box vertical justify="center" margin="lg">
      <Formik
        initialValues={initialValues}
        validationSchema={PlayerSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              label="First Name"
              name="firstname"
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstname}
              errors={errors.firstname}
              touched={touched.firstname}
            />

            <Field
              label="Last Name"
              name="lastname"
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastname}
              errors={errors.lastname}
              touched={touched.lastname}
            />

            <Field
              label="Birthday"
              type="date"
              name="birthday"
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.birthday}
              errors={errors.birthday}
              touched={touched.birthday}
            />

            <Field
              label="Image"
              name="image"
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
              errors={errors.image}
              touched={touched.image}
            />

            <PrimaryBtn type="submit" disabled={isSubmitting || submitted}>
              Submit
            </PrimaryBtn>
            {error ? <ErrorMessage>{error}</ErrorMessage> : null}
          </Form>
        )}
      </Formik>
    </Box>
  );
}
