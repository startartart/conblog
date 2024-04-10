import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Text from '../../components/Text/Text';
import Footer from '../../components/Footer/Footer';
import Info from './Info';

type BarProps = {
  $direction: 'left' | 'right';
};

type LayoutProps = {
  $color: string;
  $current?: boolean;
};

export default function Home() {
  const [current, setCurrent] = useState('layout1');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (layouts) => {
        layouts.forEach((layout) => {
          if (layout.isIntersecting) {
            setCurrent(layout.target.id);
            layout.target.scrollIntoView();
          }
        });
      },
      { threshold: 0.001 }
    );

    const targets = document.querySelectorAll('.layout');
    targets.forEach((target) => {
      observer.observe(target);
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <HomeLayout>
      <Layout
        id="layout1"
        className="layout"
        $color="#ffffff"
        $current={'layout1' === current}
      >
        <Title>
          <Text $fontSize="5rem" $color="#222222">
            Home
          </Text>
        </Title>
        <Box>
          <StyleLink to="/">
            <Bar $direction="left" />
            <Bar $direction="right" />
            <Text $fontSize="2.5rem" $color="#222222" $isInActive={true}>
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
            <Bar $direction="left" />
            <Bar $direction="right" />
            <Text $fontSize="2.5rem" $color="#222222" $isInActive={true}>
              Posts
            </Text>
          </StyleLink>
        </Box>
      </Layout>
      <Layout
        id="layout2"
        className="layout"
        $color="#f2f2f2"
        $current={'layout2' === current}
      >
        <Info $current={'layout2' === current}/>
      </Layout>

      <Footer $show={'layout1' === current} />
    </HomeLayout>
  );
}

const StyleLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  position: relative;
  text-align: center;
  user-select: none;
`;

const HomeLayout = styled.div`
  overflow: hidden;
`;

const Layout = styled.div<LayoutProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  transition: all 0.5s ease-out;
  position: relative;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border-radius: 5%;
  background-color: ${(props) => props.$color};
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  ${(props) => props.$current && `animation: fadeIn 1s ease-in-out;`}
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
