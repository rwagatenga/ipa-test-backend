import { Request, Response } from 'express';

import { BadRequestError } from '../errors/BadRequestError';

import { ErrorEnums } from '../enums/errorEnums';
import { ActivityEnums } from '../enums/ActivityEnums';

import { UserService } from '../services/UserService';

const userService = new UserService();
export class UserController {
  public static async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await userService.getAllUsers();
      if (!users.length)
        throw new BadRequestError(ErrorEnums.NOT_FOUND, 'Users not Found');

      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public static async getUserById(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);

    const logObj = {
      performedBy: id,
      userAgent: req.headers['user-agent'],
      action: ActivityEnums.GET_USER_BY_ID,
      metadata: {
        id,
      },
    };

    try {
      const user = await userService.getUserById(id);
      if (!user)
        throw new BadRequestError(ErrorEnums.NOT_FOUND, 'User not Found');

      res.status(200).json(user);
      // if (user) {
      //   res.status(200).json(user);
      // } else {
      //   res.status(404).json({ message: 'User not found' });
      // }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public static async createUser(req: Request, res: Response): Promise<void> {
    const { userData } = req.body;

    try {
      const user = await userService.createUser(userData);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public static async updateUser(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const { userData } = req.body;

    try {
      const user = await userService.updateUser(id, userData);

      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public static async deleteUser(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);

    try {
      const deleted = await userService.deleteUser(id);

      if (Boolean(deleted)) {
        res.status(200).json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
