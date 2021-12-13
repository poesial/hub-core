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



/**
 *
 * @export
 * @interface CreateUserBody
 */
export interface CreateUserBody {
    /**
     *
     * @type {string}
     * @memberof CreateUserBody
     */
    email: string;
    /**
     *
     * @type {string}
     * @memberof CreateUserBody
     */
    firstname: string;
    /**
     *
     * @type {string}
     * @memberof CreateUserBody
     */
    lastname: string;
    /**
     *
     * @type {string}
     * @memberof CreateUserBody
     */
    password: string;
    /**
     *
     * @type {string}
     * @memberof CreateUserBody
     */
    password_confirmation: string;
    /**
     *
     * @type {string}
     * @memberof CreateUserBody
     */
    customer_id?: string;
}


