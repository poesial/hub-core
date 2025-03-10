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
import { AttributeCollection } from '../models';
import { AttributeGroup } from '../models';
import { AttributeGroupCollection } from '../models';
import { AttributeGroupReorderBody } from '../models';
import { AttributeGroupResponse } from '../models';
import { AttributeResponse } from '../models';
import { AttributesReorderBody } from '../models';
import { CreateAttributeGroupBodyName } from '../models';
import { InlineObject } from '../models';
import { UpdateAttributesBody } from '../models';
/**
 * AttributesApi - axios parameter creator
 * @export
 */
export declare const AttributesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Deletes an attribute group
     * @summary Delete an attribute group
     * @param {string} attributeGroupId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAttributeGroupsAttributeGroupId: (attributeGroupId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Delete an attribute.
     * @summary Delete an attribute
     * @param {string} attributeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAttributesAttributeId: (attributeId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Returns a paginated list of available attribute groups
     * @summary Paginated list of Attribute Groups
     * @param {boolean} [allRecords] Will skip pagination and return all records
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAttributeGroups: (allRecords?: boolean, include?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Gets a single attribute group
     * @summary Get a single attribute group
     * @param {string} attributeGroupId
     * @param {number} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAttributeGroupsAttributeGroupId: (attributeGroupId: string, include?: number, options?: any) => Promise<RequestArgs>;
    /**
     * Return a paged array of attributes
     * @summary Get Attributes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAttributes: (options?: any) => Promise<RequestArgs>;
    /**
     * Returns an attribute from a given ID.
     * @summary Get an attribute
     * @param {string} attributeId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAttributesAttributeId: (attributeId: string, include?: string, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @summary Create an Attribute Group
     * @param {CreateAttributeGroupBodyName} [name]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postAttributeGroups: (name?: CreateAttributeGroupBodyName, options?: any) => Promise<RequestArgs>;
    /**
     * Create a new attribute
     * @summary Create Attribute
     * @param {InlineObject} [inlineObject]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postAttributes: (inlineObject?: InlineObject, options?: any) => Promise<RequestArgs>;
    /**
     * Updates an attribute group.
     * @summary Update an attribute group
     * @param {string} attributeGroupId
     * @param {AttributeGroup} [attributeGroup]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putAttributeGroupsAttributeGroupId: (attributeGroupId: string, attributeGroup?: AttributeGroup, options?: any) => Promise<RequestArgs>;
    /**
     * Sends a request to reorder the attribute groups in the system
     * @summary Reorder attribute groups
     * @param {AttributeGroupReorderBody} [attributeGroupReorderBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putAttributeGroupsReorder: (attributeGroupReorderBody?: AttributeGroupReorderBody, options?: any) => Promise<RequestArgs>;
    /**
     * Updates an attribute from a given ID.
     * @summary Update an attribute
     * @param {string} attributeId
     * @param {UpdateAttributesBody} [updateAttributesBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putAttributesAttributeId: (attributeId: string, updateAttributesBody?: UpdateAttributesBody, options?: any) => Promise<RequestArgs>;
    /**
     * Allows you to reorder a target category in relation to another.
     * @summary Update request to reorder attributes
     * @param {AttributesReorderBody} [attributesReorderBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putAttributesOrder: (attributesReorderBody?: AttributesReorderBody, options?: any) => Promise<RequestArgs>;
};
/**
 * AttributesApi - functional programming interface
 * @export
 */
export declare const AttributesApiFp: (configuration?: Configuration) => {
    /**
     * Deletes an attribute group
     * @summary Delete an attribute group
     * @param {string} attributeGroupId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAttributeGroupsAttributeGroupId(attributeGroupId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Delete an attribute.
     * @summary Delete an attribute
     * @param {string} attributeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAttributesAttributeId(attributeId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Returns a paginated list of available attribute groups
     * @summary Paginated list of Attribute Groups
     * @param {boolean} [allRecords] Will skip pagination and return all records
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAttributeGroups(allRecords?: boolean, include?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AttributeGroupCollection>>;
    /**
     * Gets a single attribute group
     * @summary Get a single attribute group
     * @param {string} attributeGroupId
     * @param {number} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAttributeGroupsAttributeGroupId(attributeGroupId: string, include?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AttributeGroupResponse>>;
    /**
     * Return a paged array of attributes
     * @summary Get Attributes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAttributes(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AttributeCollection>>;
    /**
     * Returns an attribute from a given ID.
     * @summary Get an attribute
     * @param {string} attributeId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAttributesAttributeId(attributeId: string, include?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AttributeResponse>>;
    /**
     *
     * @summary Create an Attribute Group
     * @param {CreateAttributeGroupBodyName} [name]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postAttributeGroups(name?: CreateAttributeGroupBodyName, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AttributeGroupResponse>>;
    /**
     * Create a new attribute
     * @summary Create Attribute
     * @param {InlineObject} [inlineObject]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postAttributes(inlineObject?: InlineObject, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AttributeResponse>>;
    /**
     * Updates an attribute group.
     * @summary Update an attribute group
     * @param {string} attributeGroupId
     * @param {AttributeGroup} [attributeGroup]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putAttributeGroupsAttributeGroupId(attributeGroupId: string, attributeGroup?: AttributeGroup, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AttributeGroupResponse>>;
    /**
     * Sends a request to reorder the attribute groups in the system
     * @summary Reorder attribute groups
     * @param {AttributeGroupReorderBody} [attributeGroupReorderBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putAttributeGroupsReorder(attributeGroupReorderBody?: AttributeGroupReorderBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Updates an attribute from a given ID.
     * @summary Update an attribute
     * @param {string} attributeId
     * @param {UpdateAttributesBody} [updateAttributesBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putAttributesAttributeId(attributeId: string, updateAttributesBody?: UpdateAttributesBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AttributeResponse>>;
    /**
     * Allows you to reorder a target category in relation to another.
     * @summary Update request to reorder attributes
     * @param {AttributesReorderBody} [attributesReorderBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putAttributesOrder(attributesReorderBody?: AttributesReorderBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
/**
 * AttributesApi - factory interface
 * @export
 */
export declare const AttributesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Deletes an attribute group
     * @summary Delete an attribute group
     * @param {string} attributeGroupId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAttributeGroupsAttributeGroupId(attributeGroupId: string, options?: any): AxiosPromise<void>;
    /**
     * Delete an attribute.
     * @summary Delete an attribute
     * @param {string} attributeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAttributesAttributeId(attributeId: string, options?: any): AxiosPromise<void>;
    /**
     * Returns a paginated list of available attribute groups
     * @summary Paginated list of Attribute Groups
     * @param {boolean} [allRecords] Will skip pagination and return all records
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAttributeGroups(allRecords?: boolean, include?: string, options?: any): AxiosPromise<AttributeGroupCollection>;
    /**
     * Gets a single attribute group
     * @summary Get a single attribute group
     * @param {string} attributeGroupId
     * @param {number} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAttributeGroupsAttributeGroupId(attributeGroupId: string, include?: number, options?: any): AxiosPromise<AttributeGroupResponse>;
    /**
     * Return a paged array of attributes
     * @summary Get Attributes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAttributes(options?: any): AxiosPromise<AttributeCollection>;
    /**
     * Returns an attribute from a given ID.
     * @summary Get an attribute
     * @param {string} attributeId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAttributesAttributeId(attributeId: string, include?: string, options?: any): AxiosPromise<AttributeResponse>;
    /**
     *
     * @summary Create an Attribute Group
     * @param {CreateAttributeGroupBodyName} [name]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postAttributeGroups(name?: CreateAttributeGroupBodyName, options?: any): AxiosPromise<AttributeGroupResponse>;
    /**
     * Create a new attribute
     * @summary Create Attribute
     * @param {InlineObject} [inlineObject]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postAttributes(inlineObject?: InlineObject, options?: any): AxiosPromise<AttributeResponse>;
    /**
     * Updates an attribute group.
     * @summary Update an attribute group
     * @param {string} attributeGroupId
     * @param {AttributeGroup} [attributeGroup]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putAttributeGroupsAttributeGroupId(attributeGroupId: string, attributeGroup?: AttributeGroup, options?: any): AxiosPromise<AttributeGroupResponse>;
    /**
     * Sends a request to reorder the attribute groups in the system
     * @summary Reorder attribute groups
     * @param {AttributeGroupReorderBody} [attributeGroupReorderBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putAttributeGroupsReorder(attributeGroupReorderBody?: AttributeGroupReorderBody, options?: any): AxiosPromise<void>;
    /**
     * Updates an attribute from a given ID.
     * @summary Update an attribute
     * @param {string} attributeId
     * @param {UpdateAttributesBody} [updateAttributesBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putAttributesAttributeId(attributeId: string, updateAttributesBody?: UpdateAttributesBody, options?: any): AxiosPromise<AttributeResponse>;
    /**
     * Allows you to reorder a target category in relation to another.
     * @summary Update request to reorder attributes
     * @param {AttributesReorderBody} [attributesReorderBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putAttributesOrder(attributesReorderBody?: AttributesReorderBody, options?: any): AxiosPromise<void>;
};
/**
 * AttributesApi - object-oriented interface
 * @export
 * @class AttributesApi
 * @extends {BaseAPI}
 */
export declare class AttributesApi extends BaseAPI {
    /**
     * Deletes an attribute group
     * @summary Delete an attribute group
     * @param {string} attributeGroupId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributesApi
     */
    deleteAttributeGroupsAttributeGroupId(attributeGroupId: string, options?: any): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Delete an attribute.
     * @summary Delete an attribute
     * @param {string} attributeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributesApi
     */
    deleteAttributesAttributeId(attributeId: string, options?: any): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Returns a paginated list of available attribute groups
     * @summary Paginated list of Attribute Groups
     * @param {boolean} [allRecords] Will skip pagination and return all records
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributesApi
     */
    getAttributeGroups(allRecords?: boolean, include?: string, options?: any): Promise<import("axios").AxiosResponse<AttributeGroupCollection, any>>;
    /**
     * Gets a single attribute group
     * @summary Get a single attribute group
     * @param {string} attributeGroupId
     * @param {number} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributesApi
     */
    getAttributeGroupsAttributeGroupId(attributeGroupId: string, include?: number, options?: any): Promise<import("axios").AxiosResponse<AttributeGroupResponse, any>>;
    /**
     * Return a paged array of attributes
     * @summary Get Attributes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributesApi
     */
    getAttributes(options?: any): Promise<import("axios").AxiosResponse<AttributeCollection, any>>;
    /**
     * Returns an attribute from a given ID.
     * @summary Get an attribute
     * @param {string} attributeId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributesApi
     */
    getAttributesAttributeId(attributeId: string, include?: string, options?: any): Promise<import("axios").AxiosResponse<AttributeResponse, any>>;
    /**
     *
     * @summary Create an Attribute Group
     * @param {CreateAttributeGroupBodyName} [name]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributesApi
     */
    postAttributeGroups(name?: CreateAttributeGroupBodyName, options?: any): Promise<import("axios").AxiosResponse<AttributeGroupResponse, any>>;
    /**
     * Create a new attribute
     * @summary Create Attribute
     * @param {InlineObject} [inlineObject]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributesApi
     */
    postAttributes(inlineObject?: InlineObject, options?: any): Promise<import("axios").AxiosResponse<AttributeResponse, any>>;
    /**
     * Updates an attribute group.
     * @summary Update an attribute group
     * @param {string} attributeGroupId
     * @param {AttributeGroup} [attributeGroup]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributesApi
     */
    putAttributeGroupsAttributeGroupId(attributeGroupId: string, attributeGroup?: AttributeGroup, options?: any): Promise<import("axios").AxiosResponse<AttributeGroupResponse, any>>;
    /**
     * Sends a request to reorder the attribute groups in the system
     * @summary Reorder attribute groups
     * @param {AttributeGroupReorderBody} [attributeGroupReorderBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributesApi
     */
    putAttributeGroupsReorder(attributeGroupReorderBody?: AttributeGroupReorderBody, options?: any): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Updates an attribute from a given ID.
     * @summary Update an attribute
     * @param {string} attributeId
     * @param {UpdateAttributesBody} [updateAttributesBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributesApi
     */
    putAttributesAttributeId(attributeId: string, updateAttributesBody?: UpdateAttributesBody, options?: any): Promise<import("axios").AxiosResponse<AttributeResponse, any>>;
    /**
     * Allows you to reorder a target category in relation to another.
     * @summary Update request to reorder attributes
     * @param {AttributesReorderBody} [attributesReorderBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributesApi
     */
    putAttributesOrder(attributesReorderBody?: AttributesReorderBody, options?: any): Promise<import("axios").AxiosResponse<void, any>>;
}
