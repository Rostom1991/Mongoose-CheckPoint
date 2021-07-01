const mongoose=require('mongoose')
const { Schema, model } = mongoose;
const schema = new Schema({
    name: { type:String, required: true },
    age: Number,
    favoriteFoods: [String]
})
const person = model('person', schema)
  module.exports = person