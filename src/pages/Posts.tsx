import styled from 'styled-components';
import Header from '../components/Header/Header';
import PostContainer from './Post/\bPostContainer';
import { PostData } from '../data/PostData';
import { useNavigate } from 'react-router-dom';
import { countTags } from '../utils/countTags';
import UpArrow from '../components/Arrow/UpArrow';
import useCurrentMedia from '../hooks/useCurrentMedia';

export default function Posts() {
  const navigate = useNavigate();
  const tags = countTags(PostData);

  const value = useCurrentMedia({ method: 'row' });
  const isPhone = value === 1 ? true : false;

  const goPostPage = (id: number, fileName: string, title: string) => {
    navigate(`/post/${title}`, { state: [id, fileName, title] });
  };

  const goSearchPage = (tag: string) => {
    navigate(`/search/${tag}`);
  };

  return (
    <Layout>
      <Header title="Posts" />
      <MainLayout>
        {!isPhone && (
          <TagsLayout>
            {Object.keys(tags).map((tag) => (
              <Tag key={tag} onClick={() => goSearchPage(tag)}>
                {tag} ({tags[tag]})
              </Tag>
            ))}
          </TagsLayout>
        )}

        <PostContentLayout $isPhone={isPhone}>
          {PostData.map((post) => {
            return (
              <PostContainer
                key={post.id}
                id={post.id}
                fileName={post.fileName}
                title={post.title}
                author={post.author}
                date={post.date}
                tags={post.tags}
                isPhone={isPhone}
                titleImage={post.titleImage}
                onClick={goPostPage}
              />
            );
          })}
        </PostContentLayout>
      </MainLayout>
      <UpArrow />
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
`;

const MainLayout = styled.div`
  display: flex;
  margin: 1rem;
`;

const TagsLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 15%;
  padding: 1rem;
  gap: 1rem;
`;

const PostContentLayout = styled.div<{ $isPhone: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.$isPhone ? '100%' : '85%')};
  padding: 1rem;
  gap: 2rem;
`;

const Tag = styled.div`
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    color: #737373;
  }
`;
