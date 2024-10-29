const { Sequelize } = require('sequelize');

// //Option 1: passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:')
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

// //Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: 'path/to/database.sqlite'
// });

//Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('datnt', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    "logging": false
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;