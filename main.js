#!/usr/bin/env ringo

var routes = require("./routes.js");
var {Application} = require('stick');

var app = exports.app = new Application();
app.configure('route', 'static', 'notfound', 'basicauth');
//app.basicauth('/edit', 'user', 'D033E22AE348AEB5660FC2140AEC35850C4DA997');

app.get('/', routes.index);
app.get('/index', routes.index);

app.get('/add', routes.add);
app.get('/delete/:id?', routes.delete);
app.get('/edit/:id?', routes.edit);
app.post('/save', routes.save);

app.static(module.resolve('./public'), 'index.html');
app.notfound.template = module.resolve('./templates/404.html');

// main script to start application
if (require.main == module) {
  require("ringo/httpserver").main(module.id);
}
