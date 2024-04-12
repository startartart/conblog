import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import { useLocation } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import './github-markdown.css';

export default function Post() {
  const { state } = useLocation();
  const [mark, setMark] = useState('');

  useEffect(() => {
    import(`./markdown/${state[1]}.md`)
      .then((module) => module.default)
      .then((markdown) => {
        setMark(markdown);
      })
      .catch((error) => {
        console.error('Error loading Markdown file:', error);
      });
  }, []);

  return (
    <Markdown className="markdown-body" rehypePlugins={[rehypeRaw, remarkGfm]}>
      {mark}
    </Markdown>
  );
}
