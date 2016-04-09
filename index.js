//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');


//Controller Dependencies
// var productCtrl = require('./controllers/productCtrl.js');
// var userCtrl = require('./controllers/userCtrl.js');
// var cartCtrl = require('./controllers/cartCtrl.js');
// var orderCtrl = require('./controllers/orderCtrl.js');

//Middleware
var app = express();
var port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/client'))
//Database connection
mongoose.connect('mongodb://localhost/ecommerce');

//Server connection
app.listen(port, function() {
  console.log('Listening on port ' + port);
})

//Endpoints
app.get('/products', productCtrl.getProducts);
app.get('/products/:id', productCtrl.getOneProduct);
app.post('/products', productCtrl.addProduct);
app.put('/products/:id', productCtrl.updateProduct);
app.delete('/products/:id', productCtrl.deleteProduct);

app.post('/cart/:user_id', cartCtrl.addCart);
app.put('/cart/:user_id', cartCtrl.updateCart);

app.get('/user/:username', userCtrl.getUser);
app.post('/user', userCtrl.addUser);
//app.put('/user/:id', userCtrl.updateUser);

app.post('/order/:user_id', orderCtrl.addOrder);
app.get('/order/:user_id', orderCtrl.getOrder);
