from celery import Celery
from .config import settings
from .deps import SessionLocal
from . import crud, models
from sqlalchemy.orm import Session

celery = Celery(__name__, broker=settings.CELERY_BROKER_URL)
celery.conf.beat_schedule = {
    "check-inventory-every-5m": {
        "task": "app.tasks.check_inventory",
        "schedule": 300.0,
    },
}

@celery.task
def check_inventory():
    db: Session = SessionLocal()
    products = db.query(models.Product).all()
    for p in products:
        inv = db.query(models.Inventory).filter_by(product_id=p.id).first()
        if inv and inv.current_qty < p.threshold:
            alert = crud.create_alert(db, p.id, inv.current_qty)
            send_alert.delay(alert.id, p.name, inv.current_qty)
    db.close()

@celery.task
def send_alert(alert_id: int, product_name: str, qty: int):
    # Tu wyślij powiadomienie (e-mail, Slack, itp.)
    db: Session = SessionLocal()
    crud.mark_alert_sent(db, alert_id)
    db.close()
