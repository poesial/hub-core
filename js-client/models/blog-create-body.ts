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


import { ShippingShippingMethodIdName } from './shipping-shipping-method-id-name';

/**
 *
 * @export
 * @interface BlogCreateBody
 */
export interface BlogCreateBody {
    /**
     *
     * @type {ShippingShippingMethodIdName}
     * @memberof BlogCreateBody
     */
    name: ShippingShippingMethodIdName;
    /**
     *
     * @type {string}
     * @memberof BlogCreateBody
     */
    url: string;
    /**
     *
     * @type {number}
     * @memberof BlogCreateBody
     */
    stock: number;
    /**
     *
     * @type {string}
     * @memberof BlogCreateBody
     */
    family_id: string;
    /**
     *
     * @type {number}
     * @memberof BlogCreateBody
     */
    price: number;
    /**
     *
     * @type {string}
     * @memberof BlogCreateBody
     */
    sku: string;
}


