"""Exploratory Data Analysis helpers."""

import pandas as pd


def build_eda_summary(df: pd.DataFrame) -> pd.DataFrame:
    """Return a per-category aggregation suitable for executive reporting."""
    if "category" not in df.columns:
        return df.describe(include="all").reset_index()

    summary = (
        df.groupby("category", as_index=False)
          .agg(
              orders=("order_id", "nunique"),
              total_sales=("sales", "sum"),
              total_profit=("profit", "sum"),
              avg_discount=("discount", "mean"),
          )
          .sort_values("total_sales", ascending=False)
    )
    summary["profit_margin_%"] = (summary["total_profit"] / summary["total_sales"] * 100).round(2)
    return summary
