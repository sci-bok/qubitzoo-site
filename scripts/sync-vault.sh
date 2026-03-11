#!/usr/bin/env bash
# Sync vault content into Quartz content/ directory.
# Usage: ./scripts/sync-vault.sh [vault-path]
#
# Copies Zoo/, References/, Evergreen/, MOCs/, Figures/ and Welcome.md
# Excludes: deleted/, Inbox/, Meta/, reports/, specs/, .obsidian/

set -euo pipefail

VAULT_PATH="${1:-../qubit-zettelkasten}"
CONTENT_DIR="$(dirname "$0")/../content"

if [ ! -d "$VAULT_PATH" ]; then
  echo "ERROR: vault not found at $VAULT_PATH"
  exit 1
fi

echo "Syncing vault content from $VAULT_PATH → $CONTENT_DIR"

# Clean existing content (except index.md and static pages we maintain)
find "$CONTENT_DIR" -mindepth 1 -maxdepth 1 \
  ! -name 'index.md' \
  ! -name 'faq.md' \
  ! -name 'about.md' \
  ! -name 'racing.md' \
  -exec rm -rf {} +

# Copy vault folders
for folder in Zoo References Evergreen MOCs Figures; do
  if [ -d "$VAULT_PATH/$folder" ]; then
    cp -R "$VAULT_PATH/$folder" "$CONTENT_DIR/$folder"
    echo "  ✓ $folder ($(find "$CONTENT_DIR/$folder" -name '*.md' | wc -l | tr -d ' ') files)"
  fi
done

# Welcome.md excluded — replaced by index.md landing page

echo "Sync complete."
