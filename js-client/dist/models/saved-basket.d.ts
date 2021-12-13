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
import { BasketResponse } from './basket-response';
/**
 *
 * @export
 * @interface SavedBasket
 */
export interface SavedBasket {
    /**
     *
     * @type {string}
     * @memberof SavedBasket
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof SavedBasket
     */
    name?: string;
    /**
     *
     * @type {BasketResponse}
     * @memberof SavedBasket
     */
    basket?: BasketResponse;
}
