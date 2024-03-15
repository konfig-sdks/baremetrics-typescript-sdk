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

import { SourceGetRefundsResponseRefundsInnerCustomer } from './source-get-refunds-response-refunds-inner-customer';

/**
 * 
 * @export
 * @interface SourceGetRefundsResponseRefundsInner
 */
export interface SourceGetRefundsResponseRefundsInner {
    /**
     * 
     * @type {string}
     * @memberof SourceGetRefundsResponseRefundsInner
     */
    'oid'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceGetRefundsResponseRefundsInner
     */
    'source_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceGetRefundsResponseRefundsInner
     */
    'source'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceGetRefundsResponseRefundsInner
     */
    'charge_oid'?: string;
    /**
     * 
     * @type {number}
     * @memberof SourceGetRefundsResponseRefundsInner
     */
    'created'?: number;
    /**
     * 
     * @type {SourceGetRefundsResponseRefundsInnerCustomer}
     * @memberof SourceGetRefundsResponseRefundsInner
     */
    'customer'?: SourceGetRefundsResponseRefundsInnerCustomer;
    /**
     * 
     * @type {number}
     * @memberof SourceGetRefundsResponseRefundsInner
     */
    'amount'?: number;
}

