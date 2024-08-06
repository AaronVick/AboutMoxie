module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/nextFrame',
        destination: '/moxie2.html',
      },
    ];
  },
};
