import { IErrorCode } from './errorHandling.interface';

const MAIN_ERROR_CODES: IErrorCode = {
  BAD_REQUEST_BODY: {
    ERROR_CODE: 100,
    HTTP_CODE: 400,
    DEFAULT_MESSAGE: 'Request body parameter error',
  },
  VALIDATION_BODY: {
    ERROR_CODE: 101,
    HTTP_CODE: 400,
    DEFAULT_MESSAGE: 'Request body parameter value is invalid',
  },
  UNAUTHORIZED: {
    ERROR_CODE: 110,
    HTTP_CODE: 401,
    DEFAULT_MESSAGE: 'Token error',
  },
  ELEMENT_NOT_FOUND: {
    ERROR_CODE: 151,
    HTTP_CODE: 400,
    DEFAULT_MESSAGE: 'Element not found',
  },
  ELEMENT_IN_USE: {
    ERROR_CODE: 152,
    HTTP_CODE: 400,
    DEFAULT_MESSAGE: 'Element in use',
  },
  ELEMENT_EXISTS: {
    ERROR_CODE: 153,
    HTTP_CODE: 400,
    DEFAULT_MESSAGE: 'Element already exists',
  },
  IS_ENDED: {
    ERROR_CODE: 154,
    HTTP_CODE: 400,
    DEFAULT_MESSAGE: 'Course is ended/ video is watched',
  },
  UNAVAILABLE: {
    ERROR_CODE: 155,
    HTTP_CODE: 400,
    DEFAULT_MESSAGE: 'ELement is unavailable',
  },
  ELEMENT_NOT_SET: {
    ERROR_CODE: 156,
    HTTP_CODE: 400,
    DEFAULT_MESSAGE: 'Element not set',
  },
  ELEMENT_ALREADY_DONE: {
    ERROR_CODE: 157,
    HTTP_CODE: 400,
    DEFAULT_MESSAGE: 'Element already done something',
  },
  CREDENTIAL_ERROR: {
    ERROR_CODE: 200,
    HTTP_CODE: 400,
    DEFAULT_MESSAGE: 'Credential error',
  },
  FILE_ERROR: {
    ERROR_CODE: 210,
    HTTP_CODE: 400,
    DEFAULT_MESSAGE: 'File is not valid',
  },
  NOTIFICATION_ERROR: {
    ERROR_CODE: 220,
    HTTP_CODE: 400,
    DEFAULT_MESSAGE: 'Notification error',
  },
  SUBSCRIPTION_ERROR: {
    ERROR_CODE: 230,
    HTTP_CODE: 400,
    DEFAULT_MESSAGE: 'Not subscribed or subscription expired',
  },
  DATABASE_ERROR: {
    ERROR_CODE: 240,
    HTTP_CODE: 400,
    DEFAULT_MESSAGE: 'Database logic error',
  },
  REQUEST_ERROR: {
    ERROR_CODE: 250,
    HTTP_CODE: 400,
    DEFAULT_MESSAGE: 'Wrong JSON format',
  },
  TOKEN_ERROR: {
    ERROR_CODE: 260,
    HTTP_CODE: 401,
    DEFAULT_MESSAGE: 'Token error',
  },
  SESSION_ERROR: {
    ERROR_CODE: 270,
    HTTP_CODE: 401,
    DEFAULT_MESSAGE: 'Session error',
  },
  FORBIDDEN: {
    ERROR_CODE: 403,
    HTTP_CODE: 403,
    DEFAULT_MESSAGE: 'FORBIDDEN',
  },
  NOT_FOUND: {
    ERROR_CODE: 404,
    HTTP_CODE: 404,
    DEFAULT_MESSAGE: 'Page not found',
  },
  SYSTEM_ERROR: {
    ERROR_CODE: 500,
    HTTP_CODE: 500,
    DEFAULT_MESSAGE: 'Server error',
  },
  UNHANDLED_ERROR: {
    ERROR_CODE: 999,
    HTTP_CODE: 501,
    DEFAULT_MESSAGE: 'UNHANDLED ERROR',
  },
};

export default MAIN_ERROR_CODES;
