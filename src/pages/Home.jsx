import React from "react";
import { Link } from "react-router-dom";
import Piechart from "../components/Piechart";
import { data } from "../utils/data"; // Ensure the path is correct

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="flex flex-wrap justify-around gap-6 mb-6">
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-white shadow-md rounded-lg p-4">
          <Piechart
            data={data}
            title="Top 5 Products by Requirement"
            dataKey="requirement_in_mt_"
          />
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 bg-white shadow-md rounded-lg p-4">
          <Piechart
            data={data}
            title="Top 5 Products by Availability"
            dataKey="availability_in_mt_"
          />
        </div>
      </div>

      {/* Add a link to the Fertilizer Overview page */}
      <div className="text-center mt-6">
        <Link
          to="/overview"
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
        >
          View Fertilizer Overview
        </Link>
      </div>
    </div>
  );
}

export default Home;
