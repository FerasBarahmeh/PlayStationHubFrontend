export interface IUser {
    id: number,
    username: string,
    phone: string,
    email: string,
    status: number,
    statusName: string,
    createdAt: Date,
    updatedAt: Date,
    phoneVerifiedAt?: Date,
    emailVerifiedAt?: Date
}