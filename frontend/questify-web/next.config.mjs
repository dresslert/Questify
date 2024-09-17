export default {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Autenticação 
      {
        source: '/auth/:path*',
        destination: 'http://192.168.0.11:8085/:path*',
      },
      // Missões 
      {
        source: '/api/:path*',
        destination: 'http://192.168.0.11:3000/api/:path*',
      },
    ];
  },
};
