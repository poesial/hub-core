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
import { Route } from '../models';
import { RouteCollection } from '../models';
import { RouteResponse } from '../models';
/**
 * RoutesApi - axios parameter creator
 * @export
 */
export declare const RoutesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Creates a route
     * @summary Create Route
     * @param {string} elementType
     * @param {number} elementId
     * @param {string} slug
     * @param {string} languageId
     * @param {boolean} [_default]
     * @param {boolean} [redirect]
     * @param {string} [description]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRoute: (elementType: string, elementId: number, slug: string, languageId: string, _default?: boolean, redirect?: boolean, description?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Delete a Router by its ID
     * @summary Delete Route
     * @param {string} routeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRoutesRouteId: (routeId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Returns a paginated list of Routes
     * @summary Get Routes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRoutes: (options?: any) => Promise<RequestArgs>;
    /**
     * Get a Route by ID
     * @summary Get Route
     * @param {string} routeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRoutesRouteId: (routeId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Get a Route by searching via the slug and element_type
     * @summary Search for Route
     * @param {string} slug
     * @param {string} elementType
     * @param {string} languageCode
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRoutesSearch: (slug: string, elementType: string, languageCode: string, options?: any) => Promise<RequestArgs>;
    /**
     * Update a Route using it\'s ID
     * @summary Update Route
     * @param {string} routeId
     * @param {Route} [route]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putRoutesRouteId: (routeId: string, route?: Route, options?: any) => Promise<RequestArgs>;
};
/**
 * RoutesApi - functional programming interface
 * @export
 */
export declare const RoutesApiFp: (configuration?: Configuration) => {
    /**
     * Creates a route
     * @summary Create Route
     * @param {string} elementType
     * @param {number} elementId
     * @param {string} slug
     * @param {string} languageId
     * @param {boolean} [_default]
     * @param {boolean} [redirect]
     * @param {string} [description]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRoute(elementType: string, elementId: number, slug: string, languageId: string, _default?: boolean, redirect?: boolean, description?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RouteResponse>>;
    /**
     * Delete a Router by its ID
     * @summary Delete Route
     * @param {string} routeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRoutesRouteId(routeId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Returns a paginated list of Routes
     * @summary Get Routes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRoutes(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RouteCollection>>;
    /**
     * Get a Route by ID
     * @summary Get Route
     * @param {string} routeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRoutesRouteId(routeId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RouteResponse>>;
    /**
     * Get a Route by searching via the slug and element_type
     * @summary Search for Route
     * @param {string} slug
     * @param {string} elementType
     * @param {string} languageCode
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRoutesSearch(slug: string, elementType: string, languageCode: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RouteResponse>>;
    /**
     * Update a Route using it\'s ID
     * @summary Update Route
     * @param {string} routeId
     * @param {Route} [route]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putRoutesRouteId(routeId: string, route?: Route, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RouteResponse>>;
};
/**
 * RoutesApi - factory interface
 * @export
 */
export declare const RoutesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Creates a route
     * @summary Create Route
     * @param {string} elementType
     * @param {number} elementId
     * @param {string} slug
     * @param {string} languageId
     * @param {boolean} [_default]
     * @param {boolean} [redirect]
     * @param {string} [description]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRoute(elementType: string, elementId: number, slug: string, languageId: string, _default?: boolean, redirect?: boolean, description?: string, options?: any): AxiosPromise<RouteResponse>;
    /**
     * Delete a Router by its ID
     * @summary Delete Route
     * @param {string} routeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRoutesRouteId(routeId: string, options?: any): AxiosPromise<void>;
    /**
     * Returns a paginated list of Routes
     * @summary Get Routes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRoutes(options?: any): AxiosPromise<RouteCollection>;
    /**
     * Get a Route by ID
     * @summary Get Route
     * @param {string} routeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRoutesRouteId(routeId: string, options?: any): AxiosPromise<RouteResponse>;
    /**
     * Get a Route by searching via the slug and element_type
     * @summary Search for Route
     * @param {string} slug
     * @param {string} elementType
     * @param {string} languageCode
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRoutesSearch(slug: string, elementType: string, languageCode: string, options?: any): AxiosPromise<RouteResponse>;
    /**
     * Update a Route using it\'s ID
     * @summary Update Route
     * @param {string} routeId
     * @param {Route} [route]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putRoutesRouteId(routeId: string, route?: Route, options?: any): AxiosPromise<RouteResponse>;
};
/**
 * RoutesApi - object-oriented interface
 * @export
 * @class RoutesApi
 * @extends {BaseAPI}
 */
export declare class RoutesApi extends BaseAPI {
    /**
     * Creates a route
     * @summary Create Route
     * @param {string} elementType
     * @param {number} elementId
     * @param {string} slug
     * @param {string} languageId
     * @param {boolean} [_default]
     * @param {boolean} [redirect]
     * @param {string} [description]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoutesApi
     */
    createRoute(elementType: string, elementId: number, slug: string, languageId: string, _default?: boolean, redirect?: boolean, description?: string, options?: any): Promise<import("axios").AxiosResponse<RouteResponse, any>>;
    /**
     * Delete a Router by its ID
     * @summary Delete Route
     * @param {string} routeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoutesApi
     */
    deleteRoutesRouteId(routeId: string, options?: any): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Returns a paginated list of Routes
     * @summary Get Routes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoutesApi
     */
    getRoutes(options?: any): Promise<import("axios").AxiosResponse<RouteCollection, any>>;
    /**
     * Get a Route by ID
     * @summary Get Route
     * @param {string} routeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoutesApi
     */
    getRoutesRouteId(routeId: string, options?: any): Promise<import("axios").AxiosResponse<RouteResponse, any>>;
    /**
     * Get a Route by searching via the slug and element_type
     * @summary Search for Route
     * @param {string} slug
     * @param {string} elementType
     * @param {string} languageCode
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoutesApi
     */
    getRoutesSearch(slug: string, elementType: string, languageCode: string, options?: any): Promise<import("axios").AxiosResponse<RouteResponse, any>>;
    /**
     * Update a Route using it\'s ID
     * @summary Update Route
     * @param {string} routeId
     * @param {Route} [route]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoutesApi
     */
    putRoutesRouteId(routeId: string, route?: Route, options?: any): Promise<import("axios").AxiosResponse<RouteResponse, any>>;
}
