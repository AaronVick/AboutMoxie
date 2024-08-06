module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/nextFrame',
        destination: '/api/nextFrame', // Point to the actual API route
      },
    ];
  },
};
