import styled, { css } from 'styled-components';
import { TSizes } from './theme';
import { Box } from './Box';

interface CardStyles {
  lvl?: TSizes;
  border?: TSizes;
  round?: TSizes;
  hoverable?: boolean;
}

export const Card = styled(Box)<CardStyles>((props) => [
  {
    backgroundColor: props.theme.palette.white,
    boxShadow: props.theme.level[props.lvl ?? 'sm'],
    border: props.theme.border[props.border],
    borderRadius: props.theme.radius[props.round ?? 'sm'],
    overflow: 'hidden',
    width: 300,
  },
  props.hoverable
    ? {
        transition: 'transform 100ms',
        willChange: 'transform',
        '&:hover': {
          transform: 'scale(1.04)',
        },
      }
    : {},
]);

Card.defaultProps = {
  padding: 'lg',
  round: 'md',
};

export const Image = styled.img((props) => ({}));
