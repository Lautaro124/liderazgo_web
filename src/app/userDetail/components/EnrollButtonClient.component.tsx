"use client";
import { IInscriptionsResponse } from "@/interface/inscriptions.interface";
import { useState } from "react";
import { EnrollModal } from "./EnrollModal.component";
import { IModules } from "@/interface/module.interface";

interface EnrollButtonClientProps {
  userId?: string;
  courses: IInscriptionsResponse[];
}

export const EnrollButtonClient: React.FC<EnrollButtonClientProps> = ({
  userId,
  courses,
}) => {
  const [showModal, setShowModal] = useState(false);

  if (!userId) {
    return null;
  }

  return (
    <>
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 flex items-center"
        >
          Inscribir a Nuevo Módulo
        </button>
      </div>

      {showModal && (
        <EnrollModal
          userId={userId}
          courses={courses}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};
