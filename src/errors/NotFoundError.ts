const STATUS_ENUMS = require('../../api/enums/statusEnums');

export type Errors = {
  code: string | number;
  status: number | string;
  message: string;
};
export class NotFoundError extends Error {
  code: string | number;
  status: number | string;
  message: string;
  constructor(code: string | number, message: string) {
    super(message);
    this.code = code;
    this.message = message;
    this.status = STATUS_ENUMS.NOT_FOUND;
  }
}
