import styled, { CSSProperties, css } from 'styled-components';
import { TExtendedSizes } from './theme';

interface BoxStyles {
  vertical?: boolean;
  reverse?: boolean;
  wrap?: boolean;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  padding?: TExtendedSizes;
  margin?: TExtendedSizes;
  gap?: TExtendedSizes;
}

export const Box = styled.div<BoxStyles>((props) => ({
  display: 'flex',
  flexDirection: props.vertical
    ? props.reverse
      ? 'row-reverse'
      : 'row'
    : props.reverse
    ? 'column-reverse'
    : 'column',
  alignItems: props.align,
  flexWrap: props.wrap ? 'wrap' : 'nowrap',
  justifyContent: props.justify,
  padding: props.theme.space[props.padding],
  margin: props.theme.space[props.margin],
  gap: props.theme.space[props.gap],
}));
