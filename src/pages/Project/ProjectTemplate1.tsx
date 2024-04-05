import styled from 'styled-components';
import useCurrentMedia from '../../hooks/useCurrentMedia';

type BoxProps = {
  $width: string;
};

export default function ProjectTemplate1() {
  const value = useCurrentMedia({ method: 'template' });
  const width = typeof value === 'string' ? value : '';

  return (
    <Layout>
      <BoxWrapper>
        <ImageBox $width={width}>
          <Image src=" https://source.unsplash.com/random/?seoul" />
        </ImageBox>
        <ContentBox $width={width}>Content 1</ContentBox>
      </BoxWrapper>
      <BoxWrapper>
        <ContentBox $width={width}>Content 2</ContentBox>
        <ImageBox $width={width}>
          <Image src=" https://source.unsplash.com/random/?seoul" />
        </ImageBox>
      </BoxWrapper>
      <BoxWrapper>
        <ContentBox $width={width}>Content 3</ContentBox>
        <ImageBox $width={width}>
          <Image src=" https://source.unsplash.com/random/?seoul" />
        </ImageBox>
      </BoxWrapper>
      <BoxWrapper>
        <ContentBox $width={width}>Content 4</ContentBox>
        <ImageBox $width={width}>
          <Image src=" https://source.unsplash.com/random/?seoul" />
        </ImageBox>
      </BoxWrapper>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const ImageBox = styled.div<BoxProps>`
  width: ${(props) => props.$width};
  height: calc(${(props) => props.$width} / 1.5);
  border: 1px solid;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentBox = styled.div<BoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$width};
  border: 1px solid;
`;
