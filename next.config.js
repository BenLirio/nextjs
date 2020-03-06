module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/family': { page: '/family' },
      '/cosmetic': { page: '/cosmetic' },
      '/hospital': { page: '/hospital' },
      '/new-patient': { page: '/new-patient' }
    }

    return paths
  }
}
