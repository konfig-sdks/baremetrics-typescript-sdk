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
 * @interface SourceGetRefundDetailsResponseCustomer
 */
export interface SourceGetRefundDetailsResponseCustomer {
    /**
     * 
     * @type {string}
     * @memberof SourceGetRefundDetailsResponseCustomer
     */
    'oid'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceGetRefundDetailsResponseCustomer
     */
    'source_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceGetRefundDetailsResponseCustomer
     */
    'source'?: string;
    /**
     * 
     * @type {number}
     * @memberof SourceGetRefundDetailsResponseCustomer
     */
    'created'?: number;
    /**
     * 
     * @type {string}
     * @memberof SourceGetRefundDetailsResponseCustomer
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceGetRefundDetailsResponseCustomer
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceGetRefundDetailsResponseCustomer
     */
    'display_image'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceGetRefundDetailsResponseCustomer
     */
    'display_name'?: string;
    /**
     * 
     * @type {any}
     * @memberof SourceGetRefundDetailsResponseCustomer
     */
    'notes'?: any;
    /**
     * 
     * @type {number}
     * @memberof SourceGetRefundDetailsResponseCustomer
     */
    'ltv'?: number;
}

