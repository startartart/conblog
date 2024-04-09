import styled from 'styled-components';
import Arrow from '../../assets/arrow.svg?react';
import { SlideArrowProps } from './Arrow.types';

export default function SlideArrow({ fill = '#bfbfbf' }: SlideArrowProps) {
  return <StyledArrow fill={fill} />;
}

const StyledArrow = styled(Arrow)`
  width: 100%;
  height: 15%;
  transition: all 1s;
  transform: translateY(0px);
  &:hover {
    transform: translateY(-20px);
  }
`;
