import Text from '../../components/Text/Text';
import styled from 'styled-components';
import useCurrentMedia from '../../hooks/useCurrentMedia';
import Email from '../../assets/email.svg?react';
import Code from '../../assets/code.svg?react';
import Layer from '../../assets/layer.svg?react';
import Human from '../../assets/human.svg?react';

type Intro = {
  $img?: string;
};

export default function Introduce1() {
  const value = useCurrentMedia({ method: 'device' });
  const type = typeof value === 'string' ? value : '';

  return (
    <>
      <Layout>
        <ContentBox>
          <Human width={'2rem'} />
          <Text $fontSize="2rem" $color="#222222">
            박병권 | 1999. 03. 04
          </Text>
        </ContentBox>

        <ContentBox>
          <Layer width={'2rem'} />
          <Text $fontSize="2rem" $color="#222222">
            Frontend Developer
          </Text>
        </ContentBox>

        <ContentBox>
          <Code width={'2rem'} />
          <Text $fontSize="2rem" $color="#222222">
            JS React Cpp Python
          </Text>
        </ContentBox>

        <ContentBox>
          <Email width={'2rem'} />
          <Text $fontSize="2rem" $color="#222222">
            startartart@naver.com
          </Text>
        </ContentBox>
        <ContentBox></ContentBox>
      </Layout>
      {type === 'desktop' && <Layout $img={'/assets/images/me.jpeg'}></Layout>}
    </>
  );
}

const Layout = styled.div<Intro>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  height: 60%;
  margin: 1rem;
  ${(props) =>
    props.$img &&
    `
    background-image: url(${props.$img});
    background-size: 100%;
    border-radius: 5%;
  `}
`;

const ContentBox = styled.div`
  display: flex;

  gap: 1.5rem;
`;
