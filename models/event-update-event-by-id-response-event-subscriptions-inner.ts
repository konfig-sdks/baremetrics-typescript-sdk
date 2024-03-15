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
 * @interface EventUpdateEventByIdResponseEventSubscriptionsInner
 */
export interface EventUpdateEventByIdResponseEventSubscriptionsInner {
    /**
     * 
     * @type {string}
     * @memberof EventUpdateEventByIdResponseEventSubscriptionsInner
     */
    'oid'?: string;
    /**
     * 
     * @type {string}
     * @memberof EventUpdateEventByIdResponseEventSubscriptionsInner
     */
    'source_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof EventUpdateEventByIdResponseEventSubscriptionsInner
     */
    'source'?: string;
    /**
     * 
     * @type {number}
     * @memberof EventUpdateEventByIdResponseEventSubscriptionsInner
     */
    'canceled_at'?: number;
    /**
     * 
     * @type {number}
     * @memberof EventUpdateEventByIdResponseEventSubscriptionsInner
     */
    'started_at'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof EventUpdateEventByIdResponseEventSubscriptionsInner
     */
    'processed'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EventUpdateEventByIdResponseEventSubscriptionsInner
     */
    'active'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof EventUpdateEventByIdResponseEventSubscriptionsInner
     */
    'quantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof EventUpdateEventByIdResponseEventSubscriptionsInner
     */
    'discount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EventUpdateEventByIdResponseEventSubscriptionsInner
     */
    'mrr'?: number;
    /**
     * 
     * @type {number}
     * @memberof EventUpdateEventByIdResponseEventSubscriptionsInner
     */
    'add_on_mrr'?: number;
    /**
     * 
     * @type {any}
     * @memberof EventUpdateEventByIdResponseEventSubscriptionsInner
     */
    'plan'?: any;
}

