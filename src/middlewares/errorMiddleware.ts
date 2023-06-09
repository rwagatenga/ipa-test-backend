// import { NextFunction, Request, Response } from 'express';

// import { ErrorEnums } from '@/enums/errorEnums';
// import { StatusEnums } from '@/enums/statusEnums';

// // import LogService from '../imports/services/LogService';

// export type MyError = Error & {
// 	code: string | number;
// 	status: number;
// 	array?: any;
// 	keyValue?: {
// 		key: number | string;
// 	};
// };
// const errorHandler = async (err: MyError, res: Response) => {
// 	let message = err.message || 'Internal server error';
// 	let code = err.code || ErrorEnums.SERVER_READ;
// 	let statusCode = err.status || StatusEnums.INTERNAL_SERVER_ERROR;

// 	if (err && typeof err.array === 'function') {
// 		// Case: Router validation error
// 		message = (err.array() || [])
// 			.map((error: MyError) => error)
// 			.join(', ')
// 			.toString();
// 		code = ErrorEnums.CLIENT_READ;
// 		statusCode = StatusEnums.BAD_REQUEST;
// 		console.error(`[Router Error] ${message}`);
// 	}

// 	// Special case: MongoError + Duplicate key
// 	// if (err.name === "MongoError" && err.code === 11000) {
// 	// 	const key = err.keyValue?.key;
// 	// 	message = `Duplicate key: ${key}`;
// 	// 	code = ErrorEnums.DUPLICATE_KEY;
// 	// 	statusCode = StatusEnums.BAD_REQUEST;
// 	// }

// 	const error = { message, code };

// 	// LogService.create({
// 	// 	...(req.logObj || {}),
// 	// 	metadata: {
// 	// 		...(req.logObj?.metadata || {}),
// 	// 		error,
// 	// 	},
// 	// });

// 	return res.status(statusCode).send(error);
// };

// export default errorHandler;
