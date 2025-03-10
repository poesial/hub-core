/**
 * GetCandy
 * The GetCandy API
 *
 * The version of the OpenAPI document: 0.12.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { CreateUserBody } from '../models';
import { InlineObject37 } from '../models';
import { User } from '../models';
import { UserCollection } from '../models';
import { UserResponse } from '../models';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export declare const UsersApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Delete a user by their given ID.
     * @summary
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUsersUserId: (userId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Gets a paginated list of all users
     * @summary Get all users
     * @param {string} [include] Comma separated includes for the resource
     * @param {number} [perPage] How many results per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUsers: (include?: string, perPage?: number, options?: any) => Promise<RequestArgs>;
    /**
     * Returns the user associated to the access token.
     * @summary Get the current user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUsersCurrent: (options?: any) => Promise<RequestArgs>;
    /**
     * Get a user by their given ID.
     * @summary Get user
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUsersUserId: (userId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Create a new user resource
     * @summary Create a new user
     * @param {CreateUserBody} [createUserBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postUsers: (createUserBody?: CreateUserBody, options?: any) => Promise<RequestArgs>;
    /**
     * Updates a user record from their ID.
     * @summary
     * @param {string} userId
     * @param {InlineObject37} [inlineObject37]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putUsersUserId: (userId: string, inlineObject37?: InlineObject37, options?: any) => Promise<RequestArgs>;
};
/**
 * UsersApi - functional programming interface
 * @export
 */
export declare const UsersApiFp: (configuration?: Configuration) => {
    /**
     * Delete a user by their given ID.
     * @summary
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUsersUserId(userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Gets a paginated list of all users
     * @summary Get all users
     * @param {string} [include] Comma separated includes for the resource
     * @param {number} [perPage] How many results per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUsers(include?: string, perPage?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserCollection>>;
    /**
     * Returns the user associated to the access token.
     * @summary Get the current user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUsersCurrent(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponse>>;
    /**
     * Get a user by their given ID.
     * @summary Get user
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUsersUserId(userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponse>>;
    /**
     * Create a new user resource
     * @summary Create a new user
     * @param {CreateUserBody} [createUserBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postUsers(createUserBody?: CreateUserBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>>;
    /**
     * Updates a user record from their ID.
     * @summary
     * @param {string} userId
     * @param {InlineObject37} [inlineObject37]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putUsersUserId(userId: string, inlineObject37?: InlineObject37, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponse>>;
};
/**
 * UsersApi - factory interface
 * @export
 */
export declare const UsersApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Delete a user by their given ID.
     * @summary
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUsersUserId(userId: string, options?: any): AxiosPromise<void>;
    /**
     * Gets a paginated list of all users
     * @summary Get all users
     * @param {string} [include] Comma separated includes for the resource
     * @param {number} [perPage] How many results per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUsers(include?: string, perPage?: number, options?: any): AxiosPromise<UserCollection>;
    /**
     * Returns the user associated to the access token.
     * @summary Get the current user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUsersCurrent(options?: any): AxiosPromise<UserResponse>;
    /**
     * Get a user by their given ID.
     * @summary Get user
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUsersUserId(userId: string, options?: any): AxiosPromise<UserResponse>;
    /**
     * Create a new user resource
     * @summary Create a new user
     * @param {CreateUserBody} [createUserBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postUsers(createUserBody?: CreateUserBody, options?: any): AxiosPromise<User>;
    /**
     * Updates a user record from their ID.
     * @summary
     * @param {string} userId
     * @param {InlineObject37} [inlineObject37]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putUsersUserId(userId: string, inlineObject37?: InlineObject37, options?: any): AxiosPromise<UserResponse>;
};
/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export declare class UsersApi extends BaseAPI {
    /**
     * Delete a user by their given ID.
     * @summary
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    deleteUsersUserId(userId: string, options?: any): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Gets a paginated list of all users
     * @summary Get all users
     * @param {string} [include] Comma separated includes for the resource
     * @param {number} [perPage] How many results per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    getUsers(include?: string, perPage?: number, options?: any): Promise<import("axios").AxiosResponse<UserCollection, any>>;
    /**
     * Returns the user associated to the access token.
     * @summary Get the current user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    getUsersCurrent(options?: any): Promise<import("axios").AxiosResponse<UserResponse, any>>;
    /**
     * Get a user by their given ID.
     * @summary Get user
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    getUsersUserId(userId: string, options?: any): Promise<import("axios").AxiosResponse<UserResponse, any>>;
    /**
     * Create a new user resource
     * @summary Create a new user
     * @param {CreateUserBody} [createUserBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    postUsers(createUserBody?: CreateUserBody, options?: any): Promise<import("axios").AxiosResponse<User, any>>;
    /**
     * Updates a user record from their ID.
     * @summary
     * @param {string} userId
     * @param {InlineObject37} [inlineObject37]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    putUsersUserId(userId: string, inlineObject37?: InlineObject37, options?: any): Promise<import("axios").AxiosResponse<UserResponse, any>>;
}
