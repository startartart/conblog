import styled from 'styled-components';
import { PostContainerProps } from './Post.types';
import Text from '../../components/Text/Text';

export default function PostContainer({
  id,
  fileName,
  title,
  author,
  date,
  tags,
  isPhone,
  titleImage,
  onClick,
}: PostContainerProps) {
  const [f1, f2, f3] = isPhone
    ? ['1.375rem', '1.125rem', '1rem']
    : ['1.5rem', '1.25rem', '1rem'];

  return (
    <Container onClick={() => onClick(id, fileName, title)}>
      <ContentContainer $isPhone={isPhone}>
        <Text $fontSize={f1} $lineHeight={1.15}>
          {title}
        </Text>
        <ContentBottomContainer>
          <ContentBottomRowContainer>
            <Text $fontSize={f3} $color="#8c8c8c" $margin="1rem">
              author - {author}
            </Text>
            <Text $fontSize={f3} $color="#8c8c8c">
              date: {date}
            </Text>
          </ContentBottomRowContainer>
          <ContentBottomRowContainer>
            {tags?.map((tag, id) => {
              return (
                <Text key={id} $fontSize={f2} $color="#262626" $margin={f3}>
                  #{tag}
                </Text>
              );
            })}
          </ContentBottomRowContainer>
        </ContentBottomContainer>
      </ContentContainer>
      {!isPhone && (
        <ImageContainer>
          {titleImage === 'none' ? 'None' : <Image src={titleImage} />}
        </ImageContainer>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 10rem;
  /* box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px; */
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    background-color: #f2f2f2;
    transform: scale(1.01);
  }
`;

const ContentContainer = styled.div<{ $isPhone: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => (props.$isPhone ? '100%' : '70%')};
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: ${(props) => (props.$isPhone ? '1rem' : '2%')};
`;

const ContentBottomContainer = styled.div``;

const ContentBottomRowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
`;
