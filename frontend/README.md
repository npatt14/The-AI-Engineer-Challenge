# System 0b111

Retro Mac chat UI for the mental coach backend.

## Run locally

**Terminal 1** (backend, from repo root):

```bash
uv sync
export OPENAI_API_KEY=sk-your-key-here
uv run uvicorn api.index:app --reload
```

**Terminal 2** (frontend):

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Chat requests proxy to the API on port 8000.

## Deploy on Vercel

From the repo root:

```bash
vercel
```

Set `OPENAI_API_KEY` in the Vercel project environment variables. The app serves the Next.js UI and routes `/api/*` to the FastAPI backend.

## Stack

- Next.js (App Router)
- `POST /api/chat` with `{ "message": "..." }`
