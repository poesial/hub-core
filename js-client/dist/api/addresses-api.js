"use strict";
// tslint:disable
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressesApi = exports.AddressesApiFactory = exports.AddressesApiFp = exports.AddressesApiAxiosParamCreator = void 0;
const globalImportUrl = require("url");
const axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
const base_1 = require("../base");
/**
 * AddressesApi - axios parameter creator
 * @export
 */
exports.AddressesApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Delete an existing address
         * @summary
         * @param {string} addressId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAddressesAddressId: (addressId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'addressId' is not null or undefined
            if (addressId === null || addressId === undefined) {
                throw new base_1.RequiredError('addressId', 'Required parameter addressId was null or undefined when calling deleteAddressesAddressId.');
            }
            const localVarPath = `/addresses/{addressId}`
                .replace(`{${"addressId"}}`, encodeURIComponent(String(addressId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'DELETE' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarUrlObj.query = Object.assign(Object.assign(Object.assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
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
        postAddresses: (firstname, lastname, address, city, state, postalCode, countryId, salutation, companyName, email, phone, addressTwo, addressThree, shipping, userId, customerId, billing, _default, lastUsedAt, deliveryInstructions, meta, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'firstname' is not null or undefined
            if (firstname === null || firstname === undefined) {
                throw new base_1.RequiredError('firstname', 'Required parameter firstname was null or undefined when calling postAddresses.');
            }
            // verify required parameter 'lastname' is not null or undefined
            if (lastname === null || lastname === undefined) {
                throw new base_1.RequiredError('lastname', 'Required parameter lastname was null or undefined when calling postAddresses.');
            }
            // verify required parameter 'address' is not null or undefined
            if (address === null || address === undefined) {
                throw new base_1.RequiredError('address', 'Required parameter address was null or undefined when calling postAddresses.');
            }
            // verify required parameter 'city' is not null or undefined
            if (city === null || city === undefined) {
                throw new base_1.RequiredError('city', 'Required parameter city was null or undefined when calling postAddresses.');
            }
            // verify required parameter 'state' is not null or undefined
            if (state === null || state === undefined) {
                throw new base_1.RequiredError('state', 'Required parameter state was null or undefined when calling postAddresses.');
            }
            // verify required parameter 'postalCode' is not null or undefined
            if (postalCode === null || postalCode === undefined) {
                throw new base_1.RequiredError('postalCode', 'Required parameter postalCode was null or undefined when calling postAddresses.');
            }
            // verify required parameter 'countryId' is not null or undefined
            if (countryId === null || countryId === undefined) {
                throw new base_1.RequiredError('countryId', 'Required parameter countryId was null or undefined when calling postAddresses.');
            }
            const localVarPath = `/addresses`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new FormData();
            if (salutation !== undefined) {
                localVarFormParams.append('salutation', salutation);
            }
            if (firstname !== undefined) {
                localVarFormParams.append('firstname', firstname);
            }
            if (lastname !== undefined) {
                localVarFormParams.append('lastname', lastname);
            }
            if (companyName !== undefined) {
                localVarFormParams.append('company_name', companyName);
            }
            if (email !== undefined) {
                localVarFormParams.append('email', email);
            }
            if (phone !== undefined) {
                localVarFormParams.append('phone', phone);
            }
            if (address !== undefined) {
                localVarFormParams.append('address', address);
            }
            if (addressTwo !== undefined) {
                localVarFormParams.append('address_two', addressTwo);
            }
            if (addressThree !== undefined) {
                localVarFormParams.append('address_three', addressThree);
            }
            if (city !== undefined) {
                localVarFormParams.append('city', city);
            }
            if (state !== undefined) {
                localVarFormParams.append('state', state);
            }
            if (postalCode !== undefined) {
                localVarFormParams.append('postal_code', postalCode);
            }
            if (countryId !== undefined) {
                localVarFormParams.append('country_id', countryId);
            }
            if (shipping !== undefined) {
                localVarFormParams.append('shipping', shipping);
            }
            if (userId !== undefined) {
                localVarFormParams.append('user_id', userId);
            }
            if (customerId !== undefined) {
                localVarFormParams.append('customer_id', customerId);
            }
            if (billing !== undefined) {
                localVarFormParams.append('billing', billing);
            }
            if (_default !== undefined) {
                localVarFormParams.append('default', _default);
            }
            if (lastUsedAt !== undefined) {
                localVarFormParams.append('last_used_at', lastUsedAt);
            }
            if (deliveryInstructions !== undefined) {
                localVarFormParams.append('delivery_instructions', deliveryInstructions);
            }
            if (meta) {
                localVarFormParams.append('meta', meta.join(base_1.COLLECTION_FORMATS.csv));
            }
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            localVarUrlObj.query = Object.assign(Object.assign(Object.assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = localVarFormParams;
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * This endpoint allows you to update an existing address
         * @summary Update existing address
         * @param {string} addressId
         * @param {UpdateAddressBody} [updateAddressBody]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putAddresses: (addressId, updateAddressBody, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'addressId' is not null or undefined
            if (addressId === null || addressId === undefined) {
                throw new base_1.RequiredError('addressId', 'Required parameter addressId was null or undefined when calling putAddresses.');
            }
            const localVarPath = `/addresses/{addressId}`
                .replace(`{${"addressId"}}`, encodeURIComponent(String(addressId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PUT' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/javascript';
            localVarUrlObj.query = Object.assign(Object.assign(Object.assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            const needsSerialization = (typeof updateAddressBody !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(updateAddressBody !== undefined ? updateAddressBody : {}) : (updateAddressBody || "");
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * AddressesApi - functional programming interface
 * @export
 */
exports.AddressesApiFp = function (configuration) {
    return {
        /**
         * Delete an existing address
         * @summary
         * @param {string} addressId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAddressesAddressId(addressId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.AddressesApiAxiosParamCreator(configuration).deleteAddressesAddressId(addressId, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
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
        postAddresses(firstname, lastname, address, city, state, postalCode, countryId, salutation, companyName, email, phone, addressTwo, addressThree, shipping, userId, customerId, billing, _default, lastUsedAt, deliveryInstructions, meta, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.AddressesApiAxiosParamCreator(configuration).postAddresses(firstname, lastname, address, city, state, postalCode, countryId, salutation, companyName, email, phone, addressTwo, addressThree, shipping, userId, customerId, billing, _default, lastUsedAt, deliveryInstructions, meta, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * This endpoint allows you to update an existing address
         * @summary Update existing address
         * @param {string} addressId
         * @param {UpdateAddressBody} [updateAddressBody]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putAddresses(addressId, updateAddressBody, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.AddressesApiAxiosParamCreator(configuration).putAddresses(addressId, updateAddressBody, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
    };
};
/**
 * AddressesApi - factory interface
 * @export
 */
exports.AddressesApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Delete an existing address
         * @summary
         * @param {string} addressId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAddressesAddressId(addressId, options) {
            return exports.AddressesApiFp(configuration).deleteAddressesAddressId(addressId, options).then((request) => request(axios, basePath));
        },
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
        postAddresses(firstname, lastname, address, city, state, postalCode, countryId, salutation, companyName, email, phone, addressTwo, addressThree, shipping, userId, customerId, billing, _default, lastUsedAt, deliveryInstructions, meta, options) {
            return exports.AddressesApiFp(configuration).postAddresses(firstname, lastname, address, city, state, postalCode, countryId, salutation, companyName, email, phone, addressTwo, addressThree, shipping, userId, customerId, billing, _default, lastUsedAt, deliveryInstructions, meta, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows you to update an existing address
         * @summary Update existing address
         * @param {string} addressId
         * @param {UpdateAddressBody} [updateAddressBody]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putAddresses(addressId, updateAddressBody, options) {
            return exports.AddressesApiFp(configuration).putAddresses(addressId, updateAddressBody, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * AddressesApi - object-oriented interface
 * @export
 * @class AddressesApi
 * @extends {BaseAPI}
 */
class AddressesApi extends base_1.BaseAPI {
    /**
     * Delete an existing address
     * @summary
     * @param {string} addressId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    deleteAddressesAddressId(addressId, options) {
        return exports.AddressesApiFp(this.configuration).deleteAddressesAddressId(addressId, options).then((request) => request(this.axios, this.basePath));
    }
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
    postAddresses(firstname, lastname, address, city, state, postalCode, countryId, salutation, companyName, email, phone, addressTwo, addressThree, shipping, userId, customerId, billing, _default, lastUsedAt, deliveryInstructions, meta, options) {
        return exports.AddressesApiFp(this.configuration).postAddresses(firstname, lastname, address, city, state, postalCode, countryId, salutation, companyName, email, phone, addressTwo, addressThree, shipping, userId, customerId, billing, _default, lastUsedAt, deliveryInstructions, meta, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This endpoint allows you to update an existing address
     * @summary Update existing address
     * @param {string} addressId
     * @param {UpdateAddressBody} [updateAddressBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    putAddresses(addressId, updateAddressBody, options) {
        return exports.AddressesApiFp(this.configuration).putAddresses(addressId, updateAddressBody, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.AddressesApi = AddressesApi;
