"use client";

import { useState, useEffect } from "react";
import Contact2 from "./contact2";
import Modal from "../Modal";

function QuotationButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState("");

  const handleClickOutside = (event) => {
    if (!event.target.closest("#modalContent")) {
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
        <dialog
          id="my_modal_1"
          className="modal bg-black bg-opacity-70 text-black"
          open
        >
          <div id="modalContent" className="modal-box bg-white">
            <h3 className="font-small text-lg pb-5">
              Please provide the following information, Our team will reach out
              to you within one business day
            </h3>
            <Contact2
              closeModal={() => setIsOpen(false)}
              setShowModal={setShowModal}
              setResult={setResult}
            />
          </div>
        </dialog>
      )}
      {showModal && (
        <Modal
          show={showModal}
          message={result}
          onClose={() => setShowModal(false)}
          redirectUrl="/"
        />
      )}
    </div>
  );
}

export default QuotationButton;
