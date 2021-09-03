/* eslint-disable no-unused-vars */
import { Request } from 'express';
import { TErrorObject /* TFormedErrorObject */ } from './errorHandling.interface';
import { TArrayObject } from '../../common/types';

// function errorObjectBuilder(request: Request, errorObj: TErrorObject, message: string, details: TArrayObject): TFormedErrorObject {
//   return {
//     request, errorObj, message, details,
//   };
// }

// export default errorObjectBuilder;

export class CHttpError extends Error {
  request: Request;

  errorObj: TErrorObject;

  message: string;

  details: TArrayObject;

  toString(): string {
    if (this.errorObj) {
      return `${this.message || this.errorObj.DEFAULT_MESSAGE}`;
    }
    return 'Unhandled error';
  }

  constructor(errorObj: TErrorObject, message?: string, details?: TArrayObject, request?: Request) {
    super();
    Object.setPrototypeOf(this, CHttpError.prototype);
    this.name = 'CHttpError';
    this.request = request;
    this.errorObj = errorObj;
    this.message = message;
    this.details = details;
  }
}

export function throwHttpError(errorObj: TErrorObject, message?: string, details?: TArrayObject, request?: Request) {
  throw new CHttpError(errorObj, message, details, request);
}

export function createHttpError(errorObj: TErrorObject, message?: string, details?: TArrayObject, request?: Request) {
  return new CHttpError(errorObj, message, details, request);
}
