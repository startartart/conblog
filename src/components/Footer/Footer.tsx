import styled from 'styled-components';
import Text from '../Text/Text';
import SlideArrow from '../Arrow/SlideArrow';

export default function Footer() {
  return (
    <Layout>
      <SlideArrow fill="#bfbfbf" />
      <Text $fontSize="1.5rem" $color="#bfbfbf">
        Slide it!
      </Text>
    </Layout>
  );
}

const Layout = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 75%;
  width: 100%;
  height: 100%;
`;
