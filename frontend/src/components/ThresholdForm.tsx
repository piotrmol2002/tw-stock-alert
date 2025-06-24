import React, { useState } from 'react';
import { useSetInventory } from '../services/hooks';

export default function ThresholdForm() {
  const [id, setId] = useState('');
  const [qty, setQty] = useState('');
  const { mutate, isPending } = useSetInventory();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ id: Number(id), current_qty: Number(qty) });
  };

  return (
    <form onSubmit={submit} style={{ marginTop: 24 }}>
      <h3>Quick update qty</h3>
      <input
        placeholder="inv ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        style={{ width: 80, marginRight: 8 }}
      />
      <input
        placeholder="new qty"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        style={{ width: 80, marginRight: 8 }}
      />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Saving…' : 'Save'}
      </button>
    </form>
  );
}
