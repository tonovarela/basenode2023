//const { getAge, getUiid } = require('./plugins');
//const getPokemonById = require('./js-foundation/06-promises');
//const { template } = require("./js-foundation/01-template");
//require("./js-foundation/02-desctructuring");
//const { getUserById } = require("./js-foundation/03-callbacks");
// const  {buildMakePerson} =require ("./js-foundation/05-factory");
// const obj = { name: 'John', birhtdate: '1980-10-21' };
// const makePerson = buildMakePerson({ getAge,getUiid});
// console.log(makePerson(obj));
// const getPokemonById = require("./js-foundation/06-promises");


// getPokemonById(1)
//     .then(p => console.log(p.name))
//     .catch(r => console.error("Error: " + r.message))

const  { buildLogger} = require("./plugins");

const logger = buildLogger("app.js");
logger.log("Hello World");

logger.error("Esto es algo malo");









