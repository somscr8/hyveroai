import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Dashboard } from '../pages/Dashboard';
import { Templates } from '../pages/Templates';
import { Reports } from '../pages/Reports';
import { Users } from '../pages/Users';
import { Profile } from '../pages/Profile';
import { Login } from '../pages/Login';
import { useAuth } from '../context/AuthContext';
import { Bell, AlertCircle } from 'lucide-react';

export function Layout() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/reports" element={<Reports />} />
              {user?.role === 'admin' && <Route path="/users" element={<Users />} />}
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
      </div>

      {/* Notification Toast */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2">
        <div className="bg-white shadow-lg rounded-lg p-4 flex items-center gap-3 border-l-4 border-blue-500">
          <Bell className="text-blue-500" />
          <div>
            <h4 className="font-semibold">New Task Assigned</h4>
            <p className="text-sm text-gray-600">Template: Financial Compliance Q1</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 flex items-center gap-3 border-l-4 border-red-500">
          <AlertCircle className="text-red-500" />
          <div>
            <h4 className="font-semibold">Missing Information</h4>
            <p className="text-sm text-gray-600">Section 3.2 requires attention</p>
          </div>
        </div>
      </div>
    </div>
  );
}