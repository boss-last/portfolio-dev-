# 📊 Superstore Sales Analysis

<p align="center">
  <img src="./assets/banner.png" alt="Superstore Sales Analysis Banner" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.11-3776AB?logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Pandas-2.x-150458?logo=pandas&logoColor=white" />
  <img src="https://img.shields.io/badge/NumPy-1.26-013243?logo=numpy&logoColor=white" />
  <img src="https://img.shields.io/badge/Matplotlib-3.8-11557C" />
  <img src="https://img.shields.io/badge/Seaborn-0.13-4C72B0" />
  <img src="https://img.shields.io/badge/Jupyter-Lab-F37626?logo=jupyter&logoColor=white" />
  <img src="https://img.shields.io/badge/license-MIT-green" />
</p>

> 🇫🇷 **Analyse exploratoire complète** des ventes d'un super-marché (Superstore) : nettoyage, EDA, segmentation client RFM, prévision saisonnière, et export de rapports détaillés.
> 🇬🇧 **End-to-end exploratory analysis** of Superstore sales: cleaning, EDA, RFM customer segmentation, seasonal forecasting and detailed report exports.

---

## 📋 Table of Contents

- [Dataset](#-dataset)
- [Project Goals](#-project-goals)
- [Methodology](#-methodology)
- [Key Findings](#-key-findings)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Sample Visualizations](#-sample-visualizations)
- [Reproducibility](#-reproducibility)
- [Author](#-author)

---

## 📂 Dataset

- **Source**: Superstore Sales (Tableau Sample dataset)
- **Records**: ~10 000 orders
- **Period**: 4 years
- **Features**: Order ID, Order Date, Customer ID, Segment, Region, Category, Sub-Category, Sales, Quantity, Discount, Profit

---

## 🎯 Project Goals

1. **Clean** raw data: missing values, duplicates, type coercion, outliers
2. Run a thorough **EDA** to understand sales distribution and profitability
3. Identify the **most/least profitable** categories, regions and segments
4. Perform **RFM segmentation** to cluster customers
5. Forecast **seasonal trends** (monthly sales) using basic time-series
6. Export **executive-ready reports** to Excel and PDF

---

## 🔬 Methodology

```
Raw CSV
   │
   ▼
┌────────────┐    ┌────────────┐    ┌────────────┐    ┌──────────────┐
│  Cleaning  │ ─► │    EDA     │ ─► │ Segmentation│ ─► │  Forecasting │
│  (Pandas)  │    │ (matplot.) │    │   (RFM)    │    │  (rolling)   │
└────────────┘    └────────────┘    └────────────┘    └──────────────┘
                                                              │
                                                              ▼
                                                       Excel / PDF reports
```

---

## 🔑 Key Findings (sample)

- 🏆 **Technology** category drives ~36% of total sales but **Furniture** has the lowest profit margin
- 📍 **West region** outperforms East/South in profitability per order
- 💸 Discounts > 30% almost systematically lead to **negative profit**
- 🛒 Top 20% of customers (RFM "Champions") generate ~60% of revenue
- 📈 Strong **Q4 seasonality** with December peak across 4 years

---

## 🚀 Tech Stack

| Tool             | Purpose                          |
|------------------|----------------------------------|
| Python 3.11      | Core language                    |
| Pandas / NumPy   | Data manipulation                |
| Matplotlib       | Static charts                    |
| Seaborn          | Statistical viz                  |
| Plotly           | Interactive charts (optional)    |
| scikit-learn     | RFM clustering (KMeans)          |
| openpyxl         | Excel export                     |
| Jupyter Lab      | Notebook environment             |

---

## 📁 Project Structure

```
superstore-sales-analysis/
├── data/                    # raw + cleaned datasets (gitignored except samples)
│   └── superstore_raw.csv
├── notebooks/
│   ├── 01_cleaning.ipynb
│   ├── 02_eda.ipynb
│   ├── 03_rfm_segmentation.ipynb
│   └── 04_forecasting.ipynb
├── src/                     # reusable Python modules
│   ├── cleaning.py
│   ├── eda.py
│   └── rfm.py
├── reports/                 # generated Excel / PDF outputs
├── analysis.py              # one-shot pipeline script
├── requirements.txt
└── README.md
```

---

## ⚡ Quick Start

### Prerequisites
- Python ≥ 3.10
- pip / venv (or conda)

### Installation
```bash
git clone https://github.com/boss-last/superstore-sales-analysis.git
cd superstore-sales-analysis

python -m venv .venv
source .venv/bin/activate      # Windows: .venv\Scripts\activate

pip install -r requirements.txt
```

### Run the notebooks
```bash
jupyter lab
# Open notebooks/01_cleaning.ipynb and run cells in order
```

### Run the pipeline
```bash
python analysis.py --input data/superstore_raw.csv --output reports/
```

---

## 📈 Sample Visualizations

> Replace with screenshots from your notebooks once executed.

- `reports/sales_by_category.png`
- `reports/profit_heatmap_region_subcategory.png`
- `reports/rfm_clusters_3d.html`
- `reports/forecast_2025.png`

---

## 🔁 Reproducibility

- Random seeds fixed (`numpy`, `sklearn`)
- Deterministic notebooks (no time-dependent calls)
- `requirements.txt` pinned versions

---

## 👨‍💻 Author

**Bamba Amara Christian** — Data Analyst / Full-Stack Developer · [GitHub](https://github.com/boss-last)

## 📄 License

MIT — see [LICENSE](LICENSE)
