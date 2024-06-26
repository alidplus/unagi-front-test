import styled from 'styled-components';
import { Card } from './Card';

export const ControlBar = styled(Card)((props) => ({
  width: '100%',
}));

ControlBar.defaultProps = {
  padding: 'lg',
  vertical: true,
};
