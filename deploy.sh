#!/bin/bash
set -e

echo "================================================"
echo "  Property Management App — Cloudflare Deploy"
echo "================================================"
echo ""

# Check wrangler
if ! command -v wrangler &> /dev/null; then
  if ! npx wrangler --version &> /dev/null; then
    echo "ERROR: wrangler not found. Run: npm install"
    exit 1
  fi
  WRANGLER="npx wrangler"
else
  WRANGLER="wrangler"
fi

# Check login
echo "▶ Checking Cloudflare authentication..."
$WRANGLER whoami || { echo "Please run: wrangler login"; exit 1; }
echo ""

# Create D1 database
echo "▶ Creating D1 database (property-mgmt-db)..."
DB_CREATE_OUTPUT=$($WRANGLER d1 create property-mgmt-db 2>&1) || {
  echo "  (Database may already exist — continuing)"
  DB_CREATE_OUTPUT=$($WRANGLER d1 list 2>&1)
}
echo "$DB_CREATE_OUTPUT"
echo ""

# Extract database ID
DB_ID=$(echo "$DB_CREATE_OUTPUT" | grep -oE '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}' | head -1)

if [ -z "$DB_ID" ]; then
  echo "Could not auto-detect database ID."
  echo ""
  echo "Manual steps:"
  echo "  1. Run: wrangler d1 list"
  echo "  2. Copy the ID for 'property-mgmt-db'"
  echo "  3. Edit wrangler.toml: set database_id = \"<your-id>\""
  echo "  4. Re-run this script"
  exit 1
fi

echo "  Database ID: $DB_ID"

# Patch wrangler.toml
if grep -q "PLACEHOLDER_DB_ID" wrangler.toml; then
  sed -i.bak "s/PLACEHOLDER_DB_ID/$DB_ID/" wrangler.toml
  rm -f wrangler.toml.bak
  echo "  Updated wrangler.toml with database ID"
fi
echo ""

# Run migrations
echo "▶ Running database migrations..."
$WRANGLER d1 migrations apply property-mgmt-db --remote
echo ""

# Deploy worker
echo "▶ Deploying Worker + Assets..."
$WRANGLER deploy
echo ""

echo "================================================"
echo "  Deployment complete!"
echo "================================================"
echo ""
echo "Default password: admin123"
echo "To change password: wrangler secret put AUTH_PASSWORD"
echo ""
