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
import { CurrencyCollection } from '../models';
/**
 * CurrenciesApi - axios parameter creator
 * @export
 */
export declare const CurrenciesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Gets a paginated list of all currencies
     * @summary Get all currencies
     * @param {string} [include] Comma separated includes for the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCurrencies: (include?: string, options?: any) => Promise<RequestArgs>;
};
/**
 * CurrenciesApi - functional programming interface
 * @export
 */
export declare const CurrenciesApiFp: (configuration?: Configuration) => {
    /**
     * Gets a paginated list of all currencies
     * @summary Get all currencies
     * @param {string} [include] Comma separated includes for the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCurrencies(include?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CurrencyCollection>>;
};
/**
 * CurrenciesApi - factory interface
 * @export
 */
export declare const CurrenciesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Gets a paginated list of all currencies
     * @summary Get all currencies
     * @param {string} [include] Comma separated includes for the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCurrencies(include?: string, options?: any): AxiosPromise<CurrencyCollection>;
};
/**
 * CurrenciesApi - object-oriented interface
 * @export
 * @class CurrenciesApi
 * @extends {BaseAPI}
 */
export declare class CurrenciesApi extends BaseAPI {
    /**
     * Gets a paginated list of all currencies
     * @summary Get all currencies
     * @param {string} [include] Comma separated includes for the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CurrenciesApi
     */
    getCurrencies(include?: string, options?: any): Promise<import("axios").AxiosResponse<CurrencyCollection, any>>;
}
