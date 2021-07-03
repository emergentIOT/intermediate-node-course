const app = require('./config/express');
const config = require('./config/config');

//Listen to the port

app.listen(config.port, () => {
  console.log(`Server started at ${config.port}, running in ${config.env}`);
})
