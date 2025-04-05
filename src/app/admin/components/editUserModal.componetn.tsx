"use client";
import { IInscriptionsResponse } from "@/interface/inscriptions.interface";
import { Edit } from "lucide-react";
import { useState } from "react";

interface EditUserModalProps {
  userId: string;
  inscriptions: IInscriptionsResponse[];
}


export const EditUserModal = ({userId, inscriptions}: EditUserModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={handleOpenModal}
        className="text-gray-500 hover:text-gray-700"
      >
        <Edit size={25} />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 z-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Editar Usuario
        </h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Inscribir usuario a cursos
        </h3>
        {inscriptions.map((inscription) => (
          <div key={inscription.id} className="mb-4">
            <p className="text-base text-gray-600">
              <strong className="font-semibold">Curso:</strong>{" "}
              {inscription.title}
            </p>
          </div>
        ))}
      </div>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={handleCloseModal}
      ></div>
    </div>
  );
};
