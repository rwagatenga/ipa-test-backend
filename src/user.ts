// import { QueryInterface } from 'sequelize';
// import bcrypt from 'bcrypt';
// import type { UserType } from '../interfaces/UserType';
// import { UserRoles } from '../enums/UserRoles';

// const saltRounds = 10;

// const userData: UserType[] = [
//   {
//     id: '1',
//     firstName: 'john',
//     lastName: 'Doe',
//     email: 'john@example.com',
//     role: UserRoles.ADMIN,
//     password: bcrypt.hashSync('password', saltRounds),
//   },
//   {
//     id: '2',
//     firstName: 'jane',
//     lastName: 'Furry',
//     email: 'jane@example.com',
//     role: UserRoles.USER,
//     password: bcrypt.hashSync('password', saltRounds),
//   },
// ];

// module.exports = {
//   up: async (queryInterface: QueryInterface) => {
//     return queryInterface.bulkInsert('users', userData);
//   },

//   down: async (queryInterface: QueryInterface) => {
//     return queryInterface.bulkDelete('users', {});
//   },
// };
