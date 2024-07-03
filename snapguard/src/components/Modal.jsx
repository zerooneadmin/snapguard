import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ show, message, onClose, redirectUrl }) {
  const router = useRouter();

  useEffect(() => {
    if (show && typeof window !== "undefined") {
      const timer = setTimeout(() => {
        onClose();
        if (redirectUrl) {
          router.push(redirectUrl);
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose, redirectUrl, router]);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div className="bg-white p-4 rounded shadow-lg relative z-10">
        <p>{message}</p>
      </div>
    </div>
  );
}
