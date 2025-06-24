import React from 'react';
import { useInventory } from '../services/hooks';
import InventoryTable from '../components/InventoryTable';
import ThresholdForm from '../components/ThresholdForm';

export default function Inventory() {
  const { data = [], isLoading } = useInventory();

  return (
    <>
      <h2>Inventory</h2>
      {isLoading ? <p>Loading…</p> : <InventoryTable items={data} />}
      <ThresholdForm />
    </>
  );
}
