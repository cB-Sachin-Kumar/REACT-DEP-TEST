import React from "react";

// without props destructuring
const RecentActivity = ({ items }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
      </div>
      <div className="divide-y">
        {items.map((item, idx) => (
          <div key={idx} className="py-3 flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">{item.action}</p>
              <p className="text-sm text-gray-500">{item.who}</p>
            </div>
            <span className="text-xs text-gray-400">{item.when}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecentActivity;
