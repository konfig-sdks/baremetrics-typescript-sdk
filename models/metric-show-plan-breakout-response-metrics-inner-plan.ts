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

import { MetricShowPlanBreakoutResponseMetricsInnerPlanAmountsInner } from './metric-show-plan-breakout-response-metrics-inner-plan-amounts-inner';

/**
 * 
 * @export
 * @interface MetricShowPlanBreakoutResponseMetricsInnerPlan
 */
export interface MetricShowPlanBreakoutResponseMetricsInnerPlan {
    /**
     * 
     * @type {string}
     * @memberof MetricShowPlanBreakoutResponseMetricsInnerPlan
     */
    'oid'?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricShowPlanBreakoutResponseMetricsInnerPlan
     */
    'source_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricShowPlanBreakoutResponseMetricsInnerPlan
     */
    'source'?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricShowPlanBreakoutResponseMetricsInnerPlan
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricShowPlanBreakoutResponseMetricsInnerPlan
     */
    'interval'?: string;
    /**
     * 
     * @type {number}
     * @memberof MetricShowPlanBreakoutResponseMetricsInnerPlan
     */
    'interval_count'?: number;
    /**
     * 
     * @type {any}
     * @memberof MetricShowPlanBreakoutResponseMetricsInnerPlan
     */
    'trial_duration'?: any;
    /**
     * 
     * @type {any}
     * @memberof MetricShowPlanBreakoutResponseMetricsInnerPlan
     */
    'trial_duration_unit'?: any;
    /**
     * 
     * @type {number}
     * @memberof MetricShowPlanBreakoutResponseMetricsInnerPlan
     */
    'created'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof MetricShowPlanBreakoutResponseMetricsInnerPlan
     */
    'active'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MetricShowPlanBreakoutResponseMetricsInnerPlan
     */
    'setup_fees'?: number;
    /**
     * 
     * @type {Array<MetricShowPlanBreakoutResponseMetricsInnerPlanAmountsInner>}
     * @memberof MetricShowPlanBreakoutResponseMetricsInnerPlan
     */
    'amounts'?: Array<MetricShowPlanBreakoutResponseMetricsInnerPlanAmountsInner>;
}
