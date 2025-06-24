import React from 'react';
import { Inventory } from '../services/hooks';

interface Props {
  items: Inventory[];
}

export default function InventoryTable({ items }: Props) {
  if (!items.length) return <p>No data</p>;

  return (
    <table border={1} cellPadding={8}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product ID</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {items.map((inv) => (
          <tr
            key={inv.id}
            style={{
              background: inv.current_qty === 0 ? '#ffdfdf' : undefined,
            }}
          >
            <td>{inv.id}</td>
            <td>{inv.product_id}</td>
            <td>{inv.current_qty}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
