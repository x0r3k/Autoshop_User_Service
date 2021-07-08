export interface IServiceConfig {
  [key: string]: {
    port: string,
    baseApiUrl: string,
    baseUrl: string,
    testValue?: number
  }; // Must accommodate all members
}
