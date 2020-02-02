module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about/': { page: '/about' },
      '/about': { page: '/about' },
      '/services': { page: '/services' }
    }

    return paths
  }
}
