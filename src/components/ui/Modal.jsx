import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, title, onClose, children, footer, ...props }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        {/* header */}
        <div className="flex justify-between items-center p-6 border-b boder-gray-200">
          <h2 className="text-lg font-semibold text-gray-600"> {title}</h2>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-600 text-2xl"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* modal body */}
        <div className="p-6 overflow-y-auto" style={{ maxHeight: "70vh" }}>
          {children}
        </div>

        {/* footer */}
        <div className="flex justify-end p-6 border-t border-gray-200">
          {footer}
        </div>
      </div>
    </div>
  );
};
