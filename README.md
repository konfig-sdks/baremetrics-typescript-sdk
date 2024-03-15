<div align="left">

[![Visit Baremetrics](./header.png)](https://baremetrics.com)

# [Baremetrics](https://baremetrics.com)<a id="baremetrics"></a>

Baremetrics provides real-time subscription metrics for teams built with Stripe, Shopify Partners, Braintree, Recurly, Chargebee, Google Play, and App Store Connect. 

In addition to metrics, Baremetrics provides tools that help you reduce churn and grow your business faster: 

Recover: Prevent failed charges and keep your hard-earned revenue with our 100% automated toolkit. 

Cancellation insights: Learn exactly why your customers cancel, calculate lost revenue by cancellation reason, and send automated emails to win customers back.

Flightpath: Plan for the future with flexible financial modeling tools built for growing SaaS companies.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`baremetrics.account.getDetails`](#baremetricsaccountgetdetails)
  * [`baremetrics.annotation.createNew`](#baremetricsannotationcreatenew)
  * [`baremetrics.annotation.getDetails`](#baremetricsannotationgetdetails)
  * [`baremetrics.annotation.list`](#baremetricsannotationlist)
  * [`baremetrics.annotation.removeById`](#baremetricsannotationremovebyid)
  * [`baremetrics.attribute.createField`](#baremetricsattributecreatefield)
  * [`baremetrics.attribute.getFields`](#baremetricsattributegetfields)
  * [`baremetrics.attribute.setProperties`](#baremetricsattributesetproperties)
  * [`baremetrics.attribute.updateField`](#baremetricsattributeupdatefield)
  * [`baremetrics.cancellationInsight.createNewReason`](#baremetricscancellationinsightcreatenewreason)
  * [`baremetrics.event.createInsightEvent`](#baremetricseventcreateinsightevent)
  * [`baremetrics.event.getEventById`](#baremetricseventgeteventbyid)
  * [`baremetrics.event.listCancellationInsightEvents`](#baremetricseventlistcancellationinsightevents)
  * [`baremetrics.event.updateEventById`](#baremetricseventupdateeventbyid)
  * [`baremetrics.goal.createNewGoal`](#baremetricsgoalcreatenewgoal)
  * [`baremetrics.goal.getById`](#baremetricsgoalgetbyid)
  * [`baremetrics.goal.getList`](#baremetricsgoalgetlist)
  * [`baremetrics.goal.remove`](#baremetricsgoalremove)
  * [`baremetrics.metric.listCustomers`](#baremetricsmetriclistcustomers)
  * [`baremetrics.metric.showCohorts`](#baremetricsmetricshowcohorts)
  * [`baremetrics.metric.showDetails`](#baremetricsmetricshowdetails)
  * [`baremetrics.metric.showPlanBreakout`](#baremetricsmetricshowplanbreakout)
  * [`baremetrics.metric.showSummary`](#baremetricsmetricshowsummary)
  * [`baremetrics.reason.deleteById`](#baremetricsreasondeletebyid)
  * [`baremetrics.reason.showDetails`](#baremetricsreasonshowdetails)
  * [`baremetrics.reason.updateReasonById`](#baremetricsreasonupdatereasonbyid)
  * [`baremetrics.segment.createRequest`](#baremetricssegmentcreaterequest)
  * [`baremetrics.segment.findWithoutSave`](#baremetricssegmentfindwithoutsave)
  * [`baremetrics.segment.getFields`](#baremetricssegmentgetfields)
  * [`baremetrics.segment.listSegments`](#baremetricssegmentlistsegments)
  * [`baremetrics.segment.removeById`](#baremetricssegmentremovebyid)
  * [`baremetrics.segment.showDetails`](#baremetricssegmentshowdetails)
  * [`baremetrics.segment.updateById`](#baremetricssegmentupdatebyid)
  * [`baremetrics.source.cancelSubscription`](#baremetricssourcecancelsubscription)
  * [`baremetrics.source.createChargeOneOff`](#baremetricssourcecreatechargeoneoff)
  * [`baremetrics.source.createCustomerRecord`](#baremetricssourcecreatecustomerrecord)
  * [`baremetrics.source.createOneOffRefund`](#baremetricssourcecreateoneoffrefund)
  * [`baremetrics.source.createPlan`](#baremetricssourcecreateplan)
  * [`baremetrics.source.createSubscription`](#baremetricssourcecreatesubscription)
  * [`baremetrics.source.deleteCustomer`](#baremetricssourcedeletecustomer)
  * [`baremetrics.source.deletePlan`](#baremetricssourcedeleteplan)
  * [`baremetrics.source.getChargeDetails`](#baremetricssourcegetchargedetails)
  * [`baremetrics.source.getChargeList`](#baremetricssourcegetchargelist)
  * [`baremetrics.source.getCustomerDetails`](#baremetricssourcegetcustomerdetails)
  * [`baremetrics.source.getCustomerList`](#baremetricssourcegetcustomerlist)
  * [`baremetrics.source.getEventById`](#baremetricssourcegeteventbyid)
  * [`baremetrics.source.getEvents`](#baremetricssourcegetevents)
  * [`baremetrics.source.getPlan`](#baremetricssourcegetplan)
  * [`baremetrics.source.getPlansList`](#baremetricssourcegetplanslist)
  * [`baremetrics.source.getRefundDetails`](#baremetricssourcegetrefunddetails)
  * [`baremetrics.source.getRefunds`](#baremetricssourcegetrefunds)
  * [`baremetrics.source.getSubscription`](#baremetricssourcegetsubscription)
  * [`baremetrics.source.getSubscriptions`](#baremetricssourcegetsubscriptions)
  * [`baremetrics.source.listCustomerEvents`](#baremetricssourcelistcustomerevents)
  * [`baremetrics.source.listSources`](#baremetricssourcelistsources)
  * [`baremetrics.source.removeOneOffCharge`](#baremetricssourceremoveoneoffcharge)
  * [`baremetrics.source.removeOneOffRefund`](#baremetricssourceremoveoneoffrefund)
  * [`baremetrics.source.removeSubscription`](#baremetricssourceremovesubscription)
  * [`baremetrics.source.updateCustomerInformation`](#baremetricssourceupdatecustomerinformation)
  * [`baremetrics.source.updatePlan`](#baremetricssourceupdateplan)
  * [`baremetrics.source.updateSubscription`](#baremetricssourceupdatesubscription)
  * [`baremetrics.user.getUserById`](#baremetricsusergetuserbyid)
  * [`baremetrics.user.listUsers`](#baremetricsuserlistusers)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Baremetrics&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Baremetrics } from "baremetrics-typescript-sdk";

const baremetrics = new Baremetrics({
  // Defining the base path is optional and defaults to https://api.baremetrics.com
  // basePath: "https://api.baremetrics.com",
  apiKey: "API_KEY",
});

const getDetailsResponse = await baremetrics.account.getDetails();

console.log(getDetailsResponse);
```

## Reference<a id="reference"></a>


### `baremetrics.account.getDetails`<a id="baremetricsaccountgetdetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await baremetrics.account.getDetails();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/account` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.annotation.createNew`<a id="baremetricsannotationcreatenew"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewResponse = await baremetrics.annotation.createNew({
  metric: "metric_example",
  annotation: "annotation_example",
  date: "1970-01-01",
  global: true,
  user_id: "user_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### metric: `string`<a id="metric-string"></a>

Which metric is this for?

##### annotation: `string`<a id="annotation-string"></a>

The annotation text

##### date: `string`<a id="date-string"></a>

YYYY-MM-DD

##### global: `boolean`<a id="global-boolean"></a>

Should this show on all graphs?

##### user_id: `string`<a id="user_id-string"></a>

Who added this annotation?

#### 🔄 Return<a id="🔄-return"></a>

[AnnotationCreateNewResponse](./models/annotation-create-new-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/annotations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.annotation.getDetails`<a id="baremetricsannotationgetdetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await baremetrics.annotation.getDetails({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AnnotationGetDetailsResponse](./models/annotation-get-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/annotations/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.annotation.list`<a id="baremetricsannotationlist"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await baremetrics.annotation.list();
```

#### 🔄 Return<a id="🔄-return"></a>

[AnnotationListResponse](./models/annotation-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/annotations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.annotation.removeById`<a id="baremetricsannotationremovebyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse = await baremetrics.annotation.removeById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/annotations/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.attribute.createField`<a id="baremetricsattributecreatefield"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createFieldResponse = await baremetrics.attribute.createField({
  title: "title_example",
  field_type: "field_type_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

##### field_type: `string`<a id="field_type-string"></a>

string, integer, date, boolean, array

#### 🔄 Return<a id="🔄-return"></a>

[AttributeCreateFieldResponse](./models/attribute-create-field-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/attributes/fields` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.attribute.getFields`<a id="baremetricsattributegetfields"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFieldsResponse = await baremetrics.attribute.getFields();
```

#### 🔄 Return<a id="🔄-return"></a>

[AttributeGetFieldsResponse](./models/attribute-get-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/attributes/fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.attribute.setProperties`<a id="baremetricsattributesetproperties"></a>

Create or update properties on customers. This will work across all sources.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setPropertiesResponse = await baremetrics.attribute.setProperties({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### attributes: [`AttributeSetPropertiesRequestAttributesInner`](./models/attribute-set-properties-request-attributes-inner.ts)[]<a id="attributes-attributesetpropertiesrequestattributesinnermodelsattribute-set-properties-request-attributes-innerts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/attributes` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.attribute.updateField`<a id="baremetricsattributeupdatefield"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFieldResponse = await baremetrics.attribute.updateField({
  id: "id_example",
  title: "title_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AttributeUpdateFieldResponse](./models/attribute-update-field-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/attributes/fields/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.cancellationInsight.createNewReason`<a id="baremetricscancellationinsightcreatenewreason"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewReasonResponse =
  await baremetrics.cancellationInsight.createNewReason({
    text: "text_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### text: `string`<a id="text-string"></a>

##### sort_key: `number`<a id="sort_key-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CancellationInsightCreateNewReasonResponse](./models/cancellation-insight-create-new-reason-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/cancellation_insights/reasons` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.event.createInsightEvent`<a id="baremetricseventcreateinsightevent"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createInsightEventResponse = await baremetrics.event.createInsightEvent({
  reason_id: "reason_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reason_id: `string`<a id="reason_id-string"></a>

##### comment: `string`<a id="comment-string"></a>

##### customer_oid: `string`<a id="customer_oid-string"></a>

##### subscription_oids: `string`[]<a id="subscription_oids-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EventCreateInsightEventResponse](./models/event-create-insight-event-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/cancellation_insights/events` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.event.getEventById`<a id="baremetricseventgeteventbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEventByIdResponse = await baremetrics.event.getEventById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EventGetEventByIdResponse](./models/event-get-event-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/cancellation_insights/events/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.event.listCancellationInsightEvents`<a id="baremetricseventlistcancellationinsightevents"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCancellationInsightEventsResponse =
  await baremetrics.event.listCancellationInsightEvents();
```

#### 🔄 Return<a id="🔄-return"></a>

[EventListCancellationInsightEventsResponse](./models/event-list-cancellation-insight-events-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/cancellation_insights/events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.event.updateEventById`<a id="baremetricseventupdateeventbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEventByIdResponse = await baremetrics.event.updateEventById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### reason_id: `string`<a id="reason_id-string"></a>

##### comment: `string`<a id="comment-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EventUpdateEventByIdResponse](./models/event-update-event-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/cancellation_insights/events/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.goal.createNewGoal`<a id="baremetricsgoalcreatenewgoal"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewGoalResponse = await baremetrics.goal.createNewGoal({
  metric: "metric_example",
  start_amount: 1,
  end_amount: 1,
  start_date: "1970-01-01",
  end_date: "1970-01-01",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### metric: `string`<a id="metric-string"></a>

##### start_amount: `number`<a id="start_amount-number"></a>

In cents

##### end_amount: `number`<a id="end_amount-number"></a>

In cents

##### start_date: `string`<a id="start_date-string"></a>

##### end_date: `string`<a id="end_date-string"></a>

##### name: `string`<a id="name-string"></a>

The goal name

#### 🔄 Return<a id="🔄-return"></a>

[GoalCreateNewGoalResponse](./models/goal-create-new-goal-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/goals` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.goal.getById`<a id="baremetricsgoalgetbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await baremetrics.goal.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Unique ID

#### 🔄 Return<a id="🔄-return"></a>

[GoalGetByIdResponse](./models/goal-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/goals/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.goal.getList`<a id="baremetricsgoalgetlist"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await baremetrics.goal.getList();
```

#### 🔄 Return<a id="🔄-return"></a>

[GoalGetListResponse](./models/goal-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/goals` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.goal.remove`<a id="baremetricsgoalremove"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeResponse = await baremetrics.goal.remove({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/goals/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.metric.listCustomers`<a id="baremetricsmetriclistcustomers"></a>

Returns a list of customers that make up this metric. For example, the upgrades metric will return all customers who have upgraded within the selected range. You can also see their MRR contribution.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCustomersResponse = await baremetrics.metric.listCustomers({
  startDate: "1970-01-01",
  endDate: "1970-01-01",
  metric: "metric_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startDate: `string | Date`<a id="startdate-string--date"></a>

##### endDate: `string | Date`<a id="enddate-string--date"></a>

##### metric: `string`<a id="metric-string"></a>

You can see a list of available metrics [here](https://developers.baremetrics.com/reference/introduction)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/metrics/{metric}/customers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.metric.showCohorts`<a id="baremetricsmetricshowcohorts"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showCohortsResponse = await baremetrics.metric.showCohorts();
```

#### 🔄 Return<a id="🔄-return"></a>

[MetricShowCohortsResponseInner](./models/metric-show-cohorts-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/metrics/cohorts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.metric.showDetails`<a id="baremetricsmetricshowdetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showDetailsResponse = await baremetrics.metric.showDetails({
  metric: "metric_example",
  startDate: "2016-11-01",
  endDate: "2016-11-26",
  compareTo: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### metric: `string`<a id="metric-string"></a>

You can see a list of available metrics [here](https://developers.baremetrics.com/reference/introduction)

##### startDate: `string | Date`<a id="startdate-string--date"></a>

##### endDate: `string | Date`<a id="enddate-string--date"></a>

##### compareTo: `number`<a id="compareto-number"></a>

The number of days ago to compare results to

#### 🔄 Return<a id="🔄-return"></a>

[MetricShowDetailsResponse](./models/metric-show-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/metrics/{metric}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.metric.showPlanBreakout`<a id="baremetricsmetricshowplanbreakout"></a>

This allows you to break down a metric by plan, across a date range

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showPlanBreakoutResponse = await baremetrics.metric.showPlanBreakout({
  startDate: "1970-01-01",
  endDate: "1970-01-01",
  metric: "metric_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startDate: `string | Date`<a id="startdate-string--date"></a>

##### endDate: `string | Date`<a id="enddate-string--date"></a>

##### metric: `string`<a id="metric-string"></a>

You can see a list of available metrics [here](https://developers.baremetrics.com/reference/introduction)

#### 🔄 Return<a id="🔄-return"></a>

[MetricShowPlanBreakoutResponse](./models/metric-show-plan-breakout-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/metrics/{metric}/plans` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.metric.showSummary`<a id="baremetricsmetricshowsummary"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showSummaryResponse = await baremetrics.metric.showSummary({
  startDate: "2016-11-01",
  endDate: "2016-11-26",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startDate: `string`<a id="startdate-string"></a>

##### endDate: `string`<a id="enddate-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MetricShowSummaryResponse](./models/metric-show-summary-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/metrics` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.reason.deleteById`<a id="baremetricsreasondeletebyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await baremetrics.reason.deleteById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/cancellation_insights/reasons/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.reason.showDetails`<a id="baremetricsreasonshowdetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showDetailsResponse = await baremetrics.reason.showDetails({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ReasonShowDetailsResponse](./models/reason-show-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/cancellation_insights/reasons/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.reason.updateReasonById`<a id="baremetricsreasonupdatereasonbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateReasonByIdResponse = await baremetrics.reason.updateReasonById({
  id: "id_example",
  text: "text_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### text: `string`<a id="text-string"></a>

##### id: `string`<a id="id-string"></a>

##### sort_key: `number`<a id="sort_key-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ReasonUpdateReasonByIdResponse](./models/reason-update-reason-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/cancellation_insights/reasons/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.segment.createRequest`<a id="baremetricssegmentcreaterequest"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRequestResponse = await baremetrics.segment.createRequest({
  query: [
    {
      category: "category_example",
      field: "field_example",
      value: "value_example",
      method: "method_example",
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: [`SegmentCreateRequestRequestQueryInner`](./models/segment-create-request-request-query-inner.ts)[]<a id="query-segmentcreaterequestrequestqueryinnermodelssegment-create-request-request-query-innerts"></a>

##### name: `string`<a id="name-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SegmentCreateRequestResponse](./models/segment-create-request-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/segments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.segment.findWithoutSave`<a id="baremetricssegmentfindwithoutsave"></a>

Search for a segment without saving it

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findWithoutSaveResponse = await baremetrics.segment.findWithoutSave({
  perPage: 30,
  page: 0,
  sort: "created",
  order: "asc",
  query: [
    {
      category: "category_example",
      field: "field_example",
      value: "value_example",
      method: "method_example",
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: [`SegmentCreateRequestRequestQueryInner`](./models/segment-create-request-request-query-inner.ts)[]<a id="query-segmentcreaterequestrequestqueryinnermodelssegment-create-request-request-query-innerts"></a>

##### perPage: `number`<a id="perpage-number"></a>

##### page: `number`<a id="page-number"></a>

##### sort: `string`<a id="sort-string"></a>

##### order: `string`<a id="order-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SegmentFindWithoutSaveResponse](./models/segment-find-without-save-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/segments/search` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.segment.getFields`<a id="baremetricssegmentgetfields"></a>

Returns the fields that can be used to create/search a segment. The key is the category, and a category contains multiple fields.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFieldsResponse = await baremetrics.segment.getFields();
```

#### 🔄 Return<a id="🔄-return"></a>

[SegmentGetFieldsResponse](./models/segment-get-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/segments/fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.segment.listSegments`<a id="baremetricssegmentlistsegments"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSegmentsResponse = await baremetrics.segment.listSegments();
```

#### 🔄 Return<a id="🔄-return"></a>

[SegmentListSegmentsResponse](./models/segment-list-segments-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/segments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.segment.removeById`<a id="baremetricssegmentremovebyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse = await baremetrics.segment.removeById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/segments/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.segment.showDetails`<a id="baremetricssegmentshowdetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showDetailsResponse = await baremetrics.segment.showDetails({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SegmentShowDetailsResponse](./models/segment-show-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/segments/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.segment.updateById`<a id="baremetricssegmentupdatebyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await baremetrics.segment.updateById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### name: `string`<a id="name-string"></a>

##### query: [`SegmentCreateRequestRequestQueryInner`](./models/segment-create-request-request-query-inner.ts)[]<a id="query-segmentcreaterequestrequestqueryinnermodelssegment-create-request-request-query-innerts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SegmentUpdateByIdResponse](./models/segment-update-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/segments/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.cancelSubscription`<a id="baremetricssourcecancelsubscription"></a>

This endpoint allows you to cancel a subscription.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelSubscriptionResponse = await baremetrics.source.cancelSubscription({
  subscriptionOid: "subscriptionOid_example",
  sourceId: "sourceId_example",
  canceled_at: "1970-01-01T00:00:00.00Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### canceled_at: `string`<a id="canceled_at-string"></a>

A unix timestamp of when this subscription was, or should be canceled.

##### subscriptionOid: `string`<a id="subscriptionoid-string"></a>

Your unique ID for the subscription

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

#### 🔄 Return<a id="🔄-return"></a>

[SourceCancelSubscriptionResponse](./models/source-cancel-subscription-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/subscriptions/{subscription_oid}/cancel` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.createChargeOneOff`<a id="baremetricssourcecreatechargeoneoff"></a>

Create "One-Off" charges that are not linked to a subscription.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createChargeOneOffResponse = await baremetrics.source.createChargeOneOff({
  sourceId: "sourceId_example",
  oid: "oid_example",
  amount: 1,
  currency: "currency_example",
  customer_oid: "customer_oid_example",
  created: "NOW",
  status: "paid",
  fee: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### oid: `string`<a id="oid-string"></a>

Your unique reference for this charge

##### amount: `number`<a id="amount-number"></a>

The charge amount (in cents)

##### currency: `string`<a id="currency-string"></a>

The ISO code of the currency of this plan. E.G: usd

##### customer_oid: `string`<a id="customer_oid-string"></a>

Your unique ID for the customer

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### created: `string`<a id="created-string"></a>

Unix timestamp of when this was created

##### status: `string`<a id="status-string"></a>

The status of this charge. Can be paid or failed. Defaults to paid.

##### fee: `number`<a id="fee-number"></a>

##### subscription_oid: `string`<a id="subscription_oid-string"></a>

This can only be supplied when Subscription Auto Charging is disabled. Please contact support if you want to handle your subscription charges manually.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/charges` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.createCustomerRecord`<a id="baremetricssourcecreatecustomerrecord"></a>

This endpoint allows you to create a customer record. After you create the record, you will be able to create a [Subscription](https://developers.baremetrics.com/reference/introduction)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCustomerRecordResponse =
  await baremetrics.source.createCustomerRecord({
    sourceId: "sourceId_example",
    oid: "oid_example",
    created: "NOW",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### oid: `string`<a id="oid-string"></a>

Your unique ID for the customer

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### name: `string`<a id="name-string"></a>

##### notes: `string`<a id="notes-string"></a>

Your own notes for this customer. These will be displayed in the profile

##### email: `string`<a id="email-string"></a>

An email address for this customer. This is used to lookup extra profile information

##### created: `string`<a id="created-string"></a>

A unix timestamp of when this customer was created. Defaults to now.

#### 🔄 Return<a id="🔄-return"></a>

[SourceCreateCustomerRecordResponse](./models/source-create-customer-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/customers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.createOneOffRefund`<a id="baremetricssourcecreateoneoffrefund"></a>

Create "One-Off" refunds that are not linked to a subscription.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOneOffRefundResponse = await baremetrics.source.createOneOffRefund({
  sourceId: "sourceId_example",
  oid: "oid_example",
  amount: 1,
  currency: "currency_example",
  customer_oid: "customer_oid_example",
  charge_oid: "charge_oid_example",
  created: "NOW",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### oid: `string`<a id="oid-string"></a>

Your unique reference for this charge

##### amount: `number`<a id="amount-number"></a>

The charge amount (in cents)

##### currency: `string`<a id="currency-string"></a>

The ISO code of the currency of this plan. E.G: usd

##### customer_oid: `string`<a id="customer_oid-string"></a>

Your unique ID for the customer

##### charge_oid: `string`<a id="charge_oid-string"></a>

Which charge do you want to refund? This must be an API charge.

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### created: `string`<a id="created-string"></a>

Unix timestamp of when this was created

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/refunds` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.createPlan`<a id="baremetricssourcecreateplan"></a>

Create a plan for use when [creating](https://developers.baremetrics.com/reference/introduction) or [updating](https://developers.baremetrics.com/reference/introduction) subscriptions.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPlanResponse = await baremetrics.source.createPlan({
  sourceId: "sourceId_example",
  oid: "oid_example",
  name: "name_example",
  currency: "currency_example",
  amount: 1,
  interval: "interval_example",
  interval_count: 1,
  trial_duration: 0,
  trial_duration_unit: "day",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### oid: `string`<a id="oid-string"></a>

Your unique ID for the plan

##### name: `string`<a id="name-string"></a>

Your internal name for this plan. This will be displayed in the Plan Breakout section

##### currency: `string`<a id="currency-string"></a>

The ISO code of the currency of this plan. E.G: usd

##### amount: `number`<a id="amount-number"></a>

How much is this plan? (In cents)

##### interval: `string`<a id="interval-string"></a>

day, month or year

##### interval_count: `number`<a id="interval_count-number"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### trial_duration: `number`<a id="trial_duration-number"></a>

The duration of this trial. This is to be used in conjunction with trial_duration_unit

##### trial_duration_unit: `string`<a id="trial_duration_unit-string"></a>

This is to be used in conjunction with trial_duration

#### 🔄 Return<a id="🔄-return"></a>

[SourceCreatePlanResponse](./models/source-create-plan-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/plans` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.createSubscription`<a id="baremetricssourcecreatesubscription"></a>

This endpoint allows you to create a Subscription.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSubscriptionResponse = await baremetrics.source.createSubscription({
  sourceId: "sourceId_example",
  oid: "oid_example",
  started_at: "1970-01-01T00:00:00.00Z",
  plan_oid: "plan_oid_example",
  customer_oid: "customer_oid_example",
  quantity: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### oid: `string`<a id="oid-string"></a>

Your unique ID for the subscription

##### started_at: `string`<a id="started_at-string"></a>

A unix timestamp of when this subscription started

##### plan_oid: `string`<a id="plan_oid-string"></a>

Your unique ID for the plan

##### customer_oid: `string`<a id="customer_oid-string"></a>

Your unique ID for the customer

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### canceled_at: `string`<a id="canceled_at-string"></a>

A unix timestamp of when this subscription was, or should be canceled. This cannot be changed, so only set this if you are certain you know when the subscription will end.

##### addons: [`SourceCreateSubscriptionRequestAddonsInner`](./models/source-create-subscription-request-addons-inner.ts)[]<a id="addons-sourcecreatesubscriptionrequestaddonsinnermodelssource-create-subscription-request-addons-innerts"></a>

##### quantity: `number`<a id="quantity-number"></a>

##### discount: `number`<a id="discount-number"></a>

Integer value (in the same currency as the plan)

#### 🔄 Return<a id="🔄-return"></a>

[SourceCreateSubscriptionResponse](./models/source-create-subscription-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/subscriptions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.deleteCustomer`<a id="baremetricssourcedeletecustomer"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCustomerResponse = await baremetrics.source.deleteCustomer({
  oid: "oid_example",
  sourceId: "sourceId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### oid: `string`<a id="oid-string"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/customers/{oid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.deletePlan`<a id="baremetricssourcedeleteplan"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deletePlanResponse = await baremetrics.source.deletePlan({
  oid: "oid_example",
  sourceId: "sourceId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### oid: `string`<a id="oid-string"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/plans/{oid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.getChargeDetails`<a id="baremetricssourcegetchargedetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getChargeDetailsResponse = await baremetrics.source.getChargeDetails({
  sourceId: "sourceId_example",
  oid: "oid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### oid: `string`<a id="oid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/charges/{oid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.getChargeList`<a id="baremetricssourcegetchargelist"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getChargeListResponse = await baremetrics.source.getChargeList({
  sourceId: "sourceId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### start: `string`<a id="start-string"></a>

##### end: `string`<a id="end-string"></a>

##### subscriptionOid: `string`<a id="subscriptionoid-string"></a>

##### customerOid: `string`<a id="customeroid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/charges` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.getCustomerDetails`<a id="baremetricssourcegetcustomerdetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomerDetailsResponse = await baremetrics.source.getCustomerDetails({
  oid: "oid_example",
  sourceId: "sourceId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### oid: `string`<a id="oid-string"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

#### 🔄 Return<a id="🔄-return"></a>

[SourceGetCustomerDetailsResponse](./models/source-get-customer-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/customers/{oid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.getCustomerList`<a id="baremetricssourcegetcustomerlist"></a>

Fetch a list of all customers on your account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomerListResponse = await baremetrics.source.getCustomerList({
  sourceId: "sourceId_example",
  sort: "created",
  order: "asc",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### search: `string`<a id="search-string"></a>

Allows you to search for a customer based on: oid, email, notes and name

##### sort: `string`<a id="sort-string"></a>

Allows you to sort the results. You can use ltv or created

##### order: `string`<a id="order-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SourceGetCustomerListResponse](./models/source-get-customer-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/customers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.getEventById`<a id="baremetricssourcegeteventbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEventByIdResponse = await baremetrics.source.getEventById({
  sourceId: "sourceId_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### id: `string`<a id="id-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/events/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.getEvents`<a id="baremetricssourcegetevents"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEventsResponse = await baremetrics.source.getEvents({
  sourceId: "sourceId_example",
  liveStream: "false",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### liveStream: `string`<a id="livestream-string"></a>

Set this to true to only return events that show up in the live stream

##### start: `string`<a id="start-string"></a>

##### end: `string`<a id="end-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.getPlan`<a id="baremetricssourcegetplan"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPlanResponse = await baremetrics.source.getPlan({
  oid: "oid_example",
  sourceId: "sourceId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### oid: `string`<a id="oid-string"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

#### 🔄 Return<a id="🔄-return"></a>

[SourceGetPlanResponse](./models/source-get-plan-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/plans/{oid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.getPlansList`<a id="baremetricssourcegetplanslist"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPlansListResponse = await baremetrics.source.getPlansList({
  sourceId: "sourceId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### search: `string`<a id="search-string"></a>

Allows you to search based on the name or oid fields

#### 🔄 Return<a id="🔄-return"></a>

[SourceGetPlansListResponse](./models/source-get-plans-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/plans` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.getRefundDetails`<a id="baremetricssourcegetrefunddetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRefundDetailsResponse = await baremetrics.source.getRefundDetails({
  sourceId: "sourceId_example",
  oid: "oid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### oid: `string`<a id="oid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SourceGetRefundDetailsResponse](./models/source-get-refund-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/refunds/{oid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.getRefunds`<a id="baremetricssourcegetrefunds"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRefundsResponse = await baremetrics.source.getRefunds({
  sourceId: "sourceId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### start: `string`<a id="start-string"></a>

##### end: `string`<a id="end-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SourceGetRefundsResponse](./models/source-get-refunds-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/refunds` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.getSubscription`<a id="baremetricssourcegetsubscription"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSubscriptionResponse = await baremetrics.source.getSubscription({
  oid: "oid_example",
  sourceId: "sourceId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### oid: `string`<a id="oid-string"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/subscriptions/{oid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.getSubscriptions`<a id="baremetricssourcegetsubscriptions"></a>

Get all subscriptions linked to this API Key.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSubscriptionsResponse = await baremetrics.source.getSubscriptions({
  sourceId: "sourceId_example",
  order: "desc",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### customerOid: `string`<a id="customeroid-string"></a>

This allows you to return subscriptions for a given customer

##### order: `string`<a id="order-string"></a>

Allows you to order subscriptions from newest to oldest `desc` or oldest to newest `asc`

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/subscriptions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.listCustomerEvents`<a id="baremetricssourcelistcustomerevents"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCustomerEventsResponse = await baremetrics.source.listCustomerEvents({
  sourceId: "sourceId_example",
  oid: "oid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### oid: `string`<a id="oid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SourceListCustomerEventsResponse](./models/source-list-customer-events-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/customers/{oid}/events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.listSources`<a id="baremetricssourcelistsources"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSourcesResponse = await baremetrics.source.listSources();
```

#### 🔄 Return<a id="🔄-return"></a>

[SourceListSourcesResponse](./models/source-list-sources-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/sources` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.removeOneOffCharge`<a id="baremetricssourceremoveoneoffcharge"></a>

Delete "One-Off" charges that are not linked to a subscription.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeOneOffChargeResponse = await baremetrics.source.removeOneOffCharge({
  sourceId: "sourceId_example",
  oid: "oid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### oid: `string`<a id="oid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/charges/{oid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.removeOneOffRefund`<a id="baremetricssourceremoveoneoffrefund"></a>

Delete "One-Off" refunds that are not linked to a subscription.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeOneOffRefundResponse = await baremetrics.source.removeOneOffRefund({
  sourceId: "sourceId_example",
  oid: "oid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### oid: `string`<a id="oid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/refunds/{oid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.removeSubscription`<a id="baremetricssourceremovesubscription"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeSubscriptionResponse = await baremetrics.source.removeSubscription({
  oid: "oid_example",
  sourceId: "sourceId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### oid: `string`<a id="oid-string"></a>

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/subscriptions/{oid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.updateCustomerInformation`<a id="baremetricssourceupdatecustomerinformation"></a>

This endpoint allows you to update the basic information stored on a Customer, such as first name, last name and notes

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCustomerInformationResponse =
  await baremetrics.source.updateCustomerInformation({
    customerOid: "customerOid_example",
    sourceId: "sourceId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerOid: `string`<a id="customeroid-string"></a>

Your unique ID for the customer

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### name: `string`<a id="name-string"></a>

##### notes: `string`<a id="notes-string"></a>

##### created: `string`<a id="created-string"></a>

Unix timestamp of when this customer was created

##### email: `string`<a id="email-string"></a>

Email for this customer

#### 🔄 Return<a id="🔄-return"></a>

[SourceUpdateCustomerInformationResponse](./models/source-update-customer-information-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/customers/{customer_oid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.updatePlan`<a id="baremetricssourceupdateplan"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePlanResponse = await baremetrics.source.updatePlan({
  planOid: "planOid_example",
  sourceId: "sourceId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The new name of this plan

##### planOid: `string`<a id="planoid-string"></a>

Your interval plan id

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

#### 🔄 Return<a id="🔄-return"></a>

[SourceUpdatePlanResponse](./models/source-update-plan-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/plans/{plan_oid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.source.updateSubscription`<a id="baremetricssourceupdatesubscription"></a>

This allows you to update a Subscription, such as changing plans and addons.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSubscriptionResponse = await baremetrics.source.updateSubscription({
  subscriptionOid: "subscriptionOid_example",
  sourceId: "sourceId_example",
  plan_oid: "plan_oid_example",
  occurred_at: "NOW",
  quantity: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### plan_oid: `string`<a id="plan_oid-string"></a>

Your unique ID for the plan

##### subscriptionOid: `string`<a id="subscriptionoid-string"></a>

Your unique ID for the subscription

##### sourceId: `string`<a id="sourceid-string"></a>

Please see [Sources](ref:sources)

##### occurred_at: `string`<a id="occurred_at-string"></a>

A unix timestamp of when this change occurred. Defaults to now

##### addons: [`SourceCreateSubscriptionRequestAddonsInner`](./models/source-create-subscription-request-addons-inner.ts)[]<a id="addons-sourcecreatesubscriptionrequestaddonsinnermodelssource-create-subscription-request-addons-innerts"></a>

In cents. The OID can be anything you want.

##### quantity: `number`<a id="quantity-number"></a>

##### discount: `number`<a id="discount-number"></a>

Integer value (in the same currency as the plan)

#### 🔄 Return<a id="🔄-return"></a>

[SourceUpdateSubscriptionResponse](./models/source-update-subscription-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/{source_id}/subscriptions/{subscription_oid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.user.getUserById`<a id="baremetricsusergetuserbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserByIdResponse = await baremetrics.user.getUserById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UserGetUserByIdResponse](./models/user-get-user-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/users/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `baremetrics.user.listUsers`<a id="baremetricsuserlistusers"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUsersResponse = await baremetrics.user.listUsers();
```

#### 🔄 Return<a id="🔄-return"></a>

[UserListUsersResponse](./models/user-list-users-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
