import { PostDataType } from '../data/PostData';

export function countTags(tagData: PostDataType[]) {
  const tagCounts: { [key: string]: number } = {};

  // 각 태그의 출현 횟수를 세기
  tagData.forEach((post: PostDataType) => {
    post.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  return tagCounts;
}
