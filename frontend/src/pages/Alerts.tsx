import React from 'react';
import { useAlerts } from '../services/hooks';
import AlertsList from '../components/AlertsList';

export default function Alerts() {
  const { data = [], isLoading } = useAlerts();

  return (
    <>
      <h2>Alerts</h2>
      {isLoading ? <p>Loading…</p> : <AlertsList alerts={data} />}
    </>
  );
}
