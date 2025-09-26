import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledPostContainer = styled.main`
  max-width: 1000px;
`;
const StyledPostHeader = styled.header`
  margin-bottom: 50px;
  .tag {
    margin-right: 10px;
  }
`;
const StyledPostContent = styled.div`
  margin-bottom: 100px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
    color: var(--light-slate);
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  code {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
    border-radius: var(--border-radius);
    font-size: var(--fz-sm);
    padding: 0.2em 0.4em;
  }

  pre code {
    background-color: transparent;
    padding: 0;
  }
`;

const PostTemplate = ({ location }) => {
  // Template disabled - markdown processing removed
  return (
    <Layout location={location}>
      <Helmet title="Post Not Found" />
      <StyledPostContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/pensieve">All memories</Link>
        </span>
        <StyledPostHeader>
          <h1 className="medium-heading">Post Not Available</h1>
          <p className="subtitle">Blog posts are currently disabled.</p>
        </StyledPostHeader>
        <StyledPostContent>
          <p>The blog functionality has been temporarily disabled to resolve build issues.</p>
        </StyledPostContent>
      </StyledPostContainer>
    </Layout>
  );
};

export default PostTemplate;

PostTemplate.propTypes = {
  location: PropTypes.object,
};

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $path } }) {
//       html
//       frontmatter {
//         title
//         description
//         date
//         slug
//         tags
//       }
//     }
//   }
// `;
