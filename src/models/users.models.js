// {
//     "first_name": "Iliana",
//     "last_name": "Gonzalez",
//     "email": "ili@gmail.com",
//     "password": "poiu0987",
//     "birthday": "27/10/1989"
// }


const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Users2 = db.define('users2', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    birthday: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false
})

module.exports = Users2
        
       
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: true
        
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: true
//     },
//     birthday: {
//         type: DataTypes.STRING,
//         defaultValue: 'Unknown birthday'
      
//     }
// }, {
//     timestamps: false
// })

// module.exports = Users2
