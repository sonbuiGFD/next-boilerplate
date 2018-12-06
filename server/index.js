const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { parse } = require('url');
const next = require('next');

const app = require('express')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const server = require('http').Server(app);
const io = require('socket.io')(server);

const customRoute = require('./routes/customRoute');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({ dev });
const handler = customRoute.getRequestHandler(nextApp);

// authen middle wares
const authen = (paths, middleware) => (req, res, nextStep) => {
  let isHave = false;
  paths.forEach((path) => {
    if (path === req.path || req.path.includes(path)) {
      isHave = true;
    }
  });
  if (isHave) {
    return middleware(req, res, nextStep);
  }
  return nextStep();
};

nextApp.prepare().then(() => {
  // fake DB
  const messages = {
    chat1: [],
    chat2: [],
  };

  // socket.io server
  io.on('connection', (socket) => {
    socket.on('message.chat1', (data) => {
      messages.chat1.push(data);
      socket.broadcast.emit('message.chat1', data);
    });
    socket.on('message.chat2', (data) => {
      messages.chat2.push(data);
      socket.broadcast.emit('message.chat2', data);
    });
  });

  app.get('/messages/:chat', (req, res) => {
    res.json(messages[req.params.chat]);
  });

  // Authenticate middleware
  // We will apply this middleware to every route except '/' and '/_next'
  app.use(
    authen(['/user'], (req, res, nextStep) => {
      const { token } = req.cookies;
      if (token) {
        nextStep();
      } else {
        res.redirect('/');
      }
    }),
  );

  app.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    handler(req, res, parsedUrl);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
