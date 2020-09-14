const env = process.env.NODE_ENV;

const prod = {
  port: process.env.PORT,
  host: process.env.ROOT_URL,
  name: process.env.APPLICATION_NAME,
};

const dev = {
  port: 8080,
  host: 'http://localhost:8080',
  name: process.env.APPLICATION_NAME,
};

module.exports = env === 'production' ? prod : dev;
