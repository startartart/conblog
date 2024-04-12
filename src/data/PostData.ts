export type PostDataType = {
  id: number;
  fileName: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  titleImage: string;
};

export const PostData = [
  {
    id: 1,
    fileName:
      '[1주차 - Day1] Markdown 작성법을 기반으로 문서 정리법 특강, 버전관리',
    title: 'Markdown 작성법을 기반으로 문서 정리법 특강, 버전관리',
    author: '박병권',
    date: '20240408',
    tags: ['프로그래머스 데브코스', '1주차', '시작'],
    titleImage: 'none',
  },
  {
    id: 2,
    fileName: '[1주차 - Day2] Git 기본 이론',
    title: 'Git 기본 이론',
    author: '박병권',
    date: '20240409',
    tags: ['프로그래머스 데브코스', '1주차'],
    titleImage: 'none',
  },
  {
    id: 3,
    fileName: '[1주차 - Day4] Github을 활용한 원격 코드 관리 기타',
    title:
      'Github을 활용한 원격 코드 관리 / Git 브랜치 전략 기반의 협업 워크 플로우',
    author: '박병권',
    date: '20240411',
    tags: ['프로그래머스 데브코스', '1주차'],
    titleImage: 'none',
  },
  {
    id: 4,
    fileName: '[1주차 - Day5] Github 고급',
    title: 'Github 고급',
    author: '박병권',
    date: '20240412',
    tags: ['프로그래머스 데브코스', '1주차'],
    titleImage: 'none',
  },
];
