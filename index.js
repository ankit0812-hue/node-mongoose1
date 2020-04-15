const mongoose = require('mongoose');

const dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);
connect.then((db) =>{
    console.log('Connected correctly to server');

    var newDish = dishes({
        name: 'Pizza',
        description: 'Food items'

    });
    newDish.save()

    .then((dish) =>{
        console.log(dish);
        return dishes.find({}).exec();
    })

    .then((dishes) =>{
        console.log(dishes);
        return dishes.remove({});
    })

    .then(() =>{
        return mongoose.connection.close();
    })

    .catch((err) =>{
        console.log(err);
    })


});