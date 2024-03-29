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
 * @interface EventCreateInsightEventResponseEventCustomer
 */
export interface EventCreateInsightEventResponseEventCustomer {
    /**
     * 
     * @type {string}
     * @memberof EventCreateInsightEventResponseEventCustomer
     */
    'oid'?: string;
    /**
     * 
     * @type {string}
     * @memberof EventCreateInsightEventResponseEventCustomer
     */
    'source_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof EventCreateInsightEventResponseEventCustomer
     */
    'source'?: string;
    /**
     * 
     * @type {number}
     * @memberof EventCreateInsightEventResponseEventCustomer
     */
    'created'?: number;
    /**
     * 
     * @type {string}
     * @memberof EventCreateInsightEventResponseEventCustomer
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof EventCreateInsightEventResponseEventCustomer
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof EventCreateInsightEventResponseEventCustomer
     */
    'display_image'?: string;
    /**
     * 
     * @type {string}
     * @memberof EventCreateInsightEventResponseEventCustomer
     */
    'display_name'?: string;
    /**
     * 
     * @type {any}
     * @memberof EventCreateInsightEventResponseEventCustomer
     */
    'notes'?: any;
    /**
     * 
     * @type {number}
     * @memberof EventCreateInsightEventResponseEventCustomer
     */
    'ltv'?: number;
}

