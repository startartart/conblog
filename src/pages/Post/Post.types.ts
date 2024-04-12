export type PostContainerProps = {
  id: number;
  fileName: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  isPhone: boolean;
  titleImage?: string;
  onClick: (id: number, fileName: string, title: string) => void;
};
