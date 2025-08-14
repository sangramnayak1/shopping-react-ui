# ShopSmart – Shopping React UI

Frontend built with **Vite + React + Tailwind**. Two themes: **Luxury (dark+gold)** and **Bright (light+colorful)**.
Mock API fallback when backend is unavailable. Docker-ready.

## Quickstart (Local)
```bash
npm install
npm run dev
```

## Docker
```bash
docker-compose up --build
```

App served on http://localhost:5173 (proxied static Nginx build).

## Theme
Use the sun/moon icon in the header to toggle **Bright** and **Luxury** themes.

## Backend Integration
Update `src/services/api.js` with your Spring Boot base URL and endpoints. The service auto-falls back to `mockApi.js` if the backend is unreachable.
