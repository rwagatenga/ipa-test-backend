import { StatusEnums } from '../enums/statusEnums';

export type Errors = {
  code: string | number;
  status: number | string;
  message: string;
};
export class BadRequestError extends Error {
  code: string | number;
  status: number | string;
  message: string;

  constructor(code: string | number, message: string) {
    super(message);
    this.code = code;
    this.message = message;
    this.status = StatusEnums.BAD_REQUEST;
  }
}
