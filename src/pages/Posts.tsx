import styled from 'styled-components';
import Header from '../components/Header/Header';

export default function Posts() {
  return (
    <Layout>
      <Header title="Posts" />
      <MainLayout>
        {/* 여기는 tagLayout - Mobile은 따로 */}
        <TagsLayout>TagsLayout</TagsLayout>

        {/* 여기는 PostContentLayout - Post 클릭해서 볼 수 있음. */}
        <PostContentLayout> PostContentLayout</PostContentLayout>
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
`;

const TagsLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
`;

const PostContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`;
