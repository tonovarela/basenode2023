
const users = [
    {
        id: 1,
        name: 'John',
    },
    {
        id: 2,
        name: 'Mary',
    },
    {
        id: 3,
        name: 'Peter',
    }
];
const getUserById = (id, callback) => {
    const user = users.find(user => user.id === id);
    (!user)
        ? callback(`USUARIO NO ENCONTRADO con id:${id}`)
        : callback(null, user);
}

module.exports = { getUserById }