/* tslint:disable */
/* eslint-disable */
/*
Production

Baremetrics provides real-time subscription metrics for teams built with Stripe, Shopify Partners, Braintree, Recurly, Chargebee, Google Play, and App Store Connect. 

In addition to metrics, Baremetrics provides tools that help you reduce churn and grow your business faster: 

Recover: Prevent failed charges and keep your hard-earned revenue with our 100% automated toolkit. 

Cancellation insights: Learn exactly why your customers cancel, calculate lost revenue by cancellation reason, and send automated emails to win customers back.

Flightpath: Plan for the future with flexible financial modeling tools built for growing SaaS companies.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { SegmentCreateRequestRequest } from '../models';
// @ts-ignore
import { SegmentCreateRequestRequestQueryInner } from '../models';
// @ts-ignore
import { SegmentCreateRequestResponse } from '../models';
// @ts-ignore
import { SegmentFindWithoutSaveRequest } from '../models';
// @ts-ignore
import { SegmentFindWithoutSaveResponse } from '../models';
// @ts-ignore
import { SegmentGetFieldsResponse } from '../models';
// @ts-ignore
import { SegmentListSegmentsResponse } from '../models';
// @ts-ignore
import { SegmentShowDetailsResponse } from '../models';
// @ts-ignore
import { SegmentUpdateByIdRequest } from '../models';
// @ts-ignore
import { SegmentUpdateByIdResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * SegmentApi - axios parameter creator
 * @export
 */
export const SegmentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Segment
         * @param {SegmentCreateRequestRequest} [segmentCreateRequestRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRequest: async (segmentCreateRequestRequest?: SegmentCreateRequestRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/segments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec0", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: segmentCreateRequestRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/segments',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(segmentCreateRequestRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search for a segment without saving it
         * @summary Search Segment
         * @param {number} [perPage] 
         * @param {number} [page] 
         * @param {string} [sort] 
         * @param {string} [order] 
         * @param {SegmentFindWithoutSaveRequest} [segmentFindWithoutSaveRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findWithoutSave: async (perPage?: number, page?: number, sort?: string, order?: string, segmentFindWithoutSaveRequest?: SegmentFindWithoutSaveRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/segments/search`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec0", configuration })
            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: segmentFindWithoutSaveRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/segments/search',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(segmentFindWithoutSaveRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the fields that can be used to create/search a segment. The key is the category, and a category contains multiple fields.
         * @summary List Fields
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFields: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/segments/fields`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec0", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/segments/fields',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List Segments
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSegments: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/segments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec0", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/segments',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete Segment
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('removeById', 'id', id)
            const localVarPath = `/v1/segments/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec0", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/segments/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Show Segment
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showDetails: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('showDetails', 'id', id)
            const localVarPath = `/v1/segments/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec0", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/segments/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update Segment
         * @param {string} id 
         * @param {SegmentUpdateByIdRequest} [segmentUpdateByIdRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById: async (id: string, segmentUpdateByIdRequest?: SegmentUpdateByIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateById', 'id', id)
            const localVarPath = `/v1/segments/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec0", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: segmentUpdateByIdRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/segments/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(segmentUpdateByIdRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SegmentApi - functional programming interface
 * @export
 */
export const SegmentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SegmentApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Segment
         * @param {SegmentApiCreateRequestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRequest(requestParameters: SegmentApiCreateRequestRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SegmentCreateRequestResponse>> {
            const segmentCreateRequestRequest: SegmentCreateRequestRequest = {
                query: requestParameters.query,
                name: requestParameters.name
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRequest(segmentCreateRequestRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Search for a segment without saving it
         * @summary Search Segment
         * @param {SegmentApiFindWithoutSaveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findWithoutSave(requestParameters: SegmentApiFindWithoutSaveRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SegmentFindWithoutSaveResponse>> {
            const segmentFindWithoutSaveRequest: SegmentFindWithoutSaveRequest = {
                query: requestParameters.query
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.findWithoutSave(requestParameters.perPage, requestParameters.page, requestParameters.sort, requestParameters.order, segmentFindWithoutSaveRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the fields that can be used to create/search a segment. The key is the category, and a category contains multiple fields.
         * @summary List Fields
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFields(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SegmentGetFieldsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFields(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List Segments
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listSegments(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SegmentListSegmentsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listSegments(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete Segment
         * @param {SegmentApiRemoveByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeById(requestParameters: SegmentApiRemoveByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Show Segment
         * @param {SegmentApiShowDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showDetails(requestParameters: SegmentApiShowDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SegmentShowDetailsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showDetails(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update Segment
         * @param {SegmentApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateById(requestParameters: SegmentApiUpdateByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SegmentUpdateByIdResponse>> {
            const segmentUpdateByIdRequest: SegmentUpdateByIdRequest = {
                name: requestParameters.name,
                query: requestParameters.query
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateById(requestParameters.id, segmentUpdateByIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SegmentApi - factory interface
 * @export
 */
export const SegmentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SegmentApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Segment
         * @param {SegmentApiCreateRequestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRequest(requestParameters: SegmentApiCreateRequestRequest, options?: AxiosRequestConfig): AxiosPromise<SegmentCreateRequestResponse> {
            return localVarFp.createRequest(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Search for a segment without saving it
         * @summary Search Segment
         * @param {SegmentApiFindWithoutSaveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findWithoutSave(requestParameters: SegmentApiFindWithoutSaveRequest, options?: AxiosRequestConfig): AxiosPromise<SegmentFindWithoutSaveResponse> {
            return localVarFp.findWithoutSave(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the fields that can be used to create/search a segment. The key is the category, and a category contains multiple fields.
         * @summary List Fields
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFields(options?: AxiosRequestConfig): AxiosPromise<SegmentGetFieldsResponse> {
            return localVarFp.getFields(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List Segments
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSegments(options?: AxiosRequestConfig): AxiosPromise<SegmentListSegmentsResponse> {
            return localVarFp.listSegments(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete Segment
         * @param {SegmentApiRemoveByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeById(requestParameters: SegmentApiRemoveByIdRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.removeById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Show Segment
         * @param {SegmentApiShowDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showDetails(requestParameters: SegmentApiShowDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<SegmentShowDetailsResponse> {
            return localVarFp.showDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Segment
         * @param {SegmentApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById(requestParameters: SegmentApiUpdateByIdRequest, options?: AxiosRequestConfig): AxiosPromise<SegmentUpdateByIdResponse> {
            return localVarFp.updateById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createRequest operation in SegmentApi.
 * @export
 * @interface SegmentApiCreateRequestRequest
 */
export type SegmentApiCreateRequestRequest = {
    
} & SegmentCreateRequestRequest

/**
 * Request parameters for findWithoutSave operation in SegmentApi.
 * @export
 * @interface SegmentApiFindWithoutSaveRequest
 */
export type SegmentApiFindWithoutSaveRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof SegmentApiFindWithoutSave
    */
    readonly perPage?: number
    
    /**
    * 
    * @type {number}
    * @memberof SegmentApiFindWithoutSave
    */
    readonly page?: number
    
    /**
    * 
    * @type {string}
    * @memberof SegmentApiFindWithoutSave
    */
    readonly sort?: string
    
    /**
    * 
    * @type {string}
    * @memberof SegmentApiFindWithoutSave
    */
    readonly order?: string
    
} & SegmentFindWithoutSaveRequest

/**
 * Request parameters for removeById operation in SegmentApi.
 * @export
 * @interface SegmentApiRemoveByIdRequest
 */
export type SegmentApiRemoveByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof SegmentApiRemoveById
    */
    readonly id: string
    
}

/**
 * Request parameters for showDetails operation in SegmentApi.
 * @export
 * @interface SegmentApiShowDetailsRequest
 */
export type SegmentApiShowDetailsRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof SegmentApiShowDetails
    */
    readonly id: string
    
}

/**
 * Request parameters for updateById operation in SegmentApi.
 * @export
 * @interface SegmentApiUpdateByIdRequest
 */
export type SegmentApiUpdateByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof SegmentApiUpdateById
    */
    readonly id: string
    
} & SegmentUpdateByIdRequest

/**
 * SegmentApiGenerated - object-oriented interface
 * @export
 * @class SegmentApiGenerated
 * @extends {BaseAPI}
 */
export class SegmentApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Create Segment
     * @param {SegmentApiCreateRequestRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentApiGenerated
     */
    public createRequest(requestParameters: SegmentApiCreateRequestRequest, options?: AxiosRequestConfig) {
        return SegmentApiFp(this.configuration).createRequest(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search for a segment without saving it
     * @summary Search Segment
     * @param {SegmentApiFindWithoutSaveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentApiGenerated
     */
    public findWithoutSave(requestParameters: SegmentApiFindWithoutSaveRequest, options?: AxiosRequestConfig) {
        return SegmentApiFp(this.configuration).findWithoutSave(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the fields that can be used to create/search a segment. The key is the category, and a category contains multiple fields.
     * @summary List Fields
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentApiGenerated
     */
    public getFields(options?: AxiosRequestConfig) {
        return SegmentApiFp(this.configuration).getFields(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List Segments
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentApiGenerated
     */
    public listSegments(options?: AxiosRequestConfig) {
        return SegmentApiFp(this.configuration).listSegments(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete Segment
     * @param {SegmentApiRemoveByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentApiGenerated
     */
    public removeById(requestParameters: SegmentApiRemoveByIdRequest, options?: AxiosRequestConfig) {
        return SegmentApiFp(this.configuration).removeById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Show Segment
     * @param {SegmentApiShowDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentApiGenerated
     */
    public showDetails(requestParameters: SegmentApiShowDetailsRequest, options?: AxiosRequestConfig) {
        return SegmentApiFp(this.configuration).showDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Segment
     * @param {SegmentApiUpdateByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentApiGenerated
     */
    public updateById(requestParameters: SegmentApiUpdateByIdRequest, options?: AxiosRequestConfig) {
        return SegmentApiFp(this.configuration).updateById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}