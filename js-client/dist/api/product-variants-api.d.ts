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
import { InlineObject16 } from '../models';
import { ProductVariantCollection } from '../models';
import { ProductVariantResponse } from '../models';
import { ProductVariantsCreateBody } from '../models';
/**
 * ProductVariantsApi - axios parameter creator
 * @export
 */
export declare const ProductVariantsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Delete a product variant by it\'s ID
     * @summary Delete a Product Variant
     * @param {string} productVariantId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProductVariant: (productVariantId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Get a paginated list of all product variants in the system
     * @summary Get Product Variants
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProductsVariants: (include?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Get a product variant by it\'s ID
     * @summary Get Product Variant
     * @param {string} productVariantId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProductsVariantsProductVariantId: (productVariantId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Create product variants
     * @summary Post Product Variants
     * @param {string} productId
     * @param {string} [include]
     * @param {ProductVariantsCreateBody} [productVariantsCreateBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postProductVariants: (productId: string, include?: string, productVariantsCreateBody?: ProductVariantsCreateBody, options?: any) => Promise<RequestArgs>;
    /**
     * Request to update a product variants inventory.
     * @summary Update ProductVariant Inventory
     * @param {string} productVariantId
     * @param {InlineObject16} [inlineObject16]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putProductsVariantsProductVariantIdInventory: (productVariantId: string, inlineObject16?: InlineObject16, options?: any) => Promise<RequestArgs>;
};
/**
 * ProductVariantsApi - functional programming interface
 * @export
 */
export declare const ProductVariantsApiFp: (configuration?: Configuration) => {
    /**
     * Delete a product variant by it\'s ID
     * @summary Delete a Product Variant
     * @param {string} productVariantId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProductVariant(productVariantId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Get a paginated list of all product variants in the system
     * @summary Get Product Variants
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProductsVariants(include?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductVariantCollection>>;
    /**
     * Get a product variant by it\'s ID
     * @summary Get Product Variant
     * @param {string} productVariantId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProductsVariantsProductVariantId(productVariantId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductVariantResponse>>;
    /**
     * Create product variants
     * @summary Post Product Variants
     * @param {string} productId
     * @param {string} [include]
     * @param {ProductVariantsCreateBody} [productVariantsCreateBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postProductVariants(productId: string, include?: string, productVariantsCreateBody?: ProductVariantsCreateBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductVariantCollection>>;
    /**
     * Request to update a product variants inventory.
     * @summary Update ProductVariant Inventory
     * @param {string} productVariantId
     * @param {InlineObject16} [inlineObject16]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putProductsVariantsProductVariantIdInventory(productVariantId: string, inlineObject16?: InlineObject16, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductVariantResponse>>;
};
/**
 * ProductVariantsApi - factory interface
 * @export
 */
export declare const ProductVariantsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Delete a product variant by it\'s ID
     * @summary Delete a Product Variant
     * @param {string} productVariantId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProductVariant(productVariantId: string, options?: any): AxiosPromise<void>;
    /**
     * Get a paginated list of all product variants in the system
     * @summary Get Product Variants
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProductsVariants(include?: string, options?: any): AxiosPromise<ProductVariantCollection>;
    /**
     * Get a product variant by it\'s ID
     * @summary Get Product Variant
     * @param {string} productVariantId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProductsVariantsProductVariantId(productVariantId: string, options?: any): AxiosPromise<ProductVariantResponse>;
    /**
     * Create product variants
     * @summary Post Product Variants
     * @param {string} productId
     * @param {string} [include]
     * @param {ProductVariantsCreateBody} [productVariantsCreateBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postProductVariants(productId: string, include?: string, productVariantsCreateBody?: ProductVariantsCreateBody, options?: any): AxiosPromise<ProductVariantCollection>;
    /**
     * Request to update a product variants inventory.
     * @summary Update ProductVariant Inventory
     * @param {string} productVariantId
     * @param {InlineObject16} [inlineObject16]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putProductsVariantsProductVariantIdInventory(productVariantId: string, inlineObject16?: InlineObject16, options?: any): AxiosPromise<ProductVariantResponse>;
};
/**
 * ProductVariantsApi - object-oriented interface
 * @export
 * @class ProductVariantsApi
 * @extends {BaseAPI}
 */
export declare class ProductVariantsApi extends BaseAPI {
    /**
     * Delete a product variant by it\'s ID
     * @summary Delete a Product Variant
     * @param {string} productVariantId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductVariantsApi
     */
    deleteProductVariant(productVariantId: string, options?: any): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Get a paginated list of all product variants in the system
     * @summary Get Product Variants
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductVariantsApi
     */
    getProductsVariants(include?: string, options?: any): Promise<import("axios").AxiosResponse<ProductVariantCollection, any>>;
    /**
     * Get a product variant by it\'s ID
     * @summary Get Product Variant
     * @param {string} productVariantId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductVariantsApi
     */
    getProductsVariantsProductVariantId(productVariantId: string, options?: any): Promise<import("axios").AxiosResponse<ProductVariantResponse, any>>;
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
    postProductVariants(productId: string, include?: string, productVariantsCreateBody?: ProductVariantsCreateBody, options?: any): Promise<import("axios").AxiosResponse<ProductVariantCollection, any>>;
    /**
     * Request to update a product variants inventory.
     * @summary Update ProductVariant Inventory
     * @param {string} productVariantId
     * @param {InlineObject16} [inlineObject16]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductVariantsApi
     */
    putProductsVariantsProductVariantIdInventory(productVariantId: string, inlineObject16?: InlineObject16, options?: any): Promise<import("axios").AxiosResponse<ProductVariantResponse, any>>;
}
