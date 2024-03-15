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

import { SourceUpdateCustomerInformationResponseCustomerCurrentPlansInner } from './source-update-customer-information-response-customer-current-plans-inner';

/**
 * 
 * @export
 * @interface SourceUpdateCustomerInformationResponseCustomer
 */
export interface SourceUpdateCustomerInformationResponseCustomer {
    /**
     * 
     * @type {string}
     * @memberof SourceUpdateCustomerInformationResponseCustomer
     */
    'oid'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceUpdateCustomerInformationResponseCustomer
     */
    'source_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceUpdateCustomerInformationResponseCustomer
     */
    'source'?: string;
    /**
     * 
     * @type {number}
     * @memberof SourceUpdateCustomerInformationResponseCustomer
     */
    'created'?: number;
    /**
     * 
     * @type {string}
     * @memberof SourceUpdateCustomerInformationResponseCustomer
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceUpdateCustomerInformationResponseCustomer
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceUpdateCustomerInformationResponseCustomer
     */
    'display_image'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceUpdateCustomerInformationResponseCustomer
     */
    'display_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceUpdateCustomerInformationResponseCustomer
     */
    'notes'?: string;
    /**
     * 
     * @type {number}
     * @memberof SourceUpdateCustomerInformationResponseCustomer
     */
    'ltv'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SourceUpdateCustomerInformationResponseCustomer
     */
    'is_active'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SourceUpdateCustomerInformationResponseCustomer
     */
    'is_canceled'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SourceUpdateCustomerInformationResponseCustomer
     */
    'current_mrr'?: number;
    /**
     * 
     * @type {Array<SourceUpdateCustomerInformationResponseCustomerCurrentPlansInner>}
     * @memberof SourceUpdateCustomerInformationResponseCustomer
     */
    'current_plans'?: Array<SourceUpdateCustomerInformationResponseCustomerCurrentPlansInner>;
}
