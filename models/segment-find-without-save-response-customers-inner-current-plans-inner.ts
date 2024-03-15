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

import { SegmentFindWithoutSaveResponseCustomersInnerCurrentPlansInnerAmountsInner } from './segment-find-without-save-response-customers-inner-current-plans-inner-amounts-inner';

/**
 * 
 * @export
 * @interface SegmentFindWithoutSaveResponseCustomersInnerCurrentPlansInner
 */
export interface SegmentFindWithoutSaveResponseCustomersInnerCurrentPlansInner {
    /**
     * 
     * @type {string}
     * @memberof SegmentFindWithoutSaveResponseCustomersInnerCurrentPlansInner
     */
    'oid'?: string;
    /**
     * 
     * @type {string}
     * @memberof SegmentFindWithoutSaveResponseCustomersInnerCurrentPlansInner
     */
    'source_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof SegmentFindWithoutSaveResponseCustomersInnerCurrentPlansInner
     */
    'source'?: string;
    /**
     * 
     * @type {string}
     * @memberof SegmentFindWithoutSaveResponseCustomersInnerCurrentPlansInner
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof SegmentFindWithoutSaveResponseCustomersInnerCurrentPlansInner
     */
    'interval'?: string;
    /**
     * 
     * @type {number}
     * @memberof SegmentFindWithoutSaveResponseCustomersInnerCurrentPlansInner
     */
    'interval_count'?: number;
    /**
     * 
     * @type {any}
     * @memberof SegmentFindWithoutSaveResponseCustomersInnerCurrentPlansInner
     */
    'trial_duration'?: any;
    /**
     * 
     * @type {any}
     * @memberof SegmentFindWithoutSaveResponseCustomersInnerCurrentPlansInner
     */
    'trial_duration_unit'?: any;
    /**
     * 
     * @type {number}
     * @memberof SegmentFindWithoutSaveResponseCustomersInnerCurrentPlansInner
     */
    'created'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SegmentFindWithoutSaveResponseCustomersInnerCurrentPlansInner
     */
    'active'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SegmentFindWithoutSaveResponseCustomersInnerCurrentPlansInner
     */
    'setup_fees'?: number;
    /**
     * 
     * @type {Array<SegmentFindWithoutSaveResponseCustomersInnerCurrentPlansInnerAmountsInner>}
     * @memberof SegmentFindWithoutSaveResponseCustomersInnerCurrentPlansInner
     */
    'amounts'?: Array<SegmentFindWithoutSaveResponseCustomersInnerCurrentPlansInnerAmountsInner>;
}

