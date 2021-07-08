// import { Request } from 'express';
// import { TArrayObject } from '../../types/global.type';

export type TErrorObject = {
  ERROR_CODE: number,
  HTTP_CODE: number,
  DEFAULT_MESSAGE: string,
}

// export type TFormedErrorObject = {
//   request?: Request,
//   errorObj: TErrorObject,
//   message?: string,
//   details?: TArrayObject,
// };

export interface IErrorCode {
  [key: string]: TErrorObject
}
