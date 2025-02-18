import React from "react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageCode: string;
  patientName: string;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  packageCode,
  patientName,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white rounded-lg w-[530px] p-6 relative z-50">
          <h2 className="text-lg font-medium mb-4">
            Assign Package {packageCode}
          </h2>

          <p className="text-gray-600 mb-8">
            Are you sure you want to assign package {packageCode} to{" "}
            {patientName}?
          </p>

          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-9 py-4 border border-[#1F5AF4] text-[#1F5AF4] font-medium hover:bg-blue-50 transition-colors"
            >
              No, Go Back
            </button>

            <button
              onClick={onConfirm}
              className="px-9 py-4 bg-[#1F5AF4] text-white font-medium hover:bg-blue-600 transition-colors"
            >
              Yes, Assign Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
