const Users2 = require('../models/users.models')

const findAllUsers = async() => {
    const data = await Users2.findAll()
    return data
}

const findUserById = async(id) => {
    const data = await Users2.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createUser = async (obj) => { 
    const data = await Users2.create({
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    })
    return data
}

const updateUser = async(id, obj) => {
    const data = await Users2.update(obj, {
        where: {
            id: id
        }
    })
    return data[0]
}

const deleteUser = async(id) => {
    const data = await Users2.de({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
}
