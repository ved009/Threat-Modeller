# Threat Modeller

This repository contains a starter project for a threat modelling tool with an Angular frontend and a FastAPI backend.

- `frontend/` – Angular application for uploading architecture diagrams and displaying AI-generated analysis.
- `backend/` – FastAPI service integrating with Google Gemini to generate threat models.

See the README files in each directory for setup instructions.

## Deploying to Vercel

This repository includes a `vercel.json` configuration that builds the Angular
frontend and exposes the FastAPI backend as a serverless function. Set the
`GEMINI_API_KEY` environment variable in your Vercel project settings and deploy
the root of this repo.
