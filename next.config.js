module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/services': { page: '/services' },
      '/services/cosmetic': { page: '/services/cosmetic' },
      '/new-patient': { page: '/new-patient' }
    }

    return paths
  }
}
