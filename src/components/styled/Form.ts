import styled from 'styled-components';
import { TExtendedSizes } from './theme';
import { Field } from 'formik';

interface FormStyles {
  padding?: TExtendedSizes;
  margin?: TExtendedSizes;
}

export const Form = styled.form<FormStyles>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: props.theme.space[props.padding],
  margin: props.theme.space[props.margin],
  gap: props.theme.space.lg,
}));

export const Input = styled(Field)((props) => ({
  border: props.theme.border.sm,
  borderRadius: props.theme.radius.sm,
  padding: props.theme.space.md,
}));

export const Radio = styled.input(
  (props) => ({
    border: props.theme.border.sm,
    borderRadius: props.theme.radius.sm,
    padding: props.theme.space.md,
  }),
  { type: 'radio ' }
);

export const Label = styled.label((props) => ({
  fontWeight: 'bold',
}));
