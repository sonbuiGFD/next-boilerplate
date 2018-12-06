const nextRoutes = require('next-routes');
const userRoute = require('./userRoute');

const routes = (module.exports = nextRoutes());

userRoute.forEach(r => routes.add({ name: r.name, pattern: r.pattern, path: r.path }));
