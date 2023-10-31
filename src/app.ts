
import { buildMakePerson, getPokemonById,getUserById } from "./js-foundation";
import { buildLogger, getAge, getUUId } from "./plugins";

const makePerson = buildMakePerson({ getUUId,getAge});
const obj = { name: 'John', birthdate: '1980-10-21' };
 console.log(makePerson(obj));


getUserById(1, (err, user) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(user);
}
)

//  getPokemonById("1")
//     .then(p => console.log(p))
//      .catch(r => console.error("Error: " + r.message))



// const logger = buildLogger("app.js");
//  logger.error("Esto es algo malo");
// export const name :string= "Varela"
// console.log("Hola",name);







