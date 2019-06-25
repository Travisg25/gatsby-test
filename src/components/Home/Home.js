import React, { useRef, useEffect } from 'react';
// import styles from './Page.module.scss';

type Props = {
  title?: string,
  children: React.Node
};

const Home = ({ title, children }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef} className={styles['']}>
      {children}
    </div>
  );
};

export default Home;