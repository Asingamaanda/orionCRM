from fastapi import FastAPI
from app.api.routes import router
from app.database import Base, engine

app = FastAPI(title="Orion Operational Workflow API")
Base.metadata.create_all(bind=engine)
app.include_router(router)


@app.get("/health")
def health_check():
    return {"status": "ok"}
