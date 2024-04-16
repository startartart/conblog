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
  titleImage,
  onClick,
}: PostContainerProps) {
  return (
    <Container onClick={() => onClick(id, fileName, title)}>
      <ContentContainer>
        <Text $fontSize="1.5rem">{title}</Text>
        <ContentBottomContainer>
          <ContentBottomRowContainer>
            <Text $fontSize="1.25rem">author: {author}</Text>
            <Text $fontSize="1.25rem">date: {date}</Text>
          </ContentBottomRowContainer>
          <ContentBottomRowContainer>
            {tags?.map((tag, id) => {
              return (
                <Text key={id} $fontSize="1rem">
                  #{tag}
                </Text>
              );
            })}
          </ContentBottomRowContainer>
        </ContentBottomContainer>
      </ContentContainer>
      <ImageContainer>{titleImage === 'none' && 'None'}</ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 10rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: 2%;
`;

const ContentBottomContainer = styled.div``;

const ContentBottomRowContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const ImageContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
