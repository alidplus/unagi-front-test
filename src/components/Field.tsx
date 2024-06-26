import { ComponentProps, forwardRef } from 'react';
import { Box, Input, Label } from './styled';
import { FormikErrors } from 'formik';
import { ErrorMessage } from './styled/Message';

interface FieldProps extends ComponentProps<typeof Input> {
  label: string;
  touched?: boolean;
  errors?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
}

export const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ label, errors, touched, ...props }, ref) => {
    return (
      <Box>
        <Label>{label}</Label>
        <Input ref={ref} {...props} />
        {errors && touched ? (
          <ErrorMessage inline>{errors}</ErrorMessage>
        ) : null}
      </Box>
    );
  }
);
