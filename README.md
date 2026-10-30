# Bramble & Clover Bakery Site

Marketing site for Bramble & Clover Bakery built with React, Vite, and Tailwind CSS.

## Requirements

- Node.js 20+

## Local Development

# 1. Clone the repository
git clone https://github.com/TamerWaves0160/clover-bramble-bakery.git

# 2. Navigate into the project folder
cd clover-bramble-bakery

# 3. Install project dependencies
npm install

# 4. Start the development server
npm run dev

## Build and Preview

1. Type-check

   npm run lint

2. Build static files

   npm run build

3. Preview production build locally

   npm run preview

## Share With Customer (Temporary Online Link)

This is useful when you want feedback without a full public launch.

1. Build the site

   npm run build

2. Start the preview server

   npm run preview:share

3. Open a temporary tunnel URL

   npm run tunnel

4. Share the generated https URL with your customer

Notes:
- Keep the terminal running while the customer is reviewing.
- The link is temporary and changes each time you restart the tunnel.
- This is not a production deployment.

## Cleanup

Remove generated output:

npm run clean
