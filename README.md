# Orion Interactive Development Platform

## Development mode auth bypass
When `APP_ENV=development`, backend injects mock user and bypasses JWT + RBAC checks:
```json
{"id":1,"email":"dev@orion.local","role":"executive"}
```
Production auth/JWT flow remains intact.

## API architecture
- Central routes in `backend/app/api/routes.py`
- DB + env abstraction in `backend/app/database.py` and `backend/app/core/config.py`
- Auth/JWT retained in `backend/app/core/security.py`

## Frontend/backend flow
- Frontend uses reusable API client: `frontend/lib/api.ts`
- API base URL from `NEXT_PUBLIC_API_URL`
- Wired live views: KPIs, tasks, notifications, timeline, SEO metrics, executive overview, intelligence modules.

## Operational workflow lifecycle
- Task workflow: status updates + timeline events
- Lead pipeline stages and conversion scoring
- Content ops publishing and campaign tracking
- SEO lifecycle with schema/meta/optimization statuses
- Executive AI summary metrics

## Local setup
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python -m app.seed
uvicorn app.main:app --reload
```

```bash
cd frontend
cp .env.local.example .env.local
npm install
npm run dev
```

## Dev experience
- Health endpoint: `/api/health`
- Connectivity check visible on home page
- Rich seed dataset in `backend/app/seed.py`
