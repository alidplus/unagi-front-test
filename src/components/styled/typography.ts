import styled, { css } from 'styled-components';

interface TitleProps {
  align?: 'center' | 'right' | 'left';
}

export const Title = styled.h1<TitleProps>((props) => ({
  textAlign: props.align ?? `center`,
  marginTop: props.theme.space.lg,
  marginBottom: props.theme.space.lg,
}));

export const SubTitle = styled.h2<TitleProps>((props) => ({
  textAlign: props.align ?? `center`,
}));

export const Tag = styled.span<TitleProps>((props) => ({
  backgroundColor: props.theme.palette.attention,
  padding: props.theme.space.sm,
  borderRadius: props.theme.radius.sm,
}));
