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


import { CreateBasketLinesBodyVariants } from './create-basket-lines-body-variants';

/**
 *
 * @export
 * @interface CreateBasketLinesBody
 */
export interface CreateBasketLinesBody {
    /**
     *
     * @type {Array<CreateBasketLinesBodyVariants>}
     * @memberof CreateBasketLinesBody
     */
    variants?: Array<CreateBasketLinesBodyVariants>;
    /**
     *
     * @type {string}
     * @memberof CreateBasketLinesBody
     */
    basket_id?: string;
}


