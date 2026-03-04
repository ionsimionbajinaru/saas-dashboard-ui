# SaaS Dashboard UI Starter

A modern, clean dashboard starter built with **HTML**, **CSS**, and **Vanilla JavaScript**.
The visual direction is inspired by lightweight, high-contrast SaaS products like Stripe, Linear, and Notion.

## Included page

- `dashboard.html` – main dashboard layout

## Folder structure

```text
saas-dashboard-ui/
  dashboard.html
  css/
    styles.css
  js/
    app.js
  components/
    sidebar.js
    cards.js
    table.js
```

## UI components

- **Sidebar** navigation with active state
- **Top navbar** with dashboard title and date metadata
- **Stats cards** for key SaaS metrics
- **Activity table** for subscription/payment activity
- **Chart container** placeholder for plugging in libraries like Chart.js, ECharts, or ApexCharts

## Responsive behavior

- Desktop: persistent left sidebar + content grid
- Tablet: two-column stat cards + stacked chart/table panels
- Mobile: single-column layout with stacked sections

## SaaS use cases

This starter works well as a base UI for:

1. Subscription analytics dashboards
2. Customer success/admin views
3. Billing and revenue monitoring pages
4. Internal product operations dashboards
5. White-label admin panels

## Getting started

1. Open `dashboard.html` directly in your browser, or
2. Serve the folder with a local static server:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173/dashboard.html`.

## Extend it

- Wire components to real API data
- Add filters, search, and date ranges
- Replace the chart placeholder with a real chart library
- Add dark mode with CSS variables
