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
import { CustomerSpendingResponse } from '../models';
import { InlineResponse2001 } from '../models';
import { InlineResponse2002 } from '../models';
import { InlineResponse2003 } from '../models';
import { InlineResponse2004 } from '../models';
import { InlineResponse2005 } from '../models';
import { InlineResponse2006 } from '../models';
/**
 * ReportsApi - axios parameter creator
 * @export
 */
export declare const ReportsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Get customer group report
     * @summary Get customer group report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    customerGroupReport: (from?: string, to?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Get customer spending report
     * @summary Get customer spending report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    customerSpendingReport: (from?: string, to?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Gets best selling products grouped by month.
     * @summary Get best selling products
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProductsBestSellers: (from?: string, to?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Returns metric (KPI) data for either sales or orders.
     * @summary Get metric data
     * @param {'sales' | 'orders'} subject
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReportsMetricsSubject: (subject: 'sales' | 'orders', options?: any) => Promise<RequestArgs>;
    /**
     * Returns a report for orders between a given date range
     * @summary Get sales report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReportsOrders: (from?: string, to?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Returns an array of order averages between a given date range.
     * @summary Get order averages
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {'weekly' | 'daily' | 'yearly' | 'monthly'} [mode]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReportsOrdersAverages: (from?: string, to?: string, mode?: 'weekly' | 'daily' | 'yearly' | 'monthly', options?: any) => Promise<RequestArgs>;
    /**
     * Returns a monthly grouped list of new/returning and total customers.
     * @summary Get Customer Report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReportsOrdersCustomers: (from?: string, to?: string, options?: any) => Promise<RequestArgs>;
    /**
     * This endpoints returns sales report figures.  > Currently this provides data suitable for chartjs.org but this is subject to change and be more decoupled in a future release.
     * @summary Get sales report
     * @param {string} from The from date
     * @param {string} [to] The to date
     * @param {'weekly' | 'monthly' | 'daily'} [mode] The dataset mode
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReportsSales: (from: string, to?: string, mode?: 'weekly' | 'monthly' | 'daily', options?: any) => Promise<RequestArgs>;
    /**
     * Get user report
     * @summary Get a report for a user
     * @param {string} userId
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userReport: (userId: string, from?: string, to?: string, options?: any) => Promise<RequestArgs>;
};
/**
 * ReportsApi - functional programming interface
 * @export
 */
export declare const ReportsApiFp: (configuration?: Configuration) => {
    /**
     * Get customer group report
     * @summary Get customer group report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    customerGroupReport(from?: string, to?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>>;
    /**
     * Get customer spending report
     * @summary Get customer spending report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    customerSpendingReport(from?: string, to?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerSpendingResponse>>;
    /**
     * Gets best selling products grouped by month.
     * @summary Get best selling products
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProductsBestSellers(from?: string, to?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2005>>;
    /**
     * Returns metric (KPI) data for either sales or orders.
     * @summary Get metric data
     * @param {'sales' | 'orders'} subject
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReportsMetricsSubject(subject: 'sales' | 'orders', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2006>>;
    /**
     * Returns a report for orders between a given date range
     * @summary Get sales report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReportsOrders(from?: string, to?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InlineResponse2002>>>;
    /**
     * Returns an array of order averages between a given date range.
     * @summary Get order averages
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {'weekly' | 'daily' | 'yearly' | 'monthly'} [mode]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReportsOrdersAverages(from?: string, to?: string, mode?: 'weekly' | 'daily' | 'yearly' | 'monthly', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InlineResponse2004>>>;
    /**
     * Returns a monthly grouped list of new/returning and total customers.
     * @summary Get Customer Report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReportsOrdersCustomers(from?: string, to?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2003>>;
    /**
     * This endpoints returns sales report figures.  > Currently this provides data suitable for chartjs.org but this is subject to change and be more decoupled in a future release.
     * @summary Get sales report
     * @param {string} from The from date
     * @param {string} [to] The to date
     * @param {'weekly' | 'monthly' | 'daily'} [mode] The dataset mode
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReportsSales(from: string, to?: string, mode?: 'weekly' | 'monthly' | 'daily', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001>>;
    /**
     * Get user report
     * @summary Get a report for a user
     * @param {string} userId
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userReport(userId: string, from?: string, to?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>>;
};
/**
 * ReportsApi - factory interface
 * @export
 */
export declare const ReportsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Get customer group report
     * @summary Get customer group report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    customerGroupReport(from?: string, to?: string, options?: any): AxiosPromise<object>;
    /**
     * Get customer spending report
     * @summary Get customer spending report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    customerSpendingReport(from?: string, to?: string, options?: any): AxiosPromise<CustomerSpendingResponse>;
    /**
     * Gets best selling products grouped by month.
     * @summary Get best selling products
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProductsBestSellers(from?: string, to?: string, options?: any): AxiosPromise<InlineResponse2005>;
    /**
     * Returns metric (KPI) data for either sales or orders.
     * @summary Get metric data
     * @param {'sales' | 'orders'} subject
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReportsMetricsSubject(subject: 'sales' | 'orders', options?: any): AxiosPromise<InlineResponse2006>;
    /**
     * Returns a report for orders between a given date range
     * @summary Get sales report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReportsOrders(from?: string, to?: string, options?: any): AxiosPromise<Array<InlineResponse2002>>;
    /**
     * Returns an array of order averages between a given date range.
     * @summary Get order averages
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {'weekly' | 'daily' | 'yearly' | 'monthly'} [mode]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReportsOrdersAverages(from?: string, to?: string, mode?: 'weekly' | 'daily' | 'yearly' | 'monthly', options?: any): AxiosPromise<Array<InlineResponse2004>>;
    /**
     * Returns a monthly grouped list of new/returning and total customers.
     * @summary Get Customer Report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReportsOrdersCustomers(from?: string, to?: string, options?: any): AxiosPromise<InlineResponse2003>;
    /**
     * This endpoints returns sales report figures.  > Currently this provides data suitable for chartjs.org but this is subject to change and be more decoupled in a future release.
     * @summary Get sales report
     * @param {string} from The from date
     * @param {string} [to] The to date
     * @param {'weekly' | 'monthly' | 'daily'} [mode] The dataset mode
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReportsSales(from: string, to?: string, mode?: 'weekly' | 'monthly' | 'daily', options?: any): AxiosPromise<InlineResponse2001>;
    /**
     * Get user report
     * @summary Get a report for a user
     * @param {string} userId
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userReport(userId: string, from?: string, to?: string, options?: any): AxiosPromise<object>;
};
/**
 * ReportsApi - object-oriented interface
 * @export
 * @class ReportsApi
 * @extends {BaseAPI}
 */
export declare class ReportsApi extends BaseAPI {
    /**
     * Get customer group report
     * @summary Get customer group report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    customerGroupReport(from?: string, to?: string, options?: any): Promise<import("axios").AxiosResponse<object, any>>;
    /**
     * Get customer spending report
     * @summary Get customer spending report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    customerSpendingReport(from?: string, to?: string, options?: any): Promise<import("axios").AxiosResponse<CustomerSpendingResponse, any>>;
    /**
     * Gets best selling products grouped by month.
     * @summary Get best selling products
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    getProductsBestSellers(from?: string, to?: string, options?: any): Promise<import("axios").AxiosResponse<InlineResponse2005, any>>;
    /**
     * Returns metric (KPI) data for either sales or orders.
     * @summary Get metric data
     * @param {'sales' | 'orders'} subject
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    getReportsMetricsSubject(subject: 'sales' | 'orders', options?: any): Promise<import("axios").AxiosResponse<InlineResponse2006, any>>;
    /**
     * Returns a report for orders between a given date range
     * @summary Get sales report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    getReportsOrders(from?: string, to?: string, options?: any): Promise<import("axios").AxiosResponse<InlineResponse2002[], any>>;
    /**
     * Returns an array of order averages between a given date range.
     * @summary Get order averages
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {'weekly' | 'daily' | 'yearly' | 'monthly'} [mode]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    getReportsOrdersAverages(from?: string, to?: string, mode?: 'weekly' | 'daily' | 'yearly' | 'monthly', options?: any): Promise<import("axios").AxiosResponse<InlineResponse2004[], any>>;
    /**
     * Returns a monthly grouped list of new/returning and total customers.
     * @summary Get Customer Report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    getReportsOrdersCustomers(from?: string, to?: string, options?: any): Promise<import("axios").AxiosResponse<InlineResponse2003, any>>;
    /**
     * This endpoints returns sales report figures.  > Currently this provides data suitable for chartjs.org but this is subject to change and be more decoupled in a future release.
     * @summary Get sales report
     * @param {string} from The from date
     * @param {string} [to] The to date
     * @param {'weekly' | 'monthly' | 'daily'} [mode] The dataset mode
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    getReportsSales(from: string, to?: string, mode?: 'weekly' | 'monthly' | 'daily', options?: any): Promise<import("axios").AxiosResponse<InlineResponse2001, any>>;
    /**
     * Get user report
     * @summary Get a report for a user
     * @param {string} userId
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    userReport(userId: string, from?: string, to?: string, options?: any): Promise<import("axios").AxiosResponse<object, any>>;
}
