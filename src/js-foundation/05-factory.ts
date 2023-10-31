interface BuildMakePersonOptions {
    getUUId: () => string;
    getAge: (birthdate: string) => number | Error;
}

interface PersonOptions {
    name: string;
    birthdate: string;

}
export  const buildMakePerson= ( { getUUId,getAge}:BuildMakePersonOptions):any=>{
    return ({ name, birthdate }:PersonOptions) => {
        return {
            id:getUUId(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}

