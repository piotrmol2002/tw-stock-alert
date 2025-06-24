from sqlalchemy.orm import Session
from . import models, schemas
from datetime import datetime

def get_inventory(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Inventory).offset(skip).limit(limit).all()

def update_inventory(db: Session, inv_id: int, qty: int):
    inv = db.query(models.Inventory).filter(models.Inventory.id == inv_id).first()
    inv.current_qty = qty
    db.commit()
    db.refresh(inv)
    return inv

def create_alert(db: Session, product_id: int, qty: int):
    alert = models.Alert(
        product_id=product_id,
        qty=qty,
        created_at=datetime.utcnow(),
        sent=False
    )
    db.add(alert)
    db.commit()
    db.refresh(alert)
    return alert

def mark_alert_sent(db: Session, alert_id: int):
    alert = db.query(models.Alert).filter(models.Alert.id == alert_id).first()
    alert.sent = True
    db.commit()
    return alert
