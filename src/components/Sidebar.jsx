import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className="block py-2 px-4 hover:bg-gray-700">Analytics</Link>
          </li>
          <li>
            <Link to="/products" className="block py-2 px-4 hover:bg-gray-700">Product List</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
