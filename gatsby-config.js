module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'nice-portfolio',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4u5qw3cgummk`,
        accessToken: `UZy1Z8mazdsz8cJS964SKFPjHuWz7wQlkWo1sWbIuec`,
      },
    },
  ],
};
