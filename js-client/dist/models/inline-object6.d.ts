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
import { DiscountsDiscountIdChannels } from './discounts-discount-id-channels';
import { DiscountsDiscountIdRewards } from './discounts-discount-id-rewards';
import { DiscountsDiscountIdSets } from './discounts-discount-id-sets';
/**
 *
 * @export
 * @interface InlineObject6
 */
export interface InlineObject6 {
    /**
     *
     * @type {string}
     * @memberof InlineObject6
     */
    start_at: string;
    /**
     *
     * @type {string}
     * @memberof InlineObject6
     */
    end_at?: string;
    /**
     *
     * @type {number}
     * @memberof InlineObject6
     */
    priority?: number;
    /**
     *
     * @type {boolean}
     * @memberof InlineObject6
     */
    stop_rules?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof InlineObject6
     */
    status?: boolean;
    /**
     *
     * @type {DiscountsDiscountIdChannels}
     * @memberof InlineObject6
     */
    channels?: DiscountsDiscountIdChannels;
    /**
     *
     * @type {DiscountsDiscountIdRewards}
     * @memberof InlineObject6
     */
    rewards?: DiscountsDiscountIdRewards;
    /**
     *
     * @type {DiscountsDiscountIdSets}
     * @memberof InlineObject6
     */
    sets?: DiscountsDiscountIdSets;
}
