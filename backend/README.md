# Threat Modeller Backend

This is a FastAPI backend that exposes an endpoint for threat model generation using Google Gemini.

## Setup

1. Create a virtual environment and install dependencies:

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

2. Copy `.env.example` to `.env` and add your `GEMINI_API_KEY`.

3. Run the server:

```bash
uvicorn main:app --reload
```

The API docs will be available at `http://localhost:8000/docs`.
