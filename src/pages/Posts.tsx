import styled from 'styled-components';
import Header from '../components/Header/Header';
import PostContainer from './Post/\bPostContainer';
import { PostData } from '../data/PostData';
import { useNavigate } from 'react-router-dom';
import { countTags } from '../utils/countTags';

export default function Posts() {
  const navigate = useNavigate();
  const tags = countTags(PostData);

  const goPostPage = (id: number, fileName: string, title: string) => {
    navigate(`/post/${title}`, { state: [id, fileName, title] });
  };

  return (
    <Layout>
      <Header title="Posts" />
      <MainLayout>
        {/* 여기는 tagLayout - Mobile은 따로 */}
        <TagsLayout>
          {Object.keys(tags).map((tag) => (
            <Tag key={tag}>
              {tag} ({tags[tag]})
            </Tag>
          ))}
        </TagsLayout>

        {/* 여기는 PostContentLayout - Post 클릭해서 볼 수 있음. */}
        <PostContentLayout>
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
                titleImage={post.titleImage}
                onClick={goPostPage}
              />
            );
          })}
        </PostContentLayout>
      </MainLayout>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainLayout = styled.div`
  display: flex;
  margin: 1rem;
`;

const TagsLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  padding: 1rem;
  gap: 1rem;
`;

const PostContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  padding: 1rem;
  gap: 2rem;
`;

const Tag = styled.div`
  font-size: 0.75rem;
`;
