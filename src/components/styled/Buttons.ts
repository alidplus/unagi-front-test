import styled from 'styled-components';

const ButtonBase = styled.button((props) => ({
  padding: props.theme.space.md,
}));

export const PrimaryBtn = styled(ButtonBase)((props) => ({
  backgroundColor: props.theme.palette.primary,
  color: props.theme.palette.white,
  borderRadius: props.theme.radius.sm,
}));
