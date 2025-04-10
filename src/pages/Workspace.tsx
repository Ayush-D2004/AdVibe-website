// import { useState } from 'react';
import DashboardLayout from '../components/workspace/DashboardLayout';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './workspace/Dashboard';
import Analytics from './workspace/Analytics';
import Campaigns from './workspace/Campaigns';
import Messages from './workspace/Messages';
import Network from './workspace/Network';
import Calendar from './workspace/Calendar';
import Documents from './workspace/Documents';
import Settings from './workspace/Settings';
import Support from './workspace/Support';
import InfluencerWorkspace from './workspace/InfluencerWorkspace';

const Workspace = () => {
  return (
    <DashboardLayout>
      <div className="flex">
        <div className="flex-1">
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
            <Route path="/influencer" element={<InfluencerWorkspace />} />
          </Routes>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Workspace;
