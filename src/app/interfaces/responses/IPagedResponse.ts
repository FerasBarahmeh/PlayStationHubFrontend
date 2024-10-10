export interface IPagedResponse<T> {
    data: T[];
    message: string;
    slideNumber: number;
    slideSize: number;
    statusCode: number;
    totalCount: number;
}