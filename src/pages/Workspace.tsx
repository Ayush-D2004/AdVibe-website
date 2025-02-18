import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../components/workspace/DashboardLayout';
import Dashboard from './workspace/Dashboard';
import Analytics from './workspace/Analytics';
import Campaigns from './workspace/Campaigns';
import Messages from './workspace/Messages';
import Network from './workspace/Network';
import Calendar from './workspace/Calendar';
import Documents from './workspace/Documents';
import Settings from './workspace/Settings';
import Support from './workspace/Support';

const Workspace = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/network" element={<Network />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Workspace;