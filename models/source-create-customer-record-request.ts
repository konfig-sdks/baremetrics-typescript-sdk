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
 * @interface SourceCreateCustomerRecordRequest
 */
export interface SourceCreateCustomerRecordRequest {
    /**
     * 
     * @type {string}
     * @memberof SourceCreateCustomerRecordRequest
     */
    'name'?: string;
    /**
     * Your own notes for this customer. These will be displayed in the profile
     * @type {string}
     * @memberof SourceCreateCustomerRecordRequest
     */
    'notes'?: string;
    /**
     * An email address for this customer. This is used to lookup extra profile information
     * @type {string}
     * @memberof SourceCreateCustomerRecordRequest
     */
    'email'?: string;
    /**
     * Your unique ID for the customer
     * @type {string}
     * @memberof SourceCreateCustomerRecordRequest
     */
    'oid': string;
    /**
     * A unix timestamp of when this customer was created. Defaults to now.
     * @type {string}
     * @memberof SourceCreateCustomerRecordRequest
     */
    'created'?: string;
}

