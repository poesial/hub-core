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
exports.ProductVariantsApi = exports.ProductVariantsApiFactory = exports.ProductVariantsApiFp = exports.ProductVariantsApiAxiosParamCreator = void 0;
const globalImportUrl = require("url");
const axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
const base_1 = require("../base");
/**
 * ProductVariantsApi - axios parameter creator
 * @export
 */
exports.ProductVariantsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Delete a product variant by it\'s ID
         * @summary Delete a Product Variant
         * @param {string} productVariantId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProductVariant: (productVariantId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'productVariantId' is not null or undefined
            if (productVariantId === null || productVariantId === undefined) {
                throw new base_1.RequiredError('productVariantId', 'Required parameter productVariantId was null or undefined when calling deleteProductVariant.');
            }
            const localVarPath = `/products/variants/{productVariantId}`
                .replace(`{${"productVariantId"}}`, encodeURIComponent(String(productVariantId)));
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
         * Get a paginated list of all product variants in the system
         * @summary Get Product Variants
         * @param {string} [include]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductsVariants: (include, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/products/variants`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (include !== undefined) {
                localVarQueryParameter['include'] = include;
            }
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
         * Get a product variant by it\'s ID
         * @summary Get Product Variant
         * @param {string} productVariantId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductsVariantsProductVariantId: (productVariantId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'productVariantId' is not null or undefined
            if (productVariantId === null || productVariantId === undefined) {
                throw new base_1.RequiredError('productVariantId', 'Required parameter productVariantId was null or undefined when calling getProductsVariantsProductVariantId.');
            }
            const localVarPath = `/products/variants/{productVariantId}`
                .replace(`{${"productVariantId"}}`, encodeURIComponent(String(productVariantId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
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
         * Create product variants
         * @summary Post Product Variants
         * @param {string} productId
         * @param {string} [include]
         * @param {ProductVariantsCreateBody} [productVariantsCreateBody]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postProductVariants: (productId, include, productVariantsCreateBody, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'productId' is not null or undefined
            if (productId === null || productId === undefined) {
                throw new base_1.RequiredError('productId', 'Required parameter productId was null or undefined when calling postProductVariants.');
            }
            const localVarPath = `/products/{productId}/variants`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (include !== undefined) {
                localVarQueryParameter['include'] = include;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign(Object.assign(Object.assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            const needsSerialization = (typeof productVariantsCreateBody !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(productVariantsCreateBody !== undefined ? productVariantsCreateBody : {}) : (productVariantsCreateBody || "");
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Request to update a product variants inventory.
         * @summary Update ProductVariant Inventory
         * @param {string} productVariantId
         * @param {InlineObject16} [inlineObject16]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putProductsVariantsProductVariantIdInventory: (productVariantId, inlineObject16, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'productVariantId' is not null or undefined
            if (productVariantId === null || productVariantId === undefined) {
                throw new base_1.RequiredError('productVariantId', 'Required parameter productVariantId was null or undefined when calling putProductsVariantsProductVariantIdInventory.');
            }
            const localVarPath = `/products/variants/{productVariantId}/inventory`
                .replace(`{${"productVariantId"}}`, encodeURIComponent(String(productVariantId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PUT' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign(Object.assign(Object.assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            const needsSerialization = (typeof inlineObject16 !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(inlineObject16 !== undefined ? inlineObject16 : {}) : (inlineObject16 || "");
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * ProductVariantsApi - functional programming interface
 * @export
 */
exports.ProductVariantsApiFp = function (configuration) {
    return {
        /**
         * Delete a product variant by it\'s ID
         * @summary Delete a Product Variant
         * @param {string} productVariantId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProductVariant(productVariantId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.ProductVariantsApiAxiosParamCreator(configuration).deleteProductVariant(productVariantId, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Get a paginated list of all product variants in the system
         * @summary Get Product Variants
         * @param {string} [include]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductsVariants(include, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.ProductVariantsApiAxiosParamCreator(configuration).getProductsVariants(include, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Get a product variant by it\'s ID
         * @summary Get Product Variant
         * @param {string} productVariantId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductsVariantsProductVariantId(productVariantId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.ProductVariantsApiAxiosParamCreator(configuration).getProductsVariantsProductVariantId(productVariantId, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Create product variants
         * @summary Post Product Variants
         * @param {string} productId
         * @param {string} [include]
         * @param {ProductVariantsCreateBody} [productVariantsCreateBody]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postProductVariants(productId, include, productVariantsCreateBody, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.ProductVariantsApiAxiosParamCreator(configuration).postProductVariants(productId, include, productVariantsCreateBody, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Request to update a product variants inventory.
         * @summary Update ProductVariant Inventory
         * @param {string} productVariantId
         * @param {InlineObject16} [inlineObject16]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putProductsVariantsProductVariantIdInventory(productVariantId, inlineObject16, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.ProductVariantsApiAxiosParamCreator(configuration).putProductsVariantsProductVariantIdInventory(productVariantId, inlineObject16, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
    };
};
/**
 * ProductVariantsApi - factory interface
 * @export
 */
exports.ProductVariantsApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Delete a product variant by it\'s ID
         * @summary Delete a Product Variant
         * @param {string} productVariantId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProductVariant(productVariantId, options) {
            return exports.ProductVariantsApiFp(configuration).deleteProductVariant(productVariantId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a paginated list of all product variants in the system
         * @summary Get Product Variants
         * @param {string} [include]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductsVariants(include, options) {
            return exports.ProductVariantsApiFp(configuration).getProductsVariants(include, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a product variant by it\'s ID
         * @summary Get Product Variant
         * @param {string} productVariantId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductsVariantsProductVariantId(productVariantId, options) {
            return exports.ProductVariantsApiFp(configuration).getProductsVariantsProductVariantId(productVariantId, options).then((request) => request(axios, basePath));
        },
        /**
         * Create product variants
         * @summary Post Product Variants
         * @param {string} productId
         * @param {string} [include]
         * @param {ProductVariantsCreateBody} [productVariantsCreateBody]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postProductVariants(productId, include, productVariantsCreateBody, options) {
            return exports.ProductVariantsApiFp(configuration).postProductVariants(productId, include, productVariantsCreateBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Request to update a product variants inventory.
         * @summary Update ProductVariant Inventory
         * @param {string} productVariantId
         * @param {InlineObject16} [inlineObject16]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putProductsVariantsProductVariantIdInventory(productVariantId, inlineObject16, options) {
            return exports.ProductVariantsApiFp(configuration).putProductsVariantsProductVariantIdInventory(productVariantId, inlineObject16, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * ProductVariantsApi - object-oriented interface
 * @export
 * @class ProductVariantsApi
 * @extends {BaseAPI}
 */
class ProductVariantsApi extends base_1.BaseAPI {
    /**
     * Delete a product variant by it\'s ID
     * @summary Delete a Product Variant
     * @param {string} productVariantId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductVariantsApi
     */
    deleteProductVariant(productVariantId, options) {
        return exports.ProductVariantsApiFp(this.configuration).deleteProductVariant(productVariantId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get a paginated list of all product variants in the system
     * @summary Get Product Variants
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductVariantsApi
     */
    getProductsVariants(include, options) {
        return exports.ProductVariantsApiFp(this.configuration).getProductsVariants(include, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get a product variant by it\'s ID
     * @summary Get Product Variant
     * @param {string} productVariantId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductVariantsApi
     */
    getProductsVariantsProductVariantId(productVariantId, options) {
        return exports.ProductVariantsApiFp(this.configuration).getProductsVariantsProductVariantId(productVariantId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create product variants
     * @summary Post Product Variants
     * @param {string} productId
     * @param {string} [include]
     * @param {ProductVariantsCreateBody} [productVariantsCreateBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductVariantsApi
     */
    postProductVariants(productId, include, productVariantsCreateBody, options) {
        return exports.ProductVariantsApiFp(this.configuration).postProductVariants(productId, include, productVariantsCreateBody, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Request to update a product variants inventory.
     * @summary Update ProductVariant Inventory
     * @param {string} productVariantId
     * @param {InlineObject16} [inlineObject16]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductVariantsApi
     */
    putProductsVariantsProductVariantIdInventory(productVariantId, inlineObject16, options) {
        return exports.ProductVariantsApiFp(this.configuration).putProductsVariantsProductVariantIdInventory(productVariantId, inlineObject16, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.ProductVariantsApi = ProductVariantsApi;
