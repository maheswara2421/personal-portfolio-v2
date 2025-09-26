// Personal Portfolio - M Mohan S S N Vivek
// Based on the excellent v4 design by Brittany Chiang (https://github.com/bchiang7)
// Original project: https://github.com/bchiang7/v4
// Licensed under MIT

module.exports = {
  siteMetadata: {
    title: 'M Mohan S S N Vivek - Frontend Developer & Software Engineer',
    description:
      'Frontend Developer specializing in ReactJS, Node.js, and modern web technologies. B.Tech from NIT Aizawl. Currently Frontend Intern at Entrys. Building responsive, user-friendly web applications.',
    siteUrl: 'https://mohanvivek.com', // No trailing slash allowed!
    image: '/og.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@mohanvivek2421',
    author: 'M Mohan S S N Vivek',
    keywords: 'Frontend Developer, React Developer, JavaScript, Web Development, Software Engineer, NIT Aizawl, Portfolio',
    lang: 'en',
    ogType: 'website',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `M Mohan S S N Vivek - Portfolio`,
        short_name: `Mohan Vivek`,
        start_url: `/`,
        background_color: `#0a192f`,
        theme_color: `#64ffda`,
        display: `standalone`,
        icon: `src/images/logo.png`,
        cache_busting_mode: `none`,
      },
    },
  ],
};
