require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
let contentfulConfig

try {
  contentfulConfig = {
    development: {
      host: process.env.GATSBY_HOST,
      spaceId: process.env.GATSBY_SPACE_ID,
      accessToken: process.env.GATSBY_ACCESS_TOKEN_DEV,
    },
    production: {
      spaceId: process.env.GATSBY_PROD_SPACE_ID,
      accessToken: process.env.GATSBY_ACCESS_TOKEN_PROD,
    },
  }
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
    },
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig.production
  if (!spaceId || !accessToken) {
    throw new Error('Contentful space ID and access token need to be provided.')
  }
}

module.exports = {
  siteMetadata: {
    title: 'Developing Mindset',
    description:
      "Welcome to Zafar Ali's web and self development blog! Stay tuned for posts that will help you become the best version of yourself!",
    siteUrl: 'https://developingmindset.com',
    image: '/static/images/logo_notext.png',
    menuLinks: [
      {
        name: 'Developing Mindset',
        slug: '/',
      },
      {
        name: 'Tags',
        slug: '/tags/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
      {
        name: 'Contact',
        slug: '/contact/',
      },
    ],
    postsPerFirstPage: 7,
    postsPerPage: 6,
    basePath: '/',
  },
  plugins: [
    `gatsby-plugin-emotion`,
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 500,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              backgroundColor: 'white',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-contentful',
      options:
        process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production,
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Developing Mindset',
        short_name: 'Developing Mindset',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: './static/images/logo_notext.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `./src/gatsby/schema/schema.gql`,
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
      },
    },
    'gatsby-plugin-netlify',
  ],
}
