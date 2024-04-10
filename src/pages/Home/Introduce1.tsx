import Text from '../../components/Text/Text';
import styled from 'styled-components';
import useCurrentMedia from '../../hooks/useCurrentMedia';

type Intro = {
  $img?: string;
};

export default function Introduce1() {
  const value = useCurrentMedia({ method: 'device' });
  const type = typeof value === 'string' ? value : '';

  return (
    <>
      <Layout>
        <Text $fontSize="3.5rem" $color="#222222">
          Name: 박병권
        </Text>
        <Text $fontSize="3.5rem" $color="#222222">
          Birth: 1999. 03. 04
        </Text>
        <Text $fontSize="3.5rem" $color="#222222">
          Tech: Develop FE
        </Text>
        <Text $fontSize="3.5rem" $color="#222222">
          Email: startartart@naver.com
        </Text>
      </Layout>
      {type === 'desktop' && <Layout $img={'/assets/images/me.jpeg'}></Layout>}
    </>
  );
}

const Layout = styled.div<Intro>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
