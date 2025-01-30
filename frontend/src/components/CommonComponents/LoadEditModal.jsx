// src/components/ParentComponent.jsx
import React, { useState } from "react";
import EditModal from "./EditModal.jsx";

export default function LoadEditModal({ modalDetails }) {
  const [isModalOpen, setIsModalOpen] = useState(modalDetails.isVisible);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen absolute">
      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalDetails.details.title}
      >
        <input
          type="text"
          placeholder={modalDetails.details.value}
          className="border w-full px-3 py-2 rounded"
        />
      </EditModal>
    </div>
  );
}
