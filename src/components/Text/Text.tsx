import styled from 'styled-components';
import { Props } from './Text.types';

export default function Text({
  $fontSize = '1rem',
  $color = '#222222',
  $hoverColor,
  $isInActive,
  children,
}: Props) {
  return (
    <StyledText
      $fontSize={$fontSize}
      $color={$color}
      $hoverColor={$hoverColor}
      $isInActive={$isInActive}
    >
      {children}
    </StyledText>
  );
}

const StyledText = styled.p<Props>`
  font-size: ${(props) => props.$fontSize};
  color: ${(props) => props.$color};
  text-decoration: ${(props) => (props.$isInActive ? 'line-through' : 'none')};
  transition: color 0.5s;
  &:hover {
    color: ${(props) => props.$hoverColor};
  }
`;
