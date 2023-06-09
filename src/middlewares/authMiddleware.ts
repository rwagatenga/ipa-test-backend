import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UserRoles } from '../enums/UserRoles';
import User from '../models/user';
import type { UserType } from '../interfaces/UserType';

const secret = 'my-secret-key'; // Replace with your secret key
const refreshTokens = new Map<string, string>();

interface DecodedToken {
  // Define the properties of the decoded token
  user: UserType;
}

declare global {
  namespace Express {
    interface Request {
      user?: DecodedToken;
    }
  }
}
// Define middleware function that checks for authentication and authorization
export const authMiddleware = (requiredRoles: (typeof UserRoles)[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    // Check for token in headers
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized - Missing token' });
    }

    try {
      const decodedToken: any = jwt.verify(token, secret);

      // Check if token has not expired and user has required roles or permissions
      const { exp, roles } = decodedToken;

      if (Date.now() / 1000 >= exp) {
        // Token has expired, try to refresh it
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
          return res.status(401).json({
            message:
              'Unauthorized - Token has expired and refresh token is missing',
          });
        }

        const oldToken = refreshTokens.get(refreshToken);

        if (!oldToken) {
          return res.status(401).json({
            message: 'Unauthorized - Refresh token is invalid or has expired',
          });
        }

        const decodedOldToken: any = jwt.verify(oldToken, secret);

        const userRoles = decodedOldToken.roles || [];
        const hasRequiredRoles = requiredRoles.every(requiredRole =>
          userRoles.includes(requiredRole)
        );

        if (!hasRequiredRoles) {
          return res.status(403).json({
            message:
              'Forbidden - User does not have required roles or permissions',
          });
        }

        // Issue new access token
        const newToken = jwt.sign(
          { ...decodedOldToken, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
          secret
        );

        // Attach new access token to response object
        res.locals.token = newToken;

        next();
      } else {
        const userRoles = roles || [];
        const hasRequiredRoles = requiredRoles.every(requiredRole =>
          userRoles.includes(requiredRole)
        );

        if (!hasRequiredRoles) {
          return res.status(403).json({
            message:
              'Forbidden - User does not have required roles or permissions',
          });
        }

        // Attach decoded token to request object for use in downstream controllers
        req.user = decodedToken;

        next();
      }
    } catch (err) {
      return res
        .status(401)
        .json({ message: 'Unauthorized - Token is invalid' });
    }
  };
};

// Define function to issue a refresh token
export const issueRefreshToken = (user: UserType) => {
  const refreshToken = jwt.sign(
    { sub: user.id, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30 },
    secret
  );
  refreshTokens.set(
    refreshToken,
    jwt.sign({ sub: user.id, roles: user.role }, secret)
  );
  return refreshToken;
};

// Define function to revoke a refresh token
export const revokeRefreshToken = (refreshToken: string) => {
  refreshTokens.delete(refreshToken);
};
