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
import type * as buffer from "buffer"

import { MetricShowCohortsResponseInnerCellsInner } from './metric-show-cohorts-response-inner-cells-inner';

/**
 * 
 * @export
 * @interface MetricShowCohortsResponseInner
 */
export interface MetricShowCohortsResponseInner {
    /**
     * 
     * @type {string}
     * @memberof MetricShowCohortsResponseInner
     */
    'end'?: string;
    /**
     * 
     * @type {number}
     * @memberof MetricShowCohortsResponseInner
     */
    'mrr'?: number;
    /**
     * 
     * @type {string}
     * @memberof MetricShowCohortsResponseInner
     */
    'begin'?: string;
    /**
     * 
     * @type {Array<MetricShowCohortsResponseInnerCellsInner>}
     * @memberof MetricShowCohortsResponseInner
     */
    'cells'?: Array<MetricShowCohortsResponseInnerCellsInner>;
    /**
     * 
     * @type {number}
     * @memberof MetricShowCohortsResponseInner
     */
    'customers'?: number;
    /**
     * 
     * @type {string}
     * @memberof MetricShowCohortsResponseInner
     */
    'mrr_formatted'?: string;
}

