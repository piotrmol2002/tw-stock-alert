from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from . import models, schemas, crud, deps

app = FastAPI()

@app.on_event("startup")
def startup():
    models.Base.metadata.create_all(bind=deps.engine)

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/inventory", response_model=list[schemas.Inventory])
def list_inventory(skip: int = 0, limit: int = 100, db: Session = Depends(deps.get_db)):
    return crud.get_inventory(db, skip, limit)

@app.put("/inventory/{inv_id}", response_model=schemas.Inventory)
def set_inventory(inv_id: int, data: schemas.InventoryCreate, db: Session = Depends(deps.get_db)):
    return crud.update_inventory(db, inv_id, data.current_qty)

@app.get("/alerts", response_model=list[schemas.Alert])
def list_alerts(limit: int = 50, db: Session = Depends(deps.get_db)):
    return db.query(models.Alert).order_by(models.Alert.created_at.desc()).limit(limit).all()
