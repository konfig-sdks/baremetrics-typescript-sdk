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

import { SourceCreateSubscriptionRequestAddonsInner } from './source-create-subscription-request-addons-inner';

/**
 * 
 * @export
 * @interface SourceCreateSubscriptionRequest
 */
export interface SourceCreateSubscriptionRequest {
    /**
     * Your unique ID for the subscription
     * @type {string}
     * @memberof SourceCreateSubscriptionRequest
     */
    'oid': string;
    /**
     * A unix timestamp of when this subscription started
     * @type {string}
     * @memberof SourceCreateSubscriptionRequest
     */
    'started_at': string;
    /**
     * A unix timestamp of when this subscription was, or should be canceled. This cannot be changed, so only set this if you are certain you know when the subscription will end.
     * @type {string}
     * @memberof SourceCreateSubscriptionRequest
     */
    'canceled_at'?: string;
    /**
     * Your unique ID for the plan
     * @type {string}
     * @memberof SourceCreateSubscriptionRequest
     */
    'plan_oid': string;
    /**
     * Your unique ID for the customer
     * @type {string}
     * @memberof SourceCreateSubscriptionRequest
     */
    'customer_oid': string;
    /**
     * 
     * @type {Array<SourceCreateSubscriptionRequestAddonsInner>}
     * @memberof SourceCreateSubscriptionRequest
     */
    'addons'?: Array<SourceCreateSubscriptionRequestAddonsInner>;
    /**
     * 
     * @type {number}
     * @memberof SourceCreateSubscriptionRequest
     */
    'quantity'?: number;
    /**
     * Integer value (in the same currency as the plan)
     * @type {number}
     * @memberof SourceCreateSubscriptionRequest
     */
    'discount'?: number;
}

