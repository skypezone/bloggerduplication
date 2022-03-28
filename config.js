const env = require('./env.json');
Object.keys(env).forEach((key) => {
    if (typeof env[key] === 'string') {
      process.env[key] = env[key];
    } else {
      process.env[key] = JSON.stringify(env[key]);
    }
});