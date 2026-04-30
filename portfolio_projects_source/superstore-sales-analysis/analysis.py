"""
Superstore Sales Analysis — One-shot pipeline.

Usage:
    python analysis.py --input data/superstore_raw.csv --output reports/
"""

import argparse
from pathlib import Path

import pandas as pd

from src.cleaning import clean_dataset
from src.eda import build_eda_summary
from src.rfm import compute_rfm


def main() -> None:
    parser = argparse.ArgumentParser(description="Superstore sales analysis pipeline")
    parser.add_argument("--input", required=True, help="Path to raw CSV file")
    parser.add_argument("--output", default="reports/", help="Output directory")
    args = parser.parse_args()

    out_dir = Path(args.output)
    out_dir.mkdir(parents=True, exist_ok=True)

    print("📥  Loading raw data...")
    df = pd.read_csv(args.input, encoding="latin-1")

    print("🧹  Cleaning...")
    df_clean = clean_dataset(df)
    df_clean.to_csv(out_dir / "superstore_clean.csv", index=False)

    print("📊  Building EDA summary...")
    summary = build_eda_summary(df_clean)
    summary.to_excel(out_dir / "eda_summary.xlsx", index=False)

    print("👥  Computing RFM segmentation...")
    rfm = compute_rfm(df_clean)
    rfm.to_csv(out_dir / "rfm_segments.csv", index=False)

    print(f"✅  Done. Reports saved to {out_dir.resolve()}")


if __name__ == "__main__":
    main()
