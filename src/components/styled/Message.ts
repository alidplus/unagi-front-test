import styled from 'styled-components';
import { Box } from './Box';
import { TSizes } from './theme';

interface ErrorMessageStyles {
  inline?: boolean;
}

export const ErrorMessage = styled(Box)<ErrorMessageStyles>((props) => ({
  padding: props.inline ? props.theme.space.sm : props.theme.space.lg,
  color: props.theme.palette.secondary,
  borderRadius: props.theme.radius.sm,
  border: !props.inline ? props.theme.border.sm : undefined,
  borderColor: props.theme.palette.secondary,
}));
