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
import { InlineObject26 } from '../models';
import { InlineObject27 } from '../models';
import { InlineObject28 } from '../models';
import { InlineObject29 } from '../models';
import { InlineObject30 } from '../models';
import { InlineObject31 } from '../models';
import { InlineObject32 } from '../models';
import { InlineResponse2007 } from '../models';
import { ShippingMethodCollection } from '../models';
import { ShippingMethodResponse } from '../models';
import { ShippingPriceResponse } from '../models';
import { ShippingZoneCollection } from '../models';
import { ShippingZoneResponse } from '../models';
/**
 * ShippingApi - axios parameter creator
 * @export
 */
export declare const ShippingApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Deletes a shipping method.
     * @summary Delete shipping method
     * @param {string} shippingMethodId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteShippingShippingMethodId: (shippingMethodId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Returns a paginated list of shipping methods
     * @summary Get shipping methods
     * @param {number} [perPage]
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getShipping: (perPage?: number, include?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Returns a shipping method by it\'s ID.
     * @summary Get shipping methods
     * @param {string} shippingMethodId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getShippingShippingMethodId: (shippingMethodId: string, include?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Returns a paginated list of shipping zones.
     * @summary Get Shipping Zones
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getShippingZones: (include?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Get a shipping zone by it\'s ID.
     * @summary Get Shipping Zone
     * @param {string} shippingZoneId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getShippingZonesShippingZoneId: (shippingZoneId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Create a new shipping method.
     * @summary Create shipping method
     * @param {InlineObject26} [inlineObject26]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postShipping: (inlineObject26?: InlineObject26, options?: any) => Promise<RequestArgs>;
    /**
     * Add a price to a shipping method.
     * @summary Add shipping price
     * @param {string} shippingMethodId
     * @param {InlineObject29} [inlineObject29]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postShippingIdPrices: (shippingMethodId: string, inlineObject29?: InlineObject29, options?: any) => Promise<RequestArgs>;
    /**
     * Create a new shipping zone
     * @summary Create Shipping Zone
     * @param {InlineObject28} [inlineObject28]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postShippingZones: (inlineObject28?: InlineObject28, options?: any) => Promise<RequestArgs>;
    /**
     * Update shipping method users
     * @summary Update shipping method users
     * @param {string} id
     * @param {InlineObject32} [inlineObject32]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putShippingIdUsers: (id: string, inlineObject32?: InlineObject32, options?: any) => Promise<RequestArgs>;
    /**
     * Update a shipping price
     * @summary Update shipping price
     * @param {string} shippingPriceId
     * @param {InlineObject30} [inlineObject30]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putShippingPricesShippingPriceId: (shippingPriceId: string, inlineObject30?: InlineObject30, options?: any) => Promise<RequestArgs>;
    /**
     * Update shipping method by it\'s ID
     * @summary Update shipping method
     * @param {string} shippingMethodId
     * @param {InlineObject27} [inlineObject27]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putShippingShippingMethodId: (shippingMethodId: string, inlineObject27?: InlineObject27, options?: any) => Promise<RequestArgs>;
    /**
     * Update a shipping method\'s zones.
     * @summary Update shipping method zones
     * @param {string} shippingMethodId
     * @param {InlineObject31} [inlineObject31]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putShippingShippingMethodIdZones: (shippingMethodId: string, inlineObject31?: InlineObject31, options?: any) => Promise<RequestArgs>;
};
/**
 * ShippingApi - functional programming interface
 * @export
 */
export declare const ShippingApiFp: (configuration?: Configuration) => {
    /**
     * Deletes a shipping method.
     * @summary Delete shipping method
     * @param {string} shippingMethodId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteShippingShippingMethodId(shippingMethodId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Returns a paginated list of shipping methods
     * @summary Get shipping methods
     * @param {number} [perPage]
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getShipping(perPage?: number, include?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShippingMethodCollection>>;
    /**
     * Returns a shipping method by it\'s ID.
     * @summary Get shipping methods
     * @param {string} shippingMethodId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getShippingShippingMethodId(shippingMethodId: string, include?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShippingMethodResponse>>;
    /**
     * Returns a paginated list of shipping zones.
     * @summary Get Shipping Zones
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getShippingZones(include?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShippingZoneCollection>>;
    /**
     * Get a shipping zone by it\'s ID.
     * @summary Get Shipping Zone
     * @param {string} shippingZoneId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getShippingZonesShippingZoneId(shippingZoneId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShippingZoneResponse>>;
    /**
     * Create a new shipping method.
     * @summary Create shipping method
     * @param {InlineObject26} [inlineObject26]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postShipping(inlineObject26?: InlineObject26, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2007>>;
    /**
     * Add a price to a shipping method.
     * @summary Add shipping price
     * @param {string} shippingMethodId
     * @param {InlineObject29} [inlineObject29]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postShippingIdPrices(shippingMethodId: string, inlineObject29?: InlineObject29, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShippingPriceResponse>>;
    /**
     * Create a new shipping zone
     * @summary Create Shipping Zone
     * @param {InlineObject28} [inlineObject28]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postShippingZones(inlineObject28?: InlineObject28, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShippingZoneResponse>>;
    /**
     * Update shipping method users
     * @summary Update shipping method users
     * @param {string} id
     * @param {InlineObject32} [inlineObject32]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putShippingIdUsers(id: string, inlineObject32?: InlineObject32, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShippingMethodResponse>>;
    /**
     * Update a shipping price
     * @summary Update shipping price
     * @param {string} shippingPriceId
     * @param {InlineObject30} [inlineObject30]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putShippingPricesShippingPriceId(shippingPriceId: string, inlineObject30?: InlineObject30, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShippingPriceResponse>>;
    /**
     * Update shipping method by it\'s ID
     * @summary Update shipping method
     * @param {string} shippingMethodId
     * @param {InlineObject27} [inlineObject27]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putShippingShippingMethodId(shippingMethodId: string, inlineObject27?: InlineObject27, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShippingMethodResponse>>;
    /**
     * Update a shipping method\'s zones.
     * @summary Update shipping method zones
     * @param {string} shippingMethodId
     * @param {InlineObject31} [inlineObject31]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putShippingShippingMethodIdZones(shippingMethodId: string, inlineObject31?: InlineObject31, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShippingMethodResponse>>;
};
/**
 * ShippingApi - factory interface
 * @export
 */
export declare const ShippingApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Deletes a shipping method.
     * @summary Delete shipping method
     * @param {string} shippingMethodId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteShippingShippingMethodId(shippingMethodId: string, options?: any): AxiosPromise<void>;
    /**
     * Returns a paginated list of shipping methods
     * @summary Get shipping methods
     * @param {number} [perPage]
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getShipping(perPage?: number, include?: string, options?: any): AxiosPromise<ShippingMethodCollection>;
    /**
     * Returns a shipping method by it\'s ID.
     * @summary Get shipping methods
     * @param {string} shippingMethodId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getShippingShippingMethodId(shippingMethodId: string, include?: string, options?: any): AxiosPromise<ShippingMethodResponse>;
    /**
     * Returns a paginated list of shipping zones.
     * @summary Get Shipping Zones
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getShippingZones(include?: string, options?: any): AxiosPromise<ShippingZoneCollection>;
    /**
     * Get a shipping zone by it\'s ID.
     * @summary Get Shipping Zone
     * @param {string} shippingZoneId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getShippingZonesShippingZoneId(shippingZoneId: string, options?: any): AxiosPromise<ShippingZoneResponse>;
    /**
     * Create a new shipping method.
     * @summary Create shipping method
     * @param {InlineObject26} [inlineObject26]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postShipping(inlineObject26?: InlineObject26, options?: any): AxiosPromise<InlineResponse2007>;
    /**
     * Add a price to a shipping method.
     * @summary Add shipping price
     * @param {string} shippingMethodId
     * @param {InlineObject29} [inlineObject29]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postShippingIdPrices(shippingMethodId: string, inlineObject29?: InlineObject29, options?: any): AxiosPromise<ShippingPriceResponse>;
    /**
     * Create a new shipping zone
     * @summary Create Shipping Zone
     * @param {InlineObject28} [inlineObject28]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postShippingZones(inlineObject28?: InlineObject28, options?: any): AxiosPromise<ShippingZoneResponse>;
    /**
     * Update shipping method users
     * @summary Update shipping method users
     * @param {string} id
     * @param {InlineObject32} [inlineObject32]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putShippingIdUsers(id: string, inlineObject32?: InlineObject32, options?: any): AxiosPromise<ShippingMethodResponse>;
    /**
     * Update a shipping price
     * @summary Update shipping price
     * @param {string} shippingPriceId
     * @param {InlineObject30} [inlineObject30]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putShippingPricesShippingPriceId(shippingPriceId: string, inlineObject30?: InlineObject30, options?: any): AxiosPromise<ShippingPriceResponse>;
    /**
     * Update shipping method by it\'s ID
     * @summary Update shipping method
     * @param {string} shippingMethodId
     * @param {InlineObject27} [inlineObject27]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putShippingShippingMethodId(shippingMethodId: string, inlineObject27?: InlineObject27, options?: any): AxiosPromise<ShippingMethodResponse>;
    /**
     * Update a shipping method\'s zones.
     * @summary Update shipping method zones
     * @param {string} shippingMethodId
     * @param {InlineObject31} [inlineObject31]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putShippingShippingMethodIdZones(shippingMethodId: string, inlineObject31?: InlineObject31, options?: any): AxiosPromise<ShippingMethodResponse>;
};
/**
 * ShippingApi - object-oriented interface
 * @export
 * @class ShippingApi
 * @extends {BaseAPI}
 */
export declare class ShippingApi extends BaseAPI {
    /**
     * Deletes a shipping method.
     * @summary Delete shipping method
     * @param {string} shippingMethodId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShippingApi
     */
    deleteShippingShippingMethodId(shippingMethodId: string, options?: any): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Returns a paginated list of shipping methods
     * @summary Get shipping methods
     * @param {number} [perPage]
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShippingApi
     */
    getShipping(perPage?: number, include?: string, options?: any): Promise<import("axios").AxiosResponse<ShippingMethodCollection, any>>;
    /**
     * Returns a shipping method by it\'s ID.
     * @summary Get shipping methods
     * @param {string} shippingMethodId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShippingApi
     */
    getShippingShippingMethodId(shippingMethodId: string, include?: string, options?: any): Promise<import("axios").AxiosResponse<ShippingMethodResponse, any>>;
    /**
     * Returns a paginated list of shipping zones.
     * @summary Get Shipping Zones
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShippingApi
     */
    getShippingZones(include?: string, options?: any): Promise<import("axios").AxiosResponse<ShippingZoneCollection, any>>;
    /**
     * Get a shipping zone by it\'s ID.
     * @summary Get Shipping Zone
     * @param {string} shippingZoneId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShippingApi
     */
    getShippingZonesShippingZoneId(shippingZoneId: string, options?: any): Promise<import("axios").AxiosResponse<ShippingZoneResponse, any>>;
    /**
     * Create a new shipping method.
     * @summary Create shipping method
     * @param {InlineObject26} [inlineObject26]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShippingApi
     */
    postShipping(inlineObject26?: InlineObject26, options?: any): Promise<import("axios").AxiosResponse<InlineResponse2007, any>>;
    /**
     * Add a price to a shipping method.
     * @summary Add shipping price
     * @param {string} shippingMethodId
     * @param {InlineObject29} [inlineObject29]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShippingApi
     */
    postShippingIdPrices(shippingMethodId: string, inlineObject29?: InlineObject29, options?: any): Promise<import("axios").AxiosResponse<ShippingPriceResponse, any>>;
    /**
     * Create a new shipping zone
     * @summary Create Shipping Zone
     * @param {InlineObject28} [inlineObject28]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShippingApi
     */
    postShippingZones(inlineObject28?: InlineObject28, options?: any): Promise<import("axios").AxiosResponse<ShippingZoneResponse, any>>;
    /**
     * Update shipping method users
     * @summary Update shipping method users
     * @param {string} id
     * @param {InlineObject32} [inlineObject32]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShippingApi
     */
    putShippingIdUsers(id: string, inlineObject32?: InlineObject32, options?: any): Promise<import("axios").AxiosResponse<ShippingMethodResponse, any>>;
    /**
     * Update a shipping price
     * @summary Update shipping price
     * @param {string} shippingPriceId
     * @param {InlineObject30} [inlineObject30]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShippingApi
     */
    putShippingPricesShippingPriceId(shippingPriceId: string, inlineObject30?: InlineObject30, options?: any): Promise<import("axios").AxiosResponse<ShippingPriceResponse, any>>;
    /**
     * Update shipping method by it\'s ID
     * @summary Update shipping method
     * @param {string} shippingMethodId
     * @param {InlineObject27} [inlineObject27]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShippingApi
     */
    putShippingShippingMethodId(shippingMethodId: string, inlineObject27?: InlineObject27, options?: any): Promise<import("axios").AxiosResponse<ShippingMethodResponse, any>>;
    /**
     * Update a shipping method\'s zones.
     * @summary Update shipping method zones
     * @param {string} shippingMethodId
     * @param {InlineObject31} [inlineObject31]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShippingApi
     */
    putShippingShippingMethodIdZones(shippingMethodId: string, inlineObject31?: InlineObject31, options?: any): Promise<import("axios").AxiosResponse<ShippingMethodResponse, any>>;
}
