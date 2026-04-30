# 📘 Data Dictionary

| Table             | Column              | Type      | Description                                  |
|-------------------|---------------------|-----------|----------------------------------------------|
| `FactSpend`       | `date`              | Date      | Day of the spend                             |
| `FactSpend`       | `channel`           | String    | Acquisition channel (Paid Search, Social…)   |
| `FactSpend`       | `campaign`          | String    | Campaign code/name                           |
| `FactSpend`       | `amount`            | Decimal   | Spend in EUR                                 |
| `FactSpend`       | `impressions`       | Integer   | Ad impressions                               |
| `FactSpend`       | `clicks`            | Integer   | Ad clicks                                    |
| `FactConversion`  | `date`              | Date      | Conversion day                               |
| `FactConversion`  | `session_id`        | String    | Web session identifier                       |
| `FactConversion`  | `customer_id`       | String    | Linked CRM customer                          |
| `FactConversion`  | `revenue`           | Decimal   | Revenue generated                            |
| `DimDate`         | `Date`              | Date      | Calendar table (1 row per day)               |
| `DimChannel`      | `channel_id`        | String    | PK — channel                                 |
| `DimCampaign`     | `campaign_id`       | String    | PK — campaign                                |
| `DimCustomer`     | `customer_id`       | String    | PK — customer                                |
| `DimCustomer`     | `is_new_customer`   | Boolean   | First purchase in period                     |
