// @flow
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
// import Sidebar from '../components/Sidebar';
// import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark, PageContext, AllMarkdownRemark } from '../types';
import Feed from '../components/Feed';

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext
};

const HomeTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  // const { html: pageBody } = data.markdownRemark;
  const { title: pageTitle, description: pageDescription } = data.markdownRemark.frontmatter;
  const metaDescription = pageDescription !== null ? pageDescription : siteSubtitle;
  const { edges } = data.allMarkdownRemark;

  return (
    <div>
      <Feed edges={edges} />
      <h1>Testing my home page</h1>
    </div>


  );
};


export default HomeTemplate;
