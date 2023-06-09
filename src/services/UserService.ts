import User from '../models/user';
import { UserType } from '../interfaces/UserType';

export class UserService {
  async createUser(userData: UserType): Promise<User> {
    try {
      const user = await User.create(userData);
      return user;
    } catch (err: any) {
      throw new Error(`Error creating user: ${err.message}`);
    }
  }
  async getAllUsers(): Promise<User[]> {
    try {
      const users = await User.findAll();
      return users;
    } catch (err: any) {
      throw new Error(`Error getting users: ${err.message}`);
    }
  }
  async getUserById(id: number): Promise<User | null> {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (err: any) {
      throw new Error(`Error getting user: ${err.message}`);
    }
  }

  async updateUser(id: number, userData: UserType): Promise<User> {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error(`User with id ${id} not found`);
      }
      const updatedUser = await user.update(userData);
      return updatedUser;
    } catch (err: any) {
      throw new Error(`Error updating user: ${err.message}`);
    }
  }

  async deleteUser(id: number): Promise<void> {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error(`User with id ${id} not found`);
      }
      await user.destroy();
    } catch (err: any) {
      throw new Error(`Error deleting user: ${err.message}`);
    }
  }
}
