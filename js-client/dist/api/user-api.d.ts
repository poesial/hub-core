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
import { UserAddressesResponse } from '../models';
/**
 * UserApi - axios parameter creator
 * @export
 */
export declare const UserApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * This will return any addresses associated to the current user
     * @summary Get user addresses
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserAddresses: (options?: any) => Promise<RequestArgs>;
};
/**
 * UserApi - functional programming interface
 * @export
 */
export declare const UserApiFp: (configuration?: Configuration) => {
    /**
     * This will return any addresses associated to the current user
     * @summary Get user addresses
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserAddresses(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserAddressesResponse>>;
};
/**
 * UserApi - factory interface
 * @export
 */
export declare const UserApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * This will return any addresses associated to the current user
     * @summary Get user addresses
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserAddresses(options?: any): AxiosPromise<UserAddressesResponse>;
};
/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export declare class UserApi extends BaseAPI {
    /**
     * This will return any addresses associated to the current user
     * @summary Get user addresses
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    getUserAddresses(options?: any): Promise<import("axios").AxiosResponse<UserAddressesResponse, any>>;
}
