# Orion Deployable Operational Workflow Platform

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

## Workflow Engines
- Task execution: recurring rule, templates, approvals, escalations, dependency tracking (`workflow_tasks`).
- WhatsApp workflow: assignment, follow-up stages, consultation prep, response status (`whatsapp_workflows`).
- Content workflow: approval stages, publishing workflow, campaign ownership, schedules, media status (`content_workflows`).
- SEO workflow: assignment, verification, lifecycle, engineering deployment tracking (`seo_execution_workflows`).

## Operational Intelligence & Executive Reporting
- Executive KPIs: health score, campaign performance, lead conversion, engineering velocity, SEO trend, workload.
- System health: API status, failed tasks, notification delivery failures, background jobs.
- AI executive summaries endpoint for operations, SEO, marketing, bottlenecks, lead conversion.

## Deployment
### Docker
```bash
docker compose up --build
```

### Local
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

```bash
cd frontend
npm install
npm run dev
```
