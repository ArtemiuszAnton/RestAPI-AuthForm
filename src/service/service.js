const { createUserDB, getAllUsersDB, updateUserByIdDB, updateUserPathDB, deleteUserByIdDB, getUserByIdDB, getUserByEmailDB } = require('../repository/repository');

async function createUser(username, email, phone, pwd) {
    const findUser = await createUserDB(username, email, phone, pwd);
    if (findUser.email[0] == email) throw new Error('user already exists');
    return findUser
}

async function getAllUsers() {
    const user = await getAllUsersDB();
    return user
}

async function getUserById(id) {
    const user = await getUserByIdDB(id);
    return user
}

async function updateUserById(id, username, email, phone, pwd) {
    const user = await updateUserByIdDB(id, username, email, phone, pwd);
    return user
}

async function deleteUserById(id) {
    const user = await deleteUserByIdDB(id);
    if (!user.length) throw new Error('Array is empty');
    return user
}

async function updateUserPath(id, body) {
    const user = await updateUserPathDB(id, body);
    if (id < 0) throw new Error("id is not valid");
    if (!user.length) throw new Error("data does not create");
    return user;
}

async function authUser(email, pwd) {
    const user = await getUserByEmailDB(email);
    if (user[0]?.email != email) throw new Error('this email not created');
    if (user[0]?.pwd != pwd) throw new Error('wrong password');
    return user
}

module.exports = { createUser, getAllUsers, updateUserById, updateUserPath, deleteUserById, getUserById, authUser }