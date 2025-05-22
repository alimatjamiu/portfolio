'use client';

import Image from "next/image";
import SuccessLogo from "../../../public/images/Success Icon.png";

export function SuccessModal({ isOpen, onClose, message = "Thank you for your message! We'll get back to you soon." }) {
  if (!isOpen) return null; // Don't render anything if modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[90%] lg:w-[45%] xl:w-[35%] px-10 py-12 rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image 
            src={SuccessLogo} 
            className="w-[80px]" 
            alt="success" 
            width={80}
            height={80}
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold text-xl">Success!</h1>
            <p className="text-center">
              {message}
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

