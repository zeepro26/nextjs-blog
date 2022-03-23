module.exports = {
    async redirects() {
      return [
        {
          source: '/posts/4',
          destination: 'https://vercel.com',
          permanent: false,
        },
      ]
    },
  }