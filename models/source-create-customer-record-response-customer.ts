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
 * @interface SourceCreateCustomerRecordResponseCustomer
 */
export interface SourceCreateCustomerRecordResponseCustomer {
    /**
     * 
     * @type {string}
     * @memberof SourceCreateCustomerRecordResponseCustomer
     */
    'oid'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceCreateCustomerRecordResponseCustomer
     */
    'source_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceCreateCustomerRecordResponseCustomer
     */
    'source'?: string;
    /**
     * 
     * @type {number}
     * @memberof SourceCreateCustomerRecordResponseCustomer
     */
    'created'?: number;
    /**
     * 
     * @type {string}
     * @memberof SourceCreateCustomerRecordResponseCustomer
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceCreateCustomerRecordResponseCustomer
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceCreateCustomerRecordResponseCustomer
     */
    'display_image'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceCreateCustomerRecordResponseCustomer
     */
    'display_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceCreateCustomerRecordResponseCustomer
     */
    'notes'?: string;
    /**
     * 
     * @type {number}
     * @memberof SourceCreateCustomerRecordResponseCustomer
     */
    'ltv'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SourceCreateCustomerRecordResponseCustomer
     */
    'is_active'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SourceCreateCustomerRecordResponseCustomer
     */
    'is_canceled'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SourceCreateCustomerRecordResponseCustomer
     */
    'current_mrr'?: number;
    /**
     * 
     * @type {Array}
     * @memberof SourceCreateCustomerRecordResponseCustomer
     */
    'current_plans'?: Array;
}
