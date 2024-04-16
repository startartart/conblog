import styled from 'styled-components';
import { Props } from './Text.types';

export default function Text({
  $fontSize = '1rem',
  $color = '#222222',
  $hoverColor,
  $isInActive,
  $lineHeight = 1,
  $margin = '0',
  children,
}: Props) {
  return (
    <StyledText
      $fontSize={$fontSize}
      $color={$color}
      $hoverColor={$hoverColor}
      $isInActive={$isInActive}
      $lineHeight={$lineHeight}
      $margin={$margin}
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
  line-height: ${(props) => props.$lineHeight};

  margin-right: ${(props) => props.$margin};
  &:hover {
    color: ${(props) => props.$hoverColor};
  }
`;
