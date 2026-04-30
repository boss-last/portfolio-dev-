"""
Marketing data preparation pipeline.

Reads raw CSV exports from Google Analytics, Google Ads, Meta Ads and the CRM,
joins them on Date × Channel × Campaign, computes derived KPIs, and outputs
a clean Parquet file consumable by Power BI.

Usage:
    python scripts/data_prep.py --input data/raw/ --output data/clean/
"""

from __future__ import annotations

import argparse
from pathlib import Path

import pandas as pd


REQUIRED_COLS = {"date", "channel", "campaign", "spend", "impressions", "clicks", "conversions", "revenue"}


def _normalise_columns(df: pd.DataFrame) -> pd.DataFrame:
    df.columns = (
        df.columns.str.strip().str.lower().str.replace(r"[^a-z0-9]+", "_", regex=True)
    )
    return df


def load_marketing_files(folder: Path) -> pd.DataFrame:
    """Concatenate all CSV files inside `folder` into a single DataFrame."""
    frames: list[pd.DataFrame] = []
    for csv in folder.glob("*.csv"):
        print(f"  • reading {csv.name}")
        df = _normalise_columns(pd.read_csv(csv))
        frames.append(df)

    if not frames:
        raise FileNotFoundError(f"No CSV files found in {folder}")

    df = pd.concat(frames, ignore_index=True)

    missing = REQUIRED_COLS - set(df.columns)
    if missing:
        raise ValueError(f"Missing required columns: {missing}")

    df["date"] = pd.to_datetime(df["date"], errors="coerce")
    df = df.dropna(subset=["date"])
    return df


def compute_kpis(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()
    df["ctr"] = (df["clicks"] / df["impressions"]).fillna(0)
    df["cpc"] = (df["spend"] / df["clicks"]).replace([float("inf"), -float("inf")], 0).fillna(0)
    df["cpa"] = (df["spend"] / df["conversions"]).replace([float("inf"), -float("inf")], 0).fillna(0)
    df["roas"] = (df["revenue"] / df["spend"]).replace([float("inf"), -float("inf")], 0).fillna(0)
    df["roi"] = ((df["revenue"] - df["spend"]) / df["spend"]).replace([float("inf"), -float("inf")], 0).fillna(0)
    return df


def main() -> None:
    parser = argparse.ArgumentParser(description="Marketing data prep pipeline")
    parser.add_argument("--input", required=True, help="Folder with raw CSV files")
    parser.add_argument("--output", required=True, help="Folder for cleaned Parquet")
    args = parser.parse_args()

    in_dir = Path(args.input)
    out_dir = Path(args.output)
    out_dir.mkdir(parents=True, exist_ok=True)

    print("📥  Loading raw files...")
    df = load_marketing_files(in_dir)

    print("🧮  Computing KPIs...")
    df = compute_kpis(df)

    out_path = out_dir / "marketing_clean.parquet"
    df.to_parquet(out_path, index=False)
    print(f"✅  Wrote {len(df):,} rows to {out_path}")


if __name__ == "__main__":
    main()
