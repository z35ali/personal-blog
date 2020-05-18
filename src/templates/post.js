import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDetails from '../components/PostDetails'
import SEO from '../components/SEO'
import '../css/post.css'
import SearchPosts from '../components/SearchPosts'
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share'
import styled from '@emotion/styled'

const PostWrapper = styled.section`
  margin: 0 auto auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 2em 1.5em 2em;
  flex-grow: 1;
`

const PostTemplate = ({ data, pageContext, location }) => {
  const {
    title,
    metaDescription,
    heroImage,
    body,
    publishDate,
    tags
  } = data.contentfulPost

  const previous = pageContext.prev
  const next = pageContext.next
  const { basePath } = pageContext
  const shareTitle = `Check out this post on ${location.origin}`

  let ogImage
  try {
    ogImage = heroImage.ogimg.src
  } catch (error) {
    ogImage = null
  }

  return (
    <Layout>
      <SEO
        title={title}
        description={
          metaDescription
            ? metaDescription.internal.content
            : body.childMarkdownRemark.excerpt
        }
        image={ogImage}
      />
      <SearchPosts />
      <div>
        <Hero title={title} image={heroImage} height={'50vh'} />
        <PostWrapper>
          {tags && <TagList tags={tags} basePath={basePath} />}

          <PostDetails
            date={publishDate}
            timeToRead={body.childMarkdownRemark.timeToRead}
          />
          <div className="post-body">
            <PageBody body={body} />
          </div>
          <div className="share-post">
            <h1>Share this post!</h1>
            <div className="share-container">
              <EmailShareButton
                url={`${location.origin}${location.pathname}`}
                subject={shareTitle}
                className="share"
              >
                <EmailIcon size={40} round className="email-icon" />
              </EmailShareButton>
              <FacebookShareButton
                url={`${location.origin}${location.pathname}`}
                quote={shareTitle}
                className="share"
              >
                <FacebookIcon size={40} round />
              </FacebookShareButton>
              <TwitterShareButton
                url={`${location.origin}${location.pathname}`}
                title={shareTitle}
                className="share"
              >
                <TwitterIcon size={40} round />
              </TwitterShareButton>
              <LinkedinShareButton
                url={`${location.origin}${location.pathname}`}
                title={shareTitle}
                className="share"
              >
                <LinkedinIcon size={40} round />
              </LinkedinShareButton>
              <WhatsappShareButton
                url={`${location.origin}${location.pathname}`}
                title={shareTitle}
                className="share"
              >
                <WhatsappIcon size={40} round />
              </WhatsappShareButton>
              <RedditShareButton
                url={`${location.origin}${location.pathname}`}
                title={shareTitle}
                className="share"
              >
                <RedditIcon size={40} round className="reddit-icon" />
              </RedditShareButton>
            </div>
          </div>

          <PostLinks previous={previous} next={next} basePath={basePath} />

        </PostWrapper>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
        }
      }
      body {
        childMarkdownRemark {
          timeToRead
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PostTemplate
