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

import { SourceGetCustomerDetailsResponseCustomerCurrentPlansInner } from './source-get-customer-details-response-customer-current-plans-inner';

/**
 * 
 * @export
 * @interface SourceGetCustomerDetailsResponseCustomer
 */
export interface SourceGetCustomerDetailsResponseCustomer {
    /**
     * 
     * @type {string}
     * @memberof SourceGetCustomerDetailsResponseCustomer
     */
    'oid'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceGetCustomerDetailsResponseCustomer
     */
    'source_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceGetCustomerDetailsResponseCustomer
     */
    'source'?: string;
    /**
     * 
     * @type {number}
     * @memberof SourceGetCustomerDetailsResponseCustomer
     */
    'created'?: number;
    /**
     * 
     * @type {string}
     * @memberof SourceGetCustomerDetailsResponseCustomer
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceGetCustomerDetailsResponseCustomer
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceGetCustomerDetailsResponseCustomer
     */
    'display_image'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceGetCustomerDetailsResponseCustomer
     */
    'display_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceGetCustomerDetailsResponseCustomer
     */
    'notes'?: string;
    /**
     * 
     * @type {number}
     * @memberof SourceGetCustomerDetailsResponseCustomer
     */
    'ltv'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SourceGetCustomerDetailsResponseCustomer
     */
    'is_active'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SourceGetCustomerDetailsResponseCustomer
     */
    'is_canceled'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SourceGetCustomerDetailsResponseCustomer
     */
    'current_mrr'?: number;
    /**
     * 
     * @type {Array<SourceGetCustomerDetailsResponseCustomerCurrentPlansInner>}
     * @memberof SourceGetCustomerDetailsResponseCustomer
     */
    'current_plans'?: Array<SourceGetCustomerDetailsResponseCustomerCurrentPlansInner>;
}

