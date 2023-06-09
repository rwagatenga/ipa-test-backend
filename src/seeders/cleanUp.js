import user from './20230411091502-user';

const cleanUp = async () => {
  try {
    await user.down();
  } catch (error) {
    console.log(error);
  }
};

module.exports = cleanUp;
