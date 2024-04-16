import styled from 'styled-components';
import Header from '../components/Header/Header';
import { useState, ChangeEvent, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useCurrentMedia from '../hooks/useCurrentMedia';
import SearchSvg from '../assets/search.svg?react';
import PostContainer from './Post/PostContainer';
import { PostData } from '../data/PostData';

export default function Search() {
  const { state } = useLocation();
  const [input, setInput] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  const value = useCurrentMedia({ method: 'row' });
  const isPhone = value === 1 ? true : false;

  const goPostPage = (id: number, fileName: string, title: string) => {
    navigate(`/post/${title}`, { state: [id, fileName, title] });
  };

  const navigate = useNavigate();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (state !== null) setInput(state);
    const queryParams = new URLSearchParams();
    queryParams.set('query', input);
    navigate(`?q=${input}`);

    ref.current?.focus();
  }, [input, navigate, state]);

  const dataList =
    input.trim() === ''
      ? []
      : PostData.filter(
          (post) =>
            post.fileName.toLowerCase().includes(input.toLowerCase()) ||
            post.title.toLowerCase().includes(input.toLowerCase()) ||
            post.tags.some((tag) =>
              tag.toLowerCase().includes(input.toLowerCase())
            )
        );

  return (
    <Layout>
      <Header title="Search" />
      <SearchLayout>
        <InputLayout>
          <SearchSvg width={'2.5rem'} fill="#858585" />
          <Input value={input} onChange={handleChangeInput} ref={ref} />
        </InputLayout>
      </SearchLayout>
      <ResultLayout $isPhone={isPhone}>
        {dataList.map((data) => {
          return (
            <PostContainer
              key={data.id}
              id={data.id}
              fileName={data.fileName}
              title={data.title}
              author={data.author}
              date={data.date}
              tags={data.tags}
              isPhone={isPhone}
              titleImage={data.titleImage}
              onClick={goPostPage}
            />
          );
        })}
      </ResultLayout>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #f9f9f9; */
`;

const SearchLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  border: 1px solid;
  margin: 2rem auto;
  padding: 1rem;
`;

const InputLayout = styled.div`
  display: flex;
  width: 100%;
  height: 2.5rem;
  gap: 1rem;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 2rem;
  outline: none;
`;

const ResultLayout = styled.div<{ $isPhone: boolean }>`
  width: ${(props) => (props.$isPhone ? '100%' : '70%')};
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
