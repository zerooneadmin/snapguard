"use client";

import { useState, useEffect, useRef } from "react";
import Contact from "./contact";

const QuotationButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex justify-center">
      <button
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        onClick={() => setIsOpen(true)}
      >
        Get a Quotation
      </button>
      {isOpen && (
        <dialog id="my_modal_1" className="modal bg-white text-black" open>
          <div className="modal-box bg-white" ref={modalRef}>
            <h3 className="font-small text-lg pb-5">
              Please provide the following information, Our team will reach out
              to you within one business day
            </h3>
            <Contact />
          </div>
        </dialog>
      )}
    </div>
  );
};

export default QuotationButton;
