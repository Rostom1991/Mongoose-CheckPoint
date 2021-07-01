const express = require('express')
const app = express()
const port = 3000
const connectDB = require('./connectDB/connectDB')
const person = require('./model/person')
connectDB()

//Person Constructor
const add = () => {
    const person1 = new person({ name: 'Rostom', age: 29, favoriteFoods: ['Pizza', 'Burger'] })
    person1.save((err) => {
        (err) ? console.log('err', err) : console.log('done')
    })
    //Create Method
 
    person.create([{ name: 'Rostom 2', age: 30, favoriteFoods: ['Pasta', 'Lasania'] },
        { name: 'Rostom 4', age: 38, favoriteFoods: ['Pasta', 'Burritos'] },
    { name: 'Rostom 3', age: 31, favoriteFoods: ['Spaghetti', 'Choclate'] }],
        (err) => { err ? console.log('err', err) : console.log('done') })

}
    add()

    //FInd a Person
    const find = () => {
        person.find({}, (err, data) => err ? console.log("err", err) : console.log(data))
    }
    find();
    //Find By ID
      const findId=()=>{
    person.findById("60de35ce7ebcfd35b8945643",(err,data)=>err?console.log("err",err):console.log(data))
    }
    findId();

// Find One Person
const findOneP = () => {
 person.findOne({ favoriteFoods: "Pizza" }, (err, data) =>
     err ? console.log("err", err) : console.log(data)
  );
};
findOneP();

//Update Person
const updateP = async()=>{
   const pers = await person.findById("60de35ce7ebcfd35b8945642").exec()
   await pers.favoriteFoods.push('Hamburger')
   await pers.save()
   console.log('updated')
}
updateP();

// FIndOne and Update
const findAndupdate=()=>{
    person.findOneAndUpdate({name:"Rostom"}
    ,{ $set: { age:20 }},{new:true}
    ,(err,data)=>err?console.log("err",err):console.log(data))
}
findAndupdate();

// Find And Remove
const findAndremove=()=>{
    person.findByIdAndRemove("60de35ce7ebcfd35b8945643"
    ,(err,data)=>err?console.log("err",err):console.log(data))
}
findAndremove();

// DELETE MANY PEOPLE
const deleteManyP=()=>{
    person.deleteMany({name: "Mary"}
    ,(err,data)=>err?console.log("err",err):console.log(data))
}
deleteManyP();

// Narrow Search
const queryHelpers = () => {
  person
    .find({ favoriteFoods: { $in: ["Burritos"] } })
    .sort({ name: "asc" })
    .limit(2)
    .select("-age")
    .exec((err, data) => {
      err ? console.log("err", err) : console.log("Who Like Burritos:", data);
    });
};
queryHelpers()








    app.listen(port, (err) => {
        err ? console.log('error', err)
            : console.log('app ruuning on port 3000')
    });
