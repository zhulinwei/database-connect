function getEnv(name) { return process.env[name] };

module.exports = {
  mongodb: {
    test1: {
      url: getEnv("MONGODB_TEST1"),
      options: {},
    },
    test2: {
      url: getEnv("MONGODB_TEST2"),
      options: {},
    },
  }
}