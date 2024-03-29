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

import { SourceUpdatePlanResponsePlanAmountsInner } from './source-update-plan-response-plan-amounts-inner';

/**
 * 
 * @export
 * @interface SourceUpdatePlanResponsePlan
 */
export interface SourceUpdatePlanResponsePlan {
    /**
     * 
     * @type {string}
     * @memberof SourceUpdatePlanResponsePlan
     */
    'oid'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceUpdatePlanResponsePlan
     */
    'source_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceUpdatePlanResponsePlan
     */
    'source'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceUpdatePlanResponsePlan
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceUpdatePlanResponsePlan
     */
    'interval'?: string;
    /**
     * 
     * @type {number}
     * @memberof SourceUpdatePlanResponsePlan
     */
    'interval_count'?: number;
    /**
     * 
     * @type {any}
     * @memberof SourceUpdatePlanResponsePlan
     */
    'trial_duration'?: any;
    /**
     * 
     * @type {any}
     * @memberof SourceUpdatePlanResponsePlan
     */
    'trial_duration_unit'?: any;
    /**
     * 
     * @type {any}
     * @memberof SourceUpdatePlanResponsePlan
     */
    'created'?: any;
    /**
     * 
     * @type {boolean}
     * @memberof SourceUpdatePlanResponsePlan
     */
    'active'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SourceUpdatePlanResponsePlan
     */
    'setup_fees'?: number;
    /**
     * 
     * @type {Array<SourceUpdatePlanResponsePlanAmountsInner>}
     * @memberof SourceUpdatePlanResponsePlan
     */
    'amounts'?: Array<SourceUpdatePlanResponsePlanAmountsInner>;
}

