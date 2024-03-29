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


/**
 * 
 * @export
 * @interface SourceCreateChargeOneOffRequest
 */
export interface SourceCreateChargeOneOffRequest {
    /**
     * Your unique reference for this charge
     * @type {string}
     * @memberof SourceCreateChargeOneOffRequest
     */
    'oid': string;
    /**
     * The charge amount (in cents)
     * @type {number}
     * @memberof SourceCreateChargeOneOffRequest
     */
    'amount': number;
    /**
     * The ISO code of the currency of this plan. E.G: usd
     * @type {string}
     * @memberof SourceCreateChargeOneOffRequest
     */
    'currency': string;
    /**
     * Your unique ID for the customer
     * @type {string}
     * @memberof SourceCreateChargeOneOffRequest
     */
    'customer_oid': string;
    /**
     * Unix timestamp of when this was created
     * @type {string}
     * @memberof SourceCreateChargeOneOffRequest
     */
    'created'?: string;
    /**
     * The status of this charge. Can be paid or failed. Defaults to paid.
     * @type {string}
     * @memberof SourceCreateChargeOneOffRequest
     */
    'status'?: string;
    /**
     * 
     * @type {number}
     * @memberof SourceCreateChargeOneOffRequest
     */
    'fee'?: number;
    /**
     * This can only be supplied when Subscription Auto Charging is disabled. Please contact support if you want to handle your subscription charges manually.
     * @type {string}
     * @memberof SourceCreateChargeOneOffRequest
     */
    'subscription_oid'?: string;
}

