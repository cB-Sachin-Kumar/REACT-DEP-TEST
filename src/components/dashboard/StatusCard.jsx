import React from "react";
import { cn } from "../../utils/cn";

// with props destructuring
const StatusCard = ({ title, value, change, icon: Icon, color, ...props }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between ">
      <div>
        <p className="text-sm text-gray-500"> {title} </p>
        <p className="text-2xl font-bold mt-1"> {value}</p>
        <span className="text-xs text-green-600"> {change}</span>
      </div>
      <div className={cn("text-white p-3 rounded-lg", color)}>
        {Icon && <Icon className="w-6 h-6" />}
      </div>
    </div>
  );
};

export default StatusCard;
