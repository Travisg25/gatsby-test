import React, { useRef, useEffect } from 'react';
import styles from './Articles.module.scss';

type Props = {
  title?: string,
  children: React.Node
};

const Article = ({ title, children }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div>
      {children}
    </div>
  );
};

export default Article;