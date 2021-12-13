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
import { BlogVariantsCreateBodyOptions1 } from './blog-variants-create-body-options1';
import { BlogVariantsCreateBodyVariants } from './blog-variants-create-body-variants';
/**
 *
 * @export
 * @interface BlogVariantsCreateBody
 */
export interface BlogVariantsCreateBody {
    /**
     *
     * @type {Array<BlogVariantsCreateBodyOptions1>}
     * @memberof BlogVariantsCreateBody
     */
    options?: Array<BlogVariantsCreateBodyOptions1>;
    /**
     *
     * @type {Array<BlogVariantsCreateBodyVariants>}
     * @memberof BlogVariantsCreateBody
     */
    variants?: Array<BlogVariantsCreateBodyVariants>;
}
