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

import { EventListCancellationInsightEventsResponseEventsInnerCustomer } from './event-list-cancellation-insight-events-response-events-inner-customer';
import { EventListCancellationInsightEventsResponseEventsInnerReason } from './event-list-cancellation-insight-events-response-events-inner-reason';
import { EventListCancellationInsightEventsResponseEventsInnerSubscriptionsInner } from './event-list-cancellation-insight-events-response-events-inner-subscriptions-inner';

/**
 * 
 * @export
 * @interface EventListCancellationInsightEventsResponseEventsInner
 */
export interface EventListCancellationInsightEventsResponseEventsInner {
    /**
     * 
     * @type {string}
     * @memberof EventListCancellationInsightEventsResponseEventsInner
     */
    'id'?: string;
    /**
     * 
     * @type {any}
     * @memberof EventListCancellationInsightEventsResponseEventsInner
     */
    'comment'?: any;
    /**
     * 
     * @type {number}
     * @memberof EventListCancellationInsightEventsResponseEventsInner
     */
    'created_at'?: number;
    /**
     * 
     * @type {Array<EventListCancellationInsightEventsResponseEventsInnerSubscriptionsInner>}
     * @memberof EventListCancellationInsightEventsResponseEventsInner
     */
    'subscriptions'?: Array<EventListCancellationInsightEventsResponseEventsInnerSubscriptionsInner>;
    /**
     * 
     * @type {EventListCancellationInsightEventsResponseEventsInnerReason}
     * @memberof EventListCancellationInsightEventsResponseEventsInner
     */
    'reason'?: EventListCancellationInsightEventsResponseEventsInnerReason;
    /**
     * 
     * @type {EventListCancellationInsightEventsResponseEventsInnerCustomer}
     * @memberof EventListCancellationInsightEventsResponseEventsInner
     */
    'customer'?: EventListCancellationInsightEventsResponseEventsInnerCustomer;
}

