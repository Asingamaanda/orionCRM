# Orion Deployable Operational Workflow Platform

## Quick fix for import/bootstrap errors
If you see an `importlib._bootstrap` stack trace when starting API, install backend dependencies first.
Most common cause in this repo is missing PostgreSQL driver (`psycopg`) when `DATABASE_URL` points to Postgres.

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Then run:
```bash
uvicorn app.main:app --reload
```

## Role & Access Control
Roles: Admin, Operations, Marketing, Legal Staff, SEO, Executive.
RBAC map is implemented in `backend/app/core/rbac.py` and used by protected API routes.

## Authentication & Sessions
- Login endpoint: `POST /api/auth/login`
- Session persistence: `session_tokens`
- Audit logging: `audit_logs`
- JWT architecture prep in `backend/app/core/security.py` + env-driven secrets.

## Database + Migration Readiness
- DB abstraction via `DATABASE_URL` in `backend/app/core/config.py` and `backend/app/database.py`.
- SQLite dev default + PostgreSQL production-ready connection.
- Alembic scaffold: `backend/alembic.ini`, `backend/alembic/versions/0001_initial.py`.

## Deployment
### Docker
```bash
docker compose up --build
```
