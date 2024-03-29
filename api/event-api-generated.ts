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
import { EventCreateInsightEventRequest } from '../models';
// @ts-ignore
import { EventCreateInsightEventResponse } from '../models';
// @ts-ignore
import { EventGetEventByIdResponse } from '../models';
// @ts-ignore
import { EventListCancellationInsightEventsResponse } from '../models';
// @ts-ignore
import { EventUpdateEventByIdRequest } from '../models';
// @ts-ignore
import { EventUpdateEventByIdResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EventApi - axios parameter creator
 * @export
 */
export const EventApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Event
         * @param {EventCreateInsightEventRequest} [eventCreateInsightEventRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createInsightEvent: async (eventCreateInsightEventRequest?: EventCreateInsightEventRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/cancellation_insights/events`;
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
                requestBody: eventCreateInsightEventRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/cancellation_insights/events',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(eventCreateInsightEventRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Show Event
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEventById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getEventById', 'id', id)
            const localVarPath = `/v1/cancellation_insights/events/{id}`
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
                pathTemplate: '/v1/cancellation_insights/events/{id}',
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
         * @summary List Events
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCancellationInsightEvents: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/cancellation_insights/events`;
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
                pathTemplate: '/v1/cancellation_insights/events',
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
         * @summary Update Event
         * @param {string} id 
         * @param {EventUpdateEventByIdRequest} [eventUpdateEventByIdRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEventById: async (id: string, eventUpdateEventByIdRequest?: EventUpdateEventByIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateEventById', 'id', id)
            const localVarPath = `/v1/cancellation_insights/events/{id}`
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
                requestBody: eventUpdateEventByIdRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/cancellation_insights/events/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(eventUpdateEventByIdRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EventApi - functional programming interface
 * @export
 */
export const EventApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EventApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Event
         * @param {EventApiCreateInsightEventRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createInsightEvent(requestParameters: EventApiCreateInsightEventRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EventCreateInsightEventResponse>> {
            const eventCreateInsightEventRequest: EventCreateInsightEventRequest = {
                reason_id: requestParameters.reason_id,
                comment: requestParameters.comment,
                customer_oid: requestParameters.customer_oid,
                subscription_oids: requestParameters.subscription_oids
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createInsightEvent(eventCreateInsightEventRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Show Event
         * @param {EventApiGetEventByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEventById(requestParameters: EventApiGetEventByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EventGetEventByIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEventById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List Events
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCancellationInsightEvents(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EventListCancellationInsightEventsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listCancellationInsightEvents(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update Event
         * @param {EventApiUpdateEventByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateEventById(requestParameters: EventApiUpdateEventByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EventUpdateEventByIdResponse>> {
            const eventUpdateEventByIdRequest: EventUpdateEventByIdRequest = {
                reason_id: requestParameters.reason_id,
                comment: requestParameters.comment
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateEventById(requestParameters.id, eventUpdateEventByIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EventApi - factory interface
 * @export
 */
export const EventApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EventApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Event
         * @param {EventApiCreateInsightEventRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createInsightEvent(requestParameters: EventApiCreateInsightEventRequest, options?: AxiosRequestConfig): AxiosPromise<EventCreateInsightEventResponse> {
            return localVarFp.createInsightEvent(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Show Event
         * @param {EventApiGetEventByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEventById(requestParameters: EventApiGetEventByIdRequest, options?: AxiosRequestConfig): AxiosPromise<EventGetEventByIdResponse> {
            return localVarFp.getEventById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List Events
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCancellationInsightEvents(options?: AxiosRequestConfig): AxiosPromise<EventListCancellationInsightEventsResponse> {
            return localVarFp.listCancellationInsightEvents(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Event
         * @param {EventApiUpdateEventByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEventById(requestParameters: EventApiUpdateEventByIdRequest, options?: AxiosRequestConfig): AxiosPromise<EventUpdateEventByIdResponse> {
            return localVarFp.updateEventById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createInsightEvent operation in EventApi.
 * @export
 * @interface EventApiCreateInsightEventRequest
 */
export type EventApiCreateInsightEventRequest = {
    
} & EventCreateInsightEventRequest

/**
 * Request parameters for getEventById operation in EventApi.
 * @export
 * @interface EventApiGetEventByIdRequest
 */
export type EventApiGetEventByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof EventApiGetEventById
    */
    readonly id: string
    
}

/**
 * Request parameters for updateEventById operation in EventApi.
 * @export
 * @interface EventApiUpdateEventByIdRequest
 */
export type EventApiUpdateEventByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof EventApiUpdateEventById
    */
    readonly id: string
    
} & EventUpdateEventByIdRequest

/**
 * EventApiGenerated - object-oriented interface
 * @export
 * @class EventApiGenerated
 * @extends {BaseAPI}
 */
export class EventApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Create Event
     * @param {EventApiCreateInsightEventRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventApiGenerated
     */
    public createInsightEvent(requestParameters: EventApiCreateInsightEventRequest, options?: AxiosRequestConfig) {
        return EventApiFp(this.configuration).createInsightEvent(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Show Event
     * @param {EventApiGetEventByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventApiGenerated
     */
    public getEventById(requestParameters: EventApiGetEventByIdRequest, options?: AxiosRequestConfig) {
        return EventApiFp(this.configuration).getEventById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List Events
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventApiGenerated
     */
    public listCancellationInsightEvents(options?: AxiosRequestConfig) {
        return EventApiFp(this.configuration).listCancellationInsightEvents(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Event
     * @param {EventApiUpdateEventByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventApiGenerated
     */
    public updateEventById(requestParameters: EventApiUpdateEventByIdRequest, options?: AxiosRequestConfig) {
        return EventApiFp(this.configuration).updateEventById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
