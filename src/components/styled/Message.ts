import styled from 'styled-components';
import { Box } from './Box';
import { TSizes } from './theme';

export const ErrorMessage = styled(Box)((props) => ({
  padding: props.theme.space.lg,
  color: props.theme.palette.secondary,
  borderRadius: props.theme.radius.sm,
  border: props.theme.border.sm,
  borderColor: props.theme.palette.secondary,
}));
