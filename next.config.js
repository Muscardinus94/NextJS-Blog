const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_SERVER,
} = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'test',
        mongodb_password: 'NkNsSoFcvJw4NBhD',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'test',
      mongodb_password: 'NkNsSoFcvJw4NBhD',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};
