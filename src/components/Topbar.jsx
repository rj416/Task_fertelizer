import React from 'react';
import { Home, Info, HelpOutline } from '@mui/icons-material';

function Topbar() {
  return (
    <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">Fertilizer Dashboard</h1>
      <div className="flex items-center space-x-4">
        <Home className="text-white" />
        <Info className="text-white" />
        <HelpOutline className="text-white" />
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
}

export default Topbar;
