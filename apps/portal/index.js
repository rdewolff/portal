var derby = require('derby');

var app = module.exports = derby.createApp('app', __filename);

if (!derby.util.isProduction) global.app = app;

app.use(require('d-bootstrap'));
app.serverUse(module, 'derby-stylus');

app.loadViews(__dirname + '/views');
app.loadStyles(__dirname + '/styles');

app.get('/', function(page, model){

  var collection = model.query('collection', {});

  model.subscribe(collection, function(err, next) {

    model.ref('_page.collection', collection);

    page.render('home');

  });
});
