
const buildMakePerson= ( { getUiid,getAge})=>{
    return ({ name, birhtdate }) => {
        return {
            id:getUiid(),
            name,
            birhtdate,
            age: getAge(birhtdate)
        }
    }
}
module.exports = {buildMakePerson};
