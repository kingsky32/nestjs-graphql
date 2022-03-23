
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class LoginResponseDto {
    accessToken: string;
    refreshToken: string;
}

export abstract class IMutation {
    abstract createUser(password: string, username: string): UserEntity | Promise<UserEntity>;

    abstract login(password: string, username: string): LoginResponseDto | Promise<LoginResponseDto>;
}

export abstract class IQuery {
    abstract getUser(id: string): UserEntity | Promise<UserEntity>;

    abstract me(): UserEntity | Promise<UserEntity>;
}

export class UserEntity {
    createdAt: DateTime;
    id: string;
    password: string;
    updatedAt: DateTime;
    username: string;
}

export type DateTime = any;
type Nullable<T> = T | null;
