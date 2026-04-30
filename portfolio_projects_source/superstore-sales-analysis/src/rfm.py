"""RFM (Recency, Frequency, Monetary) customer segmentation."""

from datetime import datetime

import pandas as pd


def compute_rfm(df: pd.DataFrame, snapshot_date: datetime | None = None) -> pd.DataFrame:
    """Compute RFM scores and assign a coarse segment label per customer."""
    if "order_date" not in df.columns:
        raise ValueError("`order_date` column is required for RFM analysis.")

    snapshot = snapshot_date or (df["order_date"].max() + pd.Timedelta(days=1))

    rfm = (
        df.groupby("customer_id")
          .agg(
              recency=("order_date", lambda s: (snapshot - s.max()).days),
              frequency=("order_id", "nunique"),
              monetary=("sales", "sum"),
          )
          .reset_index()
    )

    # Quintile scoring (1 = worst, 5 = best); recency is reversed
    rfm["R"] = pd.qcut(rfm["recency"], 5, labels=[5, 4, 3, 2, 1]).astype(int)
    rfm["F"] = pd.qcut(rfm["frequency"].rank(method="first"), 5, labels=[1, 2, 3, 4, 5]).astype(int)
    rfm["M"] = pd.qcut(rfm["monetary"], 5, labels=[1, 2, 3, 4, 5]).astype(int)
    rfm["RFM_score"] = rfm["R"] * 100 + rfm["F"] * 10 + rfm["M"]

    def label(row):
        if row["R"] >= 4 and row["F"] >= 4:
            return "Champions"
        if row["R"] >= 4:
            return "Loyal"
        if row["R"] <= 2 and row["F"] <= 2:
            return "At Risk"
        return "Regular"

    rfm["segment"] = rfm.apply(label, axis=1)
    return rfm
