import styled from 'styled-components';
import { Link } from 'react-router-dom';

type TextProps = {
  $isInComplete?: boolean;
};

type BarProps = {
  $direction: 'left' | 'right';
};

export default function Home() {
  return (
    <Layout>
      <Title>
        <LargeText>Home</LargeText>
      </Title>
      <Box>
        <StyleLink to="projects">
          <Bar $direction="left" />
          <Bar $direction="right" />
          <SmallText>Projects</SmallText>
        </StyleLink>
        <StyleLink to="https://github.com/startartart">
          <Bar $direction="left" />
          <Bar $direction="right" />
          <SmallText>Github</SmallText>
        </StyleLink>
        <StyleLink to="/">
          <SmallText $isInComplete={true}>Posts</SmallText>
        </StyleLink>
      </Box>
    </Layout>
  );
}

const StyleLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  position: relative;
  text-align: center;
  transition: color 0.5s;
  color: black;
  user-select: none;
  &:hover {
    color: #bfbfbf;
  }
`;

const Layout = styled.div`
  width: 100vw;
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

const LargeText = styled.h1`
  font-size: 5rem;
`;

const SmallText = styled.h5<TextProps>`
  font-size: 2.5rem;
  text-decoration: ${(props) =>
    props.$isInComplete ? 'line-through' : 'none'};
`;

const Bar = styled.div<BarProps>`
  position: absolute;
  width: 20%;
  height: 8%;
  top: 46%;
  background-color: black;
  ${(props) =>
    props.$direction === 'left'
      ? {
          left: '-50%',
        }
      : { right: '-50%' }}
`;
