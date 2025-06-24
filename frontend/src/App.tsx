import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Inventory from './pages/Inventory';
import Alerts from './pages/Alerts';
import Settings from './pages/Settings';

export default function App() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: 24 }}>
      <h1>Inventory Alert Dashboard</h1>

      {/* proste menu */}
      <nav style={{ marginBottom: 24 }}>
        <Link to="/inventory" style={{ marginRight: 16 }}>
          Inventory
        </Link>
        <Link to="/alerts" style={{ marginRight: 16 }}>
          Alerts
        </Link>
        <Link to="/settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/inventory" replace />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
