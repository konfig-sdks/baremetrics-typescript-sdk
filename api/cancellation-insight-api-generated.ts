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
import { CancellationInsightCreateNewReasonRequest } from '../models';
// @ts-ignore
import { CancellationInsightCreateNewReasonResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CancellationInsightApi - axios parameter creator
 * @export
 */
export const CancellationInsightApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Reason
         * @param {CancellationInsightCreateNewReasonRequest} [cancellationInsightCreateNewReasonRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewReason: async (cancellationInsightCreateNewReasonRequest?: CancellationInsightCreateNewReasonRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/cancellation_insights/reasons`;
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
                requestBody: cancellationInsightCreateNewReasonRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/cancellation_insights/reasons',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(cancellationInsightCreateNewReasonRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CancellationInsightApi - functional programming interface
 * @export
 */
export const CancellationInsightApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CancellationInsightApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Reason
         * @param {CancellationInsightApiCreateNewReasonRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewReason(requestParameters: CancellationInsightApiCreateNewReasonRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CancellationInsightCreateNewReasonResponse>> {
            const cancellationInsightCreateNewReasonRequest: CancellationInsightCreateNewReasonRequest = {
                text: requestParameters.text,
                sort_key: requestParameters.sort_key
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewReason(cancellationInsightCreateNewReasonRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CancellationInsightApi - factory interface
 * @export
 */
export const CancellationInsightApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CancellationInsightApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Reason
         * @param {CancellationInsightApiCreateNewReasonRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewReason(requestParameters: CancellationInsightApiCreateNewReasonRequest, options?: AxiosRequestConfig): AxiosPromise<CancellationInsightCreateNewReasonResponse> {
            return localVarFp.createNewReason(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewReason operation in CancellationInsightApi.
 * @export
 * @interface CancellationInsightApiCreateNewReasonRequest
 */
export type CancellationInsightApiCreateNewReasonRequest = {
    
} & CancellationInsightCreateNewReasonRequest

/**
 * CancellationInsightApiGenerated - object-oriented interface
 * @export
 * @class CancellationInsightApiGenerated
 * @extends {BaseAPI}
 */
export class CancellationInsightApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Create Reason
     * @param {CancellationInsightApiCreateNewReasonRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CancellationInsightApiGenerated
     */
    public createNewReason(requestParameters: CancellationInsightApiCreateNewReasonRequest, options?: AxiosRequestConfig) {
        return CancellationInsightApiFp(this.configuration).createNewReason(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
