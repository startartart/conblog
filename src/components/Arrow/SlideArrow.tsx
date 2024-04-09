import styled, { keyframes } from 'styled-components';
import Arrow from '../../assets/arrow.svg?react';
import { SlideArrowProps } from './Arrow.types';

export default function SlideArrow({
  fill = '#bfbfbf',
  $reverse = true,
}: SlideArrowProps) {
  return (
    <ArrowBox $reverse={$reverse}>
      <StyledArrow fill={fill} />
    </ArrowBox>
  );
}

const bounce = keyframes`
  0% {transform: translateY(0);}
  50% {transform: translateY(-10%);}
  10% {transform: translateY(0);}
`;

const ArrowBox = styled.div<SlideArrowProps>`
  width: 100%;
  height: 15%;
  transform: ${(props) => (props.$reverse ? 'scaleY(-1)' : 'none')};
`;

const StyledArrow = styled(Arrow)<SlideArrowProps>`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 999;

  animation: ${bounce} 3s linear infinite;
`;
