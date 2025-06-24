from pydantic import BaseModel
from datetime import datetime

class InventoryBase(BaseModel):
    product_id: int
    current_qty: int

class InventoryCreate(InventoryBase):
    pass

class Inventory(InventoryBase):
    id: int
    class Config:
        from_attributes = True

class Alert(BaseModel):
    id: int
    product_id: int
    qty: int
    created_at: datetime
    sent: bool
    class Config:
        from_attributes = True
