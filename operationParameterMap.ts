type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/v1/account-GET': {
        parameters: [
        ]
    },
    '/v1/annotations-POST': {
        parameters: [
            {
                name: 'metric'
            },
            {
                name: 'annotation'
            },
            {
                name: 'date'
            },
            {
                name: 'global'
            },
            {
                name: 'user_id'
            },
        ]
    },
    '/v1/annotations/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/annotations-GET': {
        parameters: [
        ]
    },
    '/v1/annotations/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/attributes/fields-POST': {
        parameters: [
            {
                name: 'title'
            },
            {
                name: 'field_type'
            },
        ]
    },
    '/v1/attributes/fields-GET': {
        parameters: [
        ]
    },
    '/v1/attributes-POST': {
        parameters: [
            {
                name: 'attributes'
            },
        ]
    },
    '/v1/attributes/fields/{id}-PUT': {
        parameters: [
            {
                name: 'title'
            },
            {
                name: 'id'
            },
        ]
    },
    '/v1/cancellation_insights/reasons-POST': {
        parameters: [
            {
                name: 'text'
            },
            {
                name: 'sort_key'
            },
        ]
    },
    '/v1/cancellation_insights/events-POST': {
        parameters: [
            {
                name: 'reason_id'
            },
            {
                name: 'comment'
            },
            {
                name: 'customer_oid'
            },
            {
                name: 'subscription_oids'
            },
        ]
    },
    '/v1/cancellation_insights/events/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/cancellation_insights/events-GET': {
        parameters: [
        ]
    },
    '/v1/cancellation_insights/events/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'reason_id'
            },
            {
                name: 'comment'
            },
        ]
    },
    '/v1/goals-POST': {
        parameters: [
            {
                name: 'metric'
            },
            {
                name: 'start_amount'
            },
            {
                name: 'end_amount'
            },
            {
                name: 'start_date'
            },
            {
                name: 'end_date'
            },
            {
                name: 'name'
            },
        ]
    },
    '/v1/goals/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/goals-GET': {
        parameters: [
        ]
    },
    '/v1/goals/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/metrics/{metric}/customers-GET': {
        parameters: [
            {
                name: 'start_date'
            },
            {
                name: 'end_date'
            },
            {
                name: 'metric'
            },
        ]
    },
    '/v1/metrics/cohorts-GET': {
        parameters: [
        ]
    },
    '/v1/metrics/{metric}-GET': {
        parameters: [
            {
                name: 'metric'
            },
            {
                name: 'start_date'
            },
            {
                name: 'end_date'
            },
            {
                name: 'compare_to'
            },
        ]
    },
    '/v1/metrics/{metric}/plans-GET': {
        parameters: [
            {
                name: 'start_date'
            },
            {
                name: 'end_date'
            },
            {
                name: 'metric'
            },
        ]
    },
    '/v1/metrics-GET': {
        parameters: [
            {
                name: 'start_date'
            },
            {
                name: 'end_date'
            },
        ]
    },
    '/v1/cancellation_insights/reasons/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/cancellation_insights/reasons/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/cancellation_insights/reasons/{id}-PUT': {
        parameters: [
            {
                name: 'text'
            },
            {
                name: 'id'
            },
            {
                name: 'sort_key'
            },
        ]
    },
    '/v1/segments-POST': {
        parameters: [
            {
                name: 'query'
            },
            {
                name: 'name'
            },
        ]
    },
    '/v1/segments/search-POST': {
        parameters: [
            {
                name: 'query'
            },
            {
                name: 'per_page'
            },
            {
                name: 'page'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/v1/segments/fields-GET': {
        parameters: [
        ]
    },
    '/v1/segments-GET': {
        parameters: [
        ]
    },
    '/v1/segments/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/segments/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/segments/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'name'
            },
            {
                name: 'query'
            },
        ]
    },
    '/v1/{source_id}/subscriptions/{subscription_oid}/cancel-PUT': {
        parameters: [
            {
                name: 'canceled_at'
            },
            {
                name: 'subscription_oid'
            },
            {
                name: 'source_id'
            },
        ]
    },
    '/v1/{source_id}/charges-POST': {
        parameters: [
            {
                name: 'oid'
            },
            {
                name: 'amount'
            },
            {
                name: 'currency'
            },
            {
                name: 'customer_oid'
            },
            {
                name: 'source_id'
            },
            {
                name: 'created'
            },
            {
                name: 'status'
            },
            {
                name: 'fee'
            },
            {
                name: 'subscription_oid'
            },
        ]
    },
    '/v1/{source_id}/customers-POST': {
        parameters: [
            {
                name: 'oid'
            },
            {
                name: 'source_id'
            },
            {
                name: 'name'
            },
            {
                name: 'notes'
            },
            {
                name: 'email'
            },
            {
                name: 'created'
            },
        ]
    },
    '/v1/{source_id}/refunds-POST': {
        parameters: [
            {
                name: 'oid'
            },
            {
                name: 'amount'
            },
            {
                name: 'currency'
            },
            {
                name: 'customer_oid'
            },
            {
                name: 'charge_oid'
            },
            {
                name: 'source_id'
            },
            {
                name: 'created'
            },
        ]
    },
    '/v1/{source_id}/plans-POST': {
        parameters: [
            {
                name: 'oid'
            },
            {
                name: 'name'
            },
            {
                name: 'currency'
            },
            {
                name: 'amount'
            },
            {
                name: 'interval'
            },
            {
                name: 'interval_count'
            },
            {
                name: 'source_id'
            },
            {
                name: 'trial_duration'
            },
            {
                name: 'trial_duration_unit'
            },
        ]
    },
    '/v1/{source_id}/subscriptions-POST': {
        parameters: [
            {
                name: 'oid'
            },
            {
                name: 'started_at'
            },
            {
                name: 'plan_oid'
            },
            {
                name: 'customer_oid'
            },
            {
                name: 'source_id'
            },
            {
                name: 'canceled_at'
            },
            {
                name: 'addons'
            },
            {
                name: 'quantity'
            },
            {
                name: 'discount'
            },
        ]
    },
    '/v1/{source_id}/customers/{oid}-DELETE': {
        parameters: [
            {
                name: 'oid'
            },
            {
                name: 'source_id'
            },
        ]
    },
    '/v1/{source_id}/plans/{oid}-DELETE': {
        parameters: [
            {
                name: 'oid'
            },
            {
                name: 'source_id'
            },
        ]
    },
    '/v1/{source_id}/charges/{oid}-GET': {
        parameters: [
            {
                name: 'source_id'
            },
            {
                name: 'oid'
            },
        ]
    },
    '/v1/{source_id}/charges-GET': {
        parameters: [
            {
                name: 'source_id'
            },
            {
                name: 'start'
            },
            {
                name: 'end'
            },
            {
                name: 'subscription_oid'
            },
            {
                name: 'customer_oid'
            },
        ]
    },
    '/v1/{source_id}/customers/{oid}-GET': {
        parameters: [
            {
                name: 'oid'
            },
            {
                name: 'source_id'
            },
        ]
    },
    '/v1/{source_id}/customers-GET': {
        parameters: [
            {
                name: 'source_id'
            },
            {
                name: 'search'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/v1/{source_id}/events/{id}-GET': {
        parameters: [
            {
                name: 'source_id'
            },
            {
                name: 'id'
            },
        ]
    },
    '/v1/{source_id}/events-GET': {
        parameters: [
            {
                name: 'source_id'
            },
            {
                name: 'live_stream'
            },
            {
                name: 'start'
            },
            {
                name: 'end'
            },
        ]
    },
    '/v1/{source_id}/plans/{oid}-GET': {
        parameters: [
            {
                name: 'oid'
            },
            {
                name: 'source_id'
            },
        ]
    },
    '/v1/{source_id}/plans-GET': {
        parameters: [
            {
                name: 'source_id'
            },
            {
                name: 'search'
            },
        ]
    },
    '/v1/{source_id}/refunds/{oid}-GET': {
        parameters: [
            {
                name: 'source_id'
            },
            {
                name: 'oid'
            },
        ]
    },
    '/v1/{source_id}/refunds-GET': {
        parameters: [
            {
                name: 'source_id'
            },
            {
                name: 'start'
            },
            {
                name: 'end'
            },
        ]
    },
    '/v1/{source_id}/subscriptions/{oid}-GET': {
        parameters: [
            {
                name: 'oid'
            },
            {
                name: 'source_id'
            },
        ]
    },
    '/v1/{source_id}/subscriptions-GET': {
        parameters: [
            {
                name: 'source_id'
            },
            {
                name: 'customer_oid'
            },
            {
                name: 'order'
            },
        ]
    },
    '/v1/{source_id}/customers/{oid}/events-GET': {
        parameters: [
            {
                name: 'source_id'
            },
            {
                name: 'oid'
            },
        ]
    },
    '/v1/sources-GET': {
        parameters: [
        ]
    },
    '/v1/{source_id}/charges/{oid}-DELETE': {
        parameters: [
            {
                name: 'source_id'
            },
            {
                name: 'oid'
            },
        ]
    },
    '/v1/{source_id}/refunds/{oid}-DELETE': {
        parameters: [
            {
                name: 'source_id'
            },
            {
                name: 'oid'
            },
        ]
    },
    '/v1/{source_id}/subscriptions/{oid}-DELETE': {
        parameters: [
            {
                name: 'oid'
            },
            {
                name: 'source_id'
            },
        ]
    },
    '/v1/{source_id}/customers/{customer_oid}-PUT': {
        parameters: [
            {
                name: 'customer_oid'
            },
            {
                name: 'source_id'
            },
            {
                name: 'name'
            },
            {
                name: 'notes'
            },
            {
                name: 'created'
            },
            {
                name: 'email'
            },
        ]
    },
    '/v1/{source_id}/plans/{plan_oid}-PUT': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'plan_oid'
            },
            {
                name: 'source_id'
            },
        ]
    },
    '/v1/{source_id}/subscriptions/{subscription_oid}-PUT': {
        parameters: [
            {
                name: 'plan_oid'
            },
            {
                name: 'subscription_oid'
            },
            {
                name: 'source_id'
            },
            {
                name: 'occurred_at'
            },
            {
                name: 'addons'
            },
            {
                name: 'quantity'
            },
            {
                name: 'discount'
            },
        ]
    },
    '/v1/users/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/users-GET': {
        parameters: [
        ]
    },
}