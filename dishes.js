const mongoose = require('mongoose');
const schema = mongoose.Schema;
const dishSchema = new schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    }
},
{
    timestamps: true
}
);

var dishes = mongoose.model('dish',dishSchema);
module.exports = dishes;