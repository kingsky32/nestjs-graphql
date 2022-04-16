
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
    abstract createUser(email: string, password: string, username: string): User | Promise<User>;

    abstract login(password: string, username: string): LoginResponseDto | Promise<LoginResponseDto>;
}

export abstract class IQuery {
    abstract getUser(id: string): User | Promise<User>;

    abstract whoAmI(): User | Promise<User>;
}

export class User {
    createdAt: DateTime;
    email: string;
    id: string;
    password: string;
    roles: string;
    updatedAt: DateTime;
    username: string;
}

export type DateTime = any;
type Nullable<T> = T | null;
