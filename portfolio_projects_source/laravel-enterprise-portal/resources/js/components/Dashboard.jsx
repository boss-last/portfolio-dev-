import React from 'react';
import { Link } from '@inertiajs/react';

export default function Dashboard({ stats }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome back 👋</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card label="Documents" value={stats.documents} />
        <Card label="Users" value={stats.users} />
      </div>
      <Link href="/documents" className="mt-6 inline-block text-blue-600">View documents →</Link>
    </div>
  );
}

function Card({ label, value }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <p className="text-gray-500">{label}</p>
      <p className="text-4xl font-bold mt-2">{value}</p>
    </div>
  );
}
