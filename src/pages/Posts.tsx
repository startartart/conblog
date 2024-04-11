import Markdown from 'react-markdown';
import mark from '../../README.md';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import './github-markdown.css';

export default function Posts() {
  return (
    <Markdown className="markdown-body" rehypePlugins={[rehypeRaw, remarkGfm]}>
      {mark}
    </Markdown>
  );
}
