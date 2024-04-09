import styled from 'styled-components';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../assets/arrow.svg?react';
import Text from '../components/Text/Text';

type BarProps = {
  $direction: 'left' | 'right';
};

export default function Home() {
  // const [folded, setFolded] = useState(false);

  return (
    <Layout>
      <Title>
        <Text $fontSize="5rem" $color="#222222">
          Home
        </Text>
      </Title>
      <Box>
        <StyleLink to="projects">
          <Bar $direction="left" />
          <Bar $direction="right" />
          <Text $fontSize="2.5rem" $color="#222222" $hoverColor="#bfbfbf">
            Projects
          </Text>
        </StyleLink>
        <StyleLink to="https://github.com/startartart">
          <Bar $direction="left" />
          <Bar $direction="right" />
          <Text $fontSize="2.5rem" $color="#222222" $hoverColor="#bfbfbf">
            Github
          </Text>
        </StyleLink>
        <StyleLink to="/">
          <Text $fontSize="2.5rem" $color="#222222" $isInActive={true}>
            Posts
          </Text>
        </StyleLink>
      </Box>
      <Footer>
        <SlideArrow fill="#bfbfbf" />
        <Text $fontSize="1.5rem" $color="#bfbfbf">
          Slide it!
        </Text>
      </Footer>
    </Layout>
  );
}

const StyleLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  position: relative;
  text-align: center;
  user-select: none;
`;

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const Title = styled.div`
  position: absolute;
  top: 20%;
`;

const Bar = styled.div<BarProps>`
  position: absolute;
  width: 20%;
  height: 8%;
  top: 46%;
  background-color: #222222;
  ${(props) =>
    props.$direction === 'left'
      ? {
          left: '-50%',
        }
      : { right: '-50%' }}
`;

const Footer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 75%;
  width: 100%;
  height: 100%;
`;

const SlideArrow = styled(Arrow)`
  width: 100%;
  height: 15%;
  transition: all 1s;
  transform: translateY(0px);
  &:hover {
    transform: translateY(-20px);
  }
`;
