const app = require('./app');
// const { createServer } = require('http');
const ws = require('ws');

app.listen(8000, () => console.log(`app is on http://localhost:8000`));

const wsServer = new ws.Server({ port: 80 });

wsServer.on('connection', ws => {
  console.log('someone connected');
  ws.on('message', message => {
    console.log(message);
  });
  ws.send('you connected');
});

// server.listen(80);
