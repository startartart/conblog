import styled from 'styled-components';
import Text from '../Text/Text';
import SlideArrow from '../Arrow/SlideArrow';
import { FooterProps } from './Footer.types';
import useCurrentMedia from '../../hooks/useCurrentMedia';

export default function Footer({ $show, onClick }: FooterProps) {
  const value = useCurrentMedia({ method: 'device' });
  const type = typeof value === 'string' ? value : '';

  return (
    <Layout onClick={onClick} $show={$show}>
      <SlideArrow fill="#bfbfbf" $reverse={type === 'desktop'} />
      {type === 'mobile' && (
        <Text $fontSize="1.5rem" $color="#bfbfbf">
          Slide for information.
        </Text>
      )}
      {type === 'desktop' && (
        <Text $fontSize="1.5rem" $color="#bfbfbf">
          Scroll for information.
        </Text>
      )}
    </Layout>
  );
}

const Layout = styled.div<FooterProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  z-index: 10;
  gap: 1.5%;

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      z-index: 0;
    }
  }

  ${(props) =>
    props.$show === false
      ? `animation: fadeOut 0.5s ease-in-out forwards;`
      : `animation: fadeIn 1s ease-in-out forwards;`}
`;
