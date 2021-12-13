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
import { AssetDetachBody } from '../models';
import { AssetResponse } from '../models';
import { AssetSimple } from '../models';
import { ReorderAssetsBody } from '../models';
import { UpdateAssetBody } from '../models';
/**
 * AssetsApi - axios parameter creator
 * @export
 */
export declare const AssetsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Upload an asset to a model
     * @summary Create Asset
     * @param {string} [mimeType] Required when passing url
     * @param {string} [url] External URL to file to upload, required without file
     * @param {object} [file]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postAssets: (mimeType?: string, url?: string, file?: object, options?: any) => Promise<RequestArgs>;
    /**
     * Detaches any assets from a given model. Useful if you want to remove certain assets from a product (or another model) without deleting the asset itself.
     * @summary Detach an asset from it\'s model
     * @param {string} assetId The hashed asset id
     * @param {string} ownerId The hashed owner id
     * @param {AssetDetachBody} [assetDetachBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postAssetsAssetIdDetachOwnerId: (assetId: string, ownerId: string, assetDetachBody?: AssetDetachBody, options?: any) => Promise<RequestArgs>;
    /**
     * This endpoint allows you to upload an asset without having to attach it to a model. This is good for one time uploads where you just want to get back a URL
     * @summary Simple asset upload
     * @param {object} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postAssetsSimple: (file: object, options?: any) => Promise<RequestArgs>;
    /**
     * Update all assets in the given array of ids.
     * @summary Update Assets
     * @param {UpdateAssetBody} [updateAssetBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putAssets: (updateAssetBody?: UpdateAssetBody, options?: any) => Promise<RequestArgs>;
    /**
     * Reorder assets for a model
     * @summary Reorder Assets
     * @param {ReorderAssetsBody} [reorderAssetsBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    reorderAssets: (reorderAssetsBody?: ReorderAssetsBody, options?: any) => Promise<RequestArgs>;
};
/**
 * AssetsApi - functional programming interface
 * @export
 */
export declare const AssetsApiFp: (configuration?: Configuration) => {
    /**
     * Upload an asset to a model
     * @summary Create Asset
     * @param {string} [mimeType] Required when passing url
     * @param {string} [url] External URL to file to upload, required without file
     * @param {object} [file]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postAssets(mimeType?: string, url?: string, file?: object, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AssetResponse>>;
    /**
     * Detaches any assets from a given model. Useful if you want to remove certain assets from a product (or another model) without deleting the asset itself.
     * @summary Detach an asset from it\'s model
     * @param {string} assetId The hashed asset id
     * @param {string} ownerId The hashed owner id
     * @param {AssetDetachBody} [assetDetachBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postAssetsAssetIdDetachOwnerId(assetId: string, ownerId: string, assetDetachBody?: AssetDetachBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * This endpoint allows you to upload an asset without having to attach it to a model. This is good for one time uploads where you just want to get back a URL
     * @summary Simple asset upload
     * @param {object} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postAssetsSimple(file: object, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AssetSimple>>;
    /**
     * Update all assets in the given array of ids.
     * @summary Update Assets
     * @param {UpdateAssetBody} [updateAssetBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putAssets(updateAssetBody?: UpdateAssetBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AssetResponse>>;
    /**
     * Reorder assets for a model
     * @summary Reorder Assets
     * @param {ReorderAssetsBody} [reorderAssetsBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    reorderAssets(reorderAssetsBody?: ReorderAssetsBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
/**
 * AssetsApi - factory interface
 * @export
 */
export declare const AssetsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Upload an asset to a model
     * @summary Create Asset
     * @param {string} [mimeType] Required when passing url
     * @param {string} [url] External URL to file to upload, required without file
     * @param {object} [file]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postAssets(mimeType?: string, url?: string, file?: object, options?: any): AxiosPromise<AssetResponse>;
    /**
     * Detaches any assets from a given model. Useful if you want to remove certain assets from a product (or another model) without deleting the asset itself.
     * @summary Detach an asset from it\'s model
     * @param {string} assetId The hashed asset id
     * @param {string} ownerId The hashed owner id
     * @param {AssetDetachBody} [assetDetachBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postAssetsAssetIdDetachOwnerId(assetId: string, ownerId: string, assetDetachBody?: AssetDetachBody, options?: any): AxiosPromise<void>;
    /**
     * This endpoint allows you to upload an asset without having to attach it to a model. This is good for one time uploads where you just want to get back a URL
     * @summary Simple asset upload
     * @param {object} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postAssetsSimple(file: object, options?: any): AxiosPromise<AssetSimple>;
    /**
     * Update all assets in the given array of ids.
     * @summary Update Assets
     * @param {UpdateAssetBody} [updateAssetBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putAssets(updateAssetBody?: UpdateAssetBody, options?: any): AxiosPromise<AssetResponse>;
    /**
     * Reorder assets for a model
     * @summary Reorder Assets
     * @param {ReorderAssetsBody} [reorderAssetsBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    reorderAssets(reorderAssetsBody?: ReorderAssetsBody, options?: any): AxiosPromise<void>;
};
/**
 * AssetsApi - object-oriented interface
 * @export
 * @class AssetsApi
 * @extends {BaseAPI}
 */
export declare class AssetsApi extends BaseAPI {
    /**
     * Upload an asset to a model
     * @summary Create Asset
     * @param {string} [mimeType] Required when passing url
     * @param {string} [url] External URL to file to upload, required without file
     * @param {object} [file]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    postAssets(mimeType?: string, url?: string, file?: object, options?: any): Promise<import("axios").AxiosResponse<AssetResponse, any>>;
    /**
     * Detaches any assets from a given model. Useful if you want to remove certain assets from a product (or another model) without deleting the asset itself.
     * @summary Detach an asset from it\'s model
     * @param {string} assetId The hashed asset id
     * @param {string} ownerId The hashed owner id
     * @param {AssetDetachBody} [assetDetachBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    postAssetsAssetIdDetachOwnerId(assetId: string, ownerId: string, assetDetachBody?: AssetDetachBody, options?: any): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * This endpoint allows you to upload an asset without having to attach it to a model. This is good for one time uploads where you just want to get back a URL
     * @summary Simple asset upload
     * @param {object} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    postAssetsSimple(file: object, options?: any): Promise<import("axios").AxiosResponse<AssetSimple, any>>;
    /**
     * Update all assets in the given array of ids.
     * @summary Update Assets
     * @param {UpdateAssetBody} [updateAssetBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    putAssets(updateAssetBody?: UpdateAssetBody, options?: any): Promise<import("axios").AxiosResponse<AssetResponse, any>>;
    /**
     * Reorder assets for a model
     * @summary Reorder Assets
     * @param {ReorderAssetsBody} [reorderAssetsBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    reorderAssets(reorderAssetsBody?: ReorderAssetsBody, options?: any): Promise<import("axios").AxiosResponse<void, any>>;
}
