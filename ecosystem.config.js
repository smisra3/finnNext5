module.exports = {
  apps: [
    {
      name: 'Universal React',
      script: './server/index.js',
      watch: false,
      instances: +process.env.INSTANCES || 1,
      vizion: false,
      env: {},
      env_production: {},
    },
  ],
};
