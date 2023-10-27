const  { getAge,getUiid} = require('./plugins');
//const { template } = require("./js-foundation/01-template");
//require("./js-foundation/02-desctructuring");
//const { getUserById } = require("./js-foundation/03-callbacks");
const  {buildMakePerson} =require ("./js-foundation/05-factory");
const obj = { name: 'John', birhtdate: '1980-10-21' };
const makePerson = buildMakePerson({ getAge,getUiid});
console.log(makePerson(obj));
//console.log(buildPerson(obj));
// getUserById(12, (err, user) => {
//     if (err) {
//         throw new Error(err);
//     }
//     console.log(user);
// });







