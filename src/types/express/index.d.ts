/* eslint-disable no-unused-vars */
// extend Express Request interface to get ability to pass custom properties in it
// to use external types it should be dynamically imported inside declare block
// or namespace should be surrounded with global block - https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts

declare namespace Express {
  export interface Request {
    transaction: import('sequelize').Transaction;
  }
}
