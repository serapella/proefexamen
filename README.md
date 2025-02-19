# Formula 1 API 2024

A RESTful API built with Node.js, Express, TypeScript, and Mongoose for managing Formula 1 race data for the 2024 season.

## Features

- Get information about F1 races, teams, drivers, and circuits
- Search functionality for drivers and circuits
- Country flag integration
- Time formatting options for race results

## API Endpoints

### Races
- `GET /api/races` - Get all races
  - Optional query parameter: `format=true` for formatted race times
  - Returns race details with driver information and country flags

### Teams
- `GET /api/teams` - Get all teams
  - Returns team details with driver information and country flags

### Drivers
- `GET /api/drivers` - Get all drivers
  - Optional query parameter: `search=<name>` for searching drivers
  - Returns driver details with country flags

### Circuits
- `GET /api/circuits` - Get all circuits
  - Optional query parameter: `search=<name>` for searching circuits
  - Returns circuit details with country flags

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Build

```bash
npm run build
```

## Start Production Server

```bash
npm start
```