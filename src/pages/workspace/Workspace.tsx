import DashboardLayout from '../components/workspace/DashboardLayout';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './workspace/Dashboard';
import InfluencerDashboard from './workspace/InfluencerDashboard';
import Analytics from './workspace/Analytics';
import Campaigns from './workspace/Campaigns';
import Messages from './workspace/Messages';
import Network from './workspace/Network';
import Calendar from './workspace/Calendar';
import Documents from './workspace/Documents';
import Settings from './workspace/Settings';
import Support from './workspace/Support';

const Workspace = () => {
  // In a real application, you would get this from your auth context or user state
  const userType = 'influencer'; // or 'business'

  return (
    <DashboardLayout>
      <div className="flex">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={userType === 'influencer' ? <InfluencerDashboard /> : <Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/network" element={<Network />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Workspace;