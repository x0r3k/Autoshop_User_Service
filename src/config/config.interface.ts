export interface IServiceConfig {
  [key: string]: {
    port: string,
    baseApiPath: string,
    basePath: string,
    testValue?: number
  }; // Must accommodate all members
}
