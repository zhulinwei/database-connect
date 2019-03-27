const Redis = require('./redis');
const redis = new Redis({
  url: 'redis://localhost:6379/0'
});
redis.init().then(client => {
  return client.get('test');
}).then(data => {
  console.log(data);
});
