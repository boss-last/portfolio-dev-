"""Data cleaning utilities for the Superstore dataset."""

import pandas as pd


def clean_dataset(df: pd.DataFrame) -> pd.DataFrame:
    """Run the full cleaning pipeline and return a tidy DataFrame."""
    df = df.copy()

    # Standardise column names
    df.columns = (
        df.columns
        .str.strip()
        .str.lower()
        .str.replace(r"[^a-z0-9]+", "_", regex=True)
        .str.strip("_")
    )

    # Parse dates
    for col in ("order_date", "ship_date"):
        if col in df.columns:
            df[col] = pd.to_datetime(df[col], errors="coerce", dayfirst=False)

    # Drop duplicates & rows with missing key fields
    df = df.drop_duplicates()
    df = df.dropna(subset=["order_id", "customer_id", "sales"])

    # Cast numerics
    for col in ("sales", "quantity", "discount", "profit"):
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce")

    return df.reset_index(drop=True)
