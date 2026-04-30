# 📈 Marketing Analysis Dashboard

<p align="center">
  <img src="./assets/banner.png" alt="Marketing Analysis Dashboard Banner" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Power%20BI-Desktop-F2C811?logo=powerbi&logoColor=black" />
  <img src="https://img.shields.io/badge/Python-3.11-3776AB?logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Pandas-2.x-150458?logo=pandas&logoColor=white" />
  <img src="https://img.shields.io/badge/Excel-Power%20Query-217346?logo=microsoftexcel&logoColor=white" />
  <img src="https://img.shields.io/badge/DAX-Measures-F2C811" />
  <img src="https://img.shields.io/badge/license-MIT-green" />
</p>

> 🇫🇷 **Tableau de bord interactif Power BI** dédié à l'analyse du tunnel de conversion marketing : KPI critiques, attribution multi-touch et drill-down par campagne.
> 🇬🇧 **Interactive Power BI dashboard** for marketing conversion-funnel analysis: critical KPIs, multi-touch attribution and per-campaign drill-down.

---

## 📋 Table of Contents

- [Business Context](#-business-context)
- [Architecture](#-architecture)
- [KPIs Tracked](#-kpis-tracked)
- [Dashboard Pages](#-dashboard-pages)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Data Model](#-data-model)
- [Sample DAX Measures](#-sample-dax-measures)
- [Roadmap](#-roadmap)
- [Author](#-author)

---

## 🎯 Business Context

This dashboard supports the marketing team in answering:

- 💰 **Where does our acquisition budget perform best?** (channel × campaign)
- 🔻 **Where do users drop off** in the funnel: Awareness → Interest → Consideration → Purchase?
- 📞 What is the **Cost per Lead (CPL)** and **Customer Acquisition Cost (CAC)** per channel?
- 🔁 What is the **ROI** and **payback period** of each campaign?
- 🧪 Which **A/B test variant** wins on conversion?

---

## 🏛️ Architecture

```
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ Raw CSV / APIs   │ ─► │  Python ETL       │ ─► │  Cleaned Parquet │
│ (GA4, Ads, CRM)  │    │  (data_prep.py)   │    │   /data/clean/   │
└──────────────────┘    └──────────────────┘    └──────────────────┘
                                                          │
                                                          ▼
                                              ┌────────────────────┐
                                              │    Power BI        │
                                              │  (Power Query +    │
                                              │   DAX measures)    │
                                              └────────────────────┘
                                                          │
                                                          ▼
                                                Interactive .pbix
```

---

## 📊 KPIs Tracked

| KPI                                  | Formula                                            |
|--------------------------------------|----------------------------------------------------|
| **Conversion Rate**                  | `Conversions / Sessions`                           |
| **CAC (Customer Acquisition Cost)**  | `Total spend / New customers`                      |
| **CPL (Cost Per Lead)**              | `Total spend / Leads`                              |
| **ROAS (Return On Ad Spend)**        | `Revenue / Spend`                                  |
| **ROI**                              | `(Revenue − Cost) / Cost`                          |
| **Funnel Drop-off**                  | `1 − (StepN / StepN-1)`                            |
| **Average Order Value (AOV)**        | `Revenue / Orders`                                 |
| **Customer Lifetime Value (CLV)**    | `AOV × Purchase frequency × Avg lifespan`          |

---

## 📑 Dashboard Pages

1. **Executive Summary** — top-line KPIs, MTD/QTD/YTD trends
2. **Acquisition Funnel** — conversion at each step, drop-off heatmap
3. **Channel Performance** — paid search, social, email, organic, referral
4. **Campaign Drill-down** — ROI, ROAS, A/B test results
5. **Cohorts & Retention** — monthly cohorts, CLV by acquisition channel
6. **Forecast** — next-quarter projection (Power BI built-in forecasting)

---

## 🚀 Tech Stack

| Tool                | Purpose                                      |
|---------------------|----------------------------------------------|
| Power BI Desktop    | Visualisation, report authoring              |
| Power Query (M)     | ETL inside Power BI                          |
| DAX                 | Measures, calculated columns, time-intelligence |
| Python 3.11         | Pre-processing pipeline (`data_prep.py`)     |
| Pandas              | Data wrangling                               |
| openpyxl            | Excel templates                              |

---

## 📁 Project Structure

```
marketing-analysis-dashboard/
├── data/
│   ├── raw/                    # untouched CSV exports (gitignored)
│   └── clean/                  # processed datasets ready for Power BI
├── scripts/
│   └── data_prep.py            # main ETL script
├── powerbi/
│   ├── dashboard_template.pbix # Power BI report (binary)
│   └── measures.dax            # DAX library
├── docs/
│   ├── data_dictionary.md
│   ├── kpi_definitions.md
│   └── screenshots/
├── requirements.txt
└── README.md
```

---

## ⚡ Quick Start

### 1️⃣ Pre-process the data
```bash
git clone https://github.com/boss-last/marketing-analysis-dashboard.git
cd marketing-analysis-dashboard

python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

python scripts/data_prep.py --input data/raw/ --output data/clean/
```

### 2️⃣ Open Power BI
1. Open `powerbi/dashboard_template.pbix` with **Power BI Desktop**
2. Click **Transform Data** → **Data source settings** → point to your local `data/clean/` folder
3. Click **Refresh** — KPIs update automatically

---

## 🗄️ Data Model

```
                ┌─────────────┐
                │  DimDate    │
                └─────────────┘
                       │
                       │
   ┌─────────────┐     │     ┌────────────────┐
   │ DimChannel  │─────┼─────│ FactSpend      │
   └─────────────┘     │     └────────────────┘
                       │             │
   ┌─────────────┐     │     ┌────────────────┐
   │ DimCampaign │─────┘─────│ FactConversion │
   └─────────────┘           └────────────────┘
                                     │
                             ┌──────────────┐
                             │ DimCustomer  │
                             └──────────────┘
```

---

## 🧮 Sample DAX Measures

```dax
Total Spend = SUM ( FactSpend[amount] )

Conversions = COUNTROWS ( FactConversion )

Conversion Rate =
DIVIDE ( [Conversions], DISTINCTCOUNT ( FactConversion[session_id] ) )

CAC =
DIVIDE ( [Total Spend], CALCULATE ( DISTINCTCOUNT ( DimCustomer[customer_id] ),
        DimCustomer[is_new_customer] = TRUE () ) )

ROAS = DIVIDE ( SUM ( FactConversion[revenue] ), [Total Spend] )

YoY Spend % =
VAR PrevYear = CALCULATE ( [Total Spend], SAMEPERIODLASTYEAR ( DimDate[Date] ) )
RETURN DIVIDE ( [Total Spend] - PrevYear, PrevYear )
```

A complete catalogue lives in `powerbi/measures.dax`.

---

## 🗺️ Roadmap

- [x] Funnel & channel pages
- [x] DAX measure library
- [ ] Real-time refresh via Power BI Service
- [ ] Embed in internal portal (Laravel Enterprise Portal)
- [ ] Slack alerting on KPI threshold breaches
- [ ] AI insights (Power BI Q&A)

---

## 👨‍💻 Author

**Bamba Amara Christian** — Data Analyst / Full-Stack Developer · [GitHub](https://github.com/boss-last)

## 📄 License

MIT — see [LICENSE](LICENSE)
