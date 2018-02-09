function getEnv(name) { return process.env[name] };

module.exports = {
  mongodb: {
    url: getEnv("MONGODB"),
    options: {},
  }
}