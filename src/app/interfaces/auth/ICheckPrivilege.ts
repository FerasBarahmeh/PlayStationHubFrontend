export interface ICheckPrivilege {

    response: boolean,
    hasError: boolean;
    metadata?: object,
    statusCode: number;
    message: string;
}
