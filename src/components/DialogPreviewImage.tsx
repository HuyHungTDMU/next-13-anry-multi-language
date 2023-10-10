import React from "react";
import Image from "next/image";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  image?: any;
}

const DialogPreViewImage: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  image,
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay"></div>
          <div className="modal-container bg-white py-4 px-4 rounded space-y-3 shadow-lg z-50">
            <div className="flex justify-between text-cyan-800">
              <span>Preview</span>
              <button onClick={onClose}>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="ease-in duration-300 relative flex">
              <Image
                alt={"Feature Project"}
                width={350}
                height={350}
                src={image}
                className={
                  "border-neutral-10/50 bg-neutral-10 aspect-square w-20 rounded border object-cover object-center sm:aspect-[242/205] sm:w-full"
                }
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DialogPreViewImage;
