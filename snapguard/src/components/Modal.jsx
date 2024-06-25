// components/ui/Modal.js
import React from "react";

export default function Modal({ show, message, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <p>{message}</p>
        <button
          className="mt-4 p-2 bg-gray-300 rounded w-full"
          type="submit"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
