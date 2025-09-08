import React from "react";
import { cn } from "../../utils/cn";

const ActionButton = ({
  label,
  color = "bg-gray-600",
  icon: Icon,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-white transition",
        `${color} hover:opacity-90`,
        className
      )}
      {...props}
    >
      {" "}
      {Icon && <Icon size={18} className="shrink-0" />}{" "}
      {/* keep size consistent */}
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default ActionButton;
