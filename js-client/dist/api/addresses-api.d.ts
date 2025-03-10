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
import { AddressResponse } from '../models';
import { UpdateAddressBody } from '../models';
/**
 * AddressesApi - axios parameter creator
 * @export
 */
export declare const AddressesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Delete an existing address
     * @summary
     * @param {string} addressId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAddressesAddressId: (addressId: string, options?: any) => Promise<RequestArgs>;
    /**
     * This endpoint allows you to create a new address
     * @summary Create new address
     * @param {string} firstname
     * @param {string} lastname
     * @param {string} address
     * @param {string} city
     * @param {string} state
     * @param {string} postalCode
     * @param {string} countryId
     * @param {string} [salutation]
     * @param {string} [companyName]
     * @param {string} [email]
     * @param {string} [phone]
     * @param {string} [addressTwo]
     * @param {string} [addressThree]
     * @param {boolean} [shipping]
     * @param {string} [userId]
     * @param {string} [customerId]
     * @param {boolean} [billing]
     * @param {boolean} [_default]
     * @param {string} [lastUsedAt]
     * @param {string} [deliveryInstructions]
     * @param {Array<object>} [meta]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postAddresses: (firstname: string, lastname: string, address: string, city: string, state: string, postalCode: string, countryId: string, salutation?: string, companyName?: string, email?: string, phone?: string, addressTwo?: string, addressThree?: string, shipping?: boolean, userId?: string, customerId?: string, billing?: boolean, _default?: boolean, lastUsedAt?: string, deliveryInstructions?: string, meta?: Array<object>, options?: any) => Promise<RequestArgs>;
    /**
     * This endpoint allows you to update an existing address
     * @summary Update existing address
     * @param {string} addressId
     * @param {UpdateAddressBody} [updateAddressBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putAddresses: (addressId: string, updateAddressBody?: UpdateAddressBody, options?: any) => Promise<RequestArgs>;
};
/**
 * AddressesApi - functional programming interface
 * @export
 */
export declare const AddressesApiFp: (configuration?: Configuration) => {
    /**
     * Delete an existing address
     * @summary
     * @param {string} addressId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAddressesAddressId(addressId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * This endpoint allows you to create a new address
     * @summary Create new address
     * @param {string} firstname
     * @param {string} lastname
     * @param {string} address
     * @param {string} city
     * @param {string} state
     * @param {string} postalCode
     * @param {string} countryId
     * @param {string} [salutation]
     * @param {string} [companyName]
     * @param {string} [email]
     * @param {string} [phone]
     * @param {string} [addressTwo]
     * @param {string} [addressThree]
     * @param {boolean} [shipping]
     * @param {string} [userId]
     * @param {string} [customerId]
     * @param {boolean} [billing]
     * @param {boolean} [_default]
     * @param {string} [lastUsedAt]
     * @param {string} [deliveryInstructions]
     * @param {Array<object>} [meta]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postAddresses(firstname: string, lastname: string, address: string, city: string, state: string, postalCode: string, countryId: string, salutation?: string, companyName?: string, email?: string, phone?: string, addressTwo?: string, addressThree?: string, shipping?: boolean, userId?: string, customerId?: string, billing?: boolean, _default?: boolean, lastUsedAt?: string, deliveryInstructions?: string, meta?: Array<object>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AddressResponse>>;
    /**
     * This endpoint allows you to update an existing address
     * @summary Update existing address
     * @param {string} addressId
     * @param {UpdateAddressBody} [updateAddressBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putAddresses(addressId: string, updateAddressBody?: UpdateAddressBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AddressResponse>>;
};
/**
 * AddressesApi - factory interface
 * @export
 */
export declare const AddressesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Delete an existing address
     * @summary
     * @param {string} addressId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAddressesAddressId(addressId: string, options?: any): AxiosPromise<void>;
    /**
     * This endpoint allows you to create a new address
     * @summary Create new address
     * @param {string} firstname
     * @param {string} lastname
     * @param {string} address
     * @param {string} city
     * @param {string} state
     * @param {string} postalCode
     * @param {string} countryId
     * @param {string} [salutation]
     * @param {string} [companyName]
     * @param {string} [email]
     * @param {string} [phone]
     * @param {string} [addressTwo]
     * @param {string} [addressThree]
     * @param {boolean} [shipping]
     * @param {string} [userId]
     * @param {string} [customerId]
     * @param {boolean} [billing]
     * @param {boolean} [_default]
     * @param {string} [lastUsedAt]
     * @param {string} [deliveryInstructions]
     * @param {Array<object>} [meta]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postAddresses(firstname: string, lastname: string, address: string, city: string, state: string, postalCode: string, countryId: string, salutation?: string, companyName?: string, email?: string, phone?: string, addressTwo?: string, addressThree?: string, shipping?: boolean, userId?: string, customerId?: string, billing?: boolean, _default?: boolean, lastUsedAt?: string, deliveryInstructions?: string, meta?: Array<object>, options?: any): AxiosPromise<AddressResponse>;
    /**
     * This endpoint allows you to update an existing address
     * @summary Update existing address
     * @param {string} addressId
     * @param {UpdateAddressBody} [updateAddressBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putAddresses(addressId: string, updateAddressBody?: UpdateAddressBody, options?: any): AxiosPromise<AddressResponse>;
};
/**
 * AddressesApi - object-oriented interface
 * @export
 * @class AddressesApi
 * @extends {BaseAPI}
 */
export declare class AddressesApi extends BaseAPI {
    /**
     * Delete an existing address
     * @summary
     * @param {string} addressId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    deleteAddressesAddressId(addressId: string, options?: any): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * This endpoint allows you to create a new address
     * @summary Create new address
     * @param {string} firstname
     * @param {string} lastname
     * @param {string} address
     * @param {string} city
     * @param {string} state
     * @param {string} postalCode
     * @param {string} countryId
     * @param {string} [salutation]
     * @param {string} [companyName]
     * @param {string} [email]
     * @param {string} [phone]
     * @param {string} [addressTwo]
     * @param {string} [addressThree]
     * @param {boolean} [shipping]
     * @param {string} [userId]
     * @param {string} [customerId]
     * @param {boolean} [billing]
     * @param {boolean} [_default]
     * @param {string} [lastUsedAt]
     * @param {string} [deliveryInstructions]
     * @param {Array<object>} [meta]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    postAddresses(firstname: string, lastname: string, address: string, city: string, state: string, postalCode: string, countryId: string, salutation?: string, companyName?: string, email?: string, phone?: string, addressTwo?: string, addressThree?: string, shipping?: boolean, userId?: string, customerId?: string, billing?: boolean, _default?: boolean, lastUsedAt?: string, deliveryInstructions?: string, meta?: Array<object>, options?: any): Promise<import("axios").AxiosResponse<AddressResponse, any>>;
    /**
     * This endpoint allows you to update an existing address
     * @summary Update existing address
     * @param {string} addressId
     * @param {UpdateAddressBody} [updateAddressBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    putAddresses(addressId: string, updateAddressBody?: UpdateAddressBody, options?: any): Promise<import("axios").AxiosResponse<AddressResponse, any>>;
}
