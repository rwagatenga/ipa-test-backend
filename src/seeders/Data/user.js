const bcrypt = require('bcrypt');

const saltRounds = 10;
const userData = [
  {
    id: '1',
    first_name: 'john',
    last_name: 'Doe',
    email: 'john@example.com',
    role: 'ADMIN',
    password: bcrypt.hashSync('password', saltRounds),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '2',
    first_name: 'jane',
    last_name: 'Furry',
    email: 'jane@example.com',
    role: 'USER',
    password: bcrypt.hashSync('password', saltRounds),
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export default userData;
