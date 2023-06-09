// import { validationResult } from 'express-validator';
// import { NextFunction, Request, Response } from 'express';

// export type MyError = Error & {
// 	param: any;
// 	msg: string;
// };
// const errorFormatter = (error: MyError) => `${error.param}: ${error.msg}`;

// const checkValidation = async (req: Request, next: NextFunction) => {
// 	const errors = validationResult(req).formatWith(errorFormatter);

// 	if (!errors.isEmpty()) {
// 		return next(errors);
// 	}

// 	return next();
// };

// module.exports = {
// 	checkValidation,
// };
