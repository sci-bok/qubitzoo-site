#!/usr/bin/env python3
"""Add 'published' frontmatter field from 'year' for Quartz date display."""

import re
from pathlib import Path

CONTENT = Path(__file__).resolve().parents[1] / "content"


def fix_dates(content_dir: Path) -> int:
    fixed = 0
    for md in sorted(content_dir.rglob("*.md")):
        text = md.read_text(errors="ignore")
        if not text.startswith("---"):
            continue

        parts = text.split("---", 2)
        if len(parts) < 3:
            continue

        frontmatter = parts[1]

        # Skip if 'published' already exists
        if re.search(r"^published:", frontmatter, re.M):
            continue

        # Look for 'year' field
        m = re.search(r"^year:\s*['\"]?(\d{4})['\"]?\s*$", frontmatter, re.M)
        if not m:
            # Also try 'first_proposed_year'
            m = re.search(r"^first_proposed_year:\s*['\"]?(\d{4})['\"]?\s*$", frontmatter, re.M)

        if m:
            year = m.group(1)
            # Insert published field after year line
            new_fm = frontmatter + f"published: {year}-01-01\n"
            new_text = f"---{new_fm}---{parts[2]}"
            md.write_text(new_text)
            fixed += 1

    return fixed


if __name__ == "__main__":
    n = fix_dates(CONTENT)
    print(f"Fixed dates on {n} files")
