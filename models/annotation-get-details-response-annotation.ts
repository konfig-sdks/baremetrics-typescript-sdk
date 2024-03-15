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

import { AnnotationGetDetailsResponseAnnotationUser } from './annotation-get-details-response-annotation-user';

/**
 * 
 * @export
 * @interface AnnotationGetDetailsResponseAnnotation
 */
export interface AnnotationGetDetailsResponseAnnotation {
    /**
     * 
     * @type {string}
     * @memberof AnnotationGetDetailsResponseAnnotation
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof AnnotationGetDetailsResponseAnnotation
     */
    'metric'?: string;
    /**
     * 
     * @type {string}
     * @memberof AnnotationGetDetailsResponseAnnotation
     */
    'annotation'?: string;
    /**
     * 
     * @type {string}
     * @memberof AnnotationGetDetailsResponseAnnotation
     */
    'date'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AnnotationGetDetailsResponseAnnotation
     */
    'global'?: boolean;
    /**
     * 
     * @type {AnnotationGetDetailsResponseAnnotationUser}
     * @memberof AnnotationGetDetailsResponseAnnotation
     */
    'user'?: AnnotationGetDetailsResponseAnnotationUser;
}

