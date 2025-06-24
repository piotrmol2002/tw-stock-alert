import React from 'react';
import { Alert } from '../services/hooks';

interface Props {
  alerts: Alert[];
}
export default function AlertsList({ alerts }: Props) {
  if (!alerts.length) return <p>No alerts 🎉</p>;
  return (
    <ul>
      {alerts.map((a) => (
        <li key={a.id}>
          <strong>Product {a.product_id}</strong> – qty {a.qty} –{' '}
          {a.sent ? 'SENT' : 'PENDING'} –{' '}
          {new Date(a.created_at).toLocaleString()}
        </li>
      ))}
    </ul>
  );
}
