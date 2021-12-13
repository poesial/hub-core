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
import { InlineObject33 } from '../models';
import { InlineObject34 } from '../models';
import { TagCollection } from '../models';
import { TagResponse } from '../models';
/**
 * TagsApi - axios parameter creator
 * @export
 */
export declare const TagsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Deletes a tag by it\'s ID
     * @summary Delete a tag
     * @param {string} tagId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTagsTagId: (tagId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Get paginated list of tags
     * @summary Get all tags
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTags: (options?: any) => Promise<RequestArgs>;
    /**
     * Gets a tag by it\'s ID
     * @summary Get a tag
     * @param {string} tagId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTagsTagId: (tagId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Create a new tag
     * @summary
     * @param {InlineObject33} [inlineObject33]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postTags: (inlineObject33?: InlineObject33, options?: any) => Promise<RequestArgs>;
    /**
     * Updates a tag by it\'s ID
     * @summary Update a tag
     * @param {string} tagId
     * @param {InlineObject34} [inlineObject34]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putTagsTagId: (tagId: string, inlineObject34?: InlineObject34, options?: any) => Promise<RequestArgs>;
};
/**
 * TagsApi - functional programming interface
 * @export
 */
export declare const TagsApiFp: (configuration?: Configuration) => {
    /**
     * Deletes a tag by it\'s ID
     * @summary Delete a tag
     * @param {string} tagId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTagsTagId(tagId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Get paginated list of tags
     * @summary Get all tags
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTags(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagCollection>>;
    /**
     * Gets a tag by it\'s ID
     * @summary Get a tag
     * @param {string} tagId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTagsTagId(tagId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagResponse>>;
    /**
     * Create a new tag
     * @summary
     * @param {InlineObject33} [inlineObject33]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postTags(inlineObject33?: InlineObject33, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagResponse>>;
    /**
     * Updates a tag by it\'s ID
     * @summary Update a tag
     * @param {string} tagId
     * @param {InlineObject34} [inlineObject34]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putTagsTagId(tagId: string, inlineObject34?: InlineObject34, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagResponse>>;
};
/**
 * TagsApi - factory interface
 * @export
 */
export declare const TagsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Deletes a tag by it\'s ID
     * @summary Delete a tag
     * @param {string} tagId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTagsTagId(tagId: string, options?: any): AxiosPromise<void>;
    /**
     * Get paginated list of tags
     * @summary Get all tags
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTags(options?: any): AxiosPromise<TagCollection>;
    /**
     * Gets a tag by it\'s ID
     * @summary Get a tag
     * @param {string} tagId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTagsTagId(tagId: string, options?: any): AxiosPromise<TagResponse>;
    /**
     * Create a new tag
     * @summary
     * @param {InlineObject33} [inlineObject33]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postTags(inlineObject33?: InlineObject33, options?: any): AxiosPromise<TagResponse>;
    /**
     * Updates a tag by it\'s ID
     * @summary Update a tag
     * @param {string} tagId
     * @param {InlineObject34} [inlineObject34]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putTagsTagId(tagId: string, inlineObject34?: InlineObject34, options?: any): AxiosPromise<TagResponse>;
};
/**
 * TagsApi - object-oriented interface
 * @export
 * @class TagsApi
 * @extends {BaseAPI}
 */
export declare class TagsApi extends BaseAPI {
    /**
     * Deletes a tag by it\'s ID
     * @summary Delete a tag
     * @param {string} tagId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    deleteTagsTagId(tagId: string, options?: any): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Get paginated list of tags
     * @summary Get all tags
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    getTags(options?: any): Promise<import("axios").AxiosResponse<TagCollection, any>>;
    /**
     * Gets a tag by it\'s ID
     * @summary Get a tag
     * @param {string} tagId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    getTagsTagId(tagId: string, options?: any): Promise<import("axios").AxiosResponse<TagResponse, any>>;
    /**
     * Create a new tag
     * @summary
     * @param {InlineObject33} [inlineObject33]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    postTags(inlineObject33?: InlineObject33, options?: any): Promise<import("axios").AxiosResponse<TagResponse, any>>;
    /**
     * Updates a tag by it\'s ID
     * @summary Update a tag
     * @param {string} tagId
     * @param {InlineObject34} [inlineObject34]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    putTagsTagId(tagId: string, inlineObject34?: InlineObject34, options?: any): Promise<import("axios").AxiosResponse<TagResponse, any>>;
}
