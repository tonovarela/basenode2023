interface User {
    id:number,
    name:string
}
const users:User[] = [
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
export const getUserById = (id:number, callback:(err?:string,user?:User)=>void) => {
    const user = users.find(user => user.id === id);
    (!user)
        ? callback(`USUARIO NO ENCONTRADO con id:${id}`)
        : callback(undefined, user);
}

