"use client";
import {
  IInscriptionsResponse,
  IModuleWithStatus,
} from "@/interface/inscriptions.interface";
import { createInscription } from "@/service/inscription/createInscription.service";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface EnrollModalProps {
  courses: IInscriptionsResponse[];
  userId: string;
  onClose: () => void;
}

export const EnrollModal: React.FC<EnrollModalProps> = ({
  courses,
  userId,
  onClose,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string>("");
  const router = useRouter();

  // Filtrar módulos que no están inscritos para el curso seleccionado
  const [availableModules, setAvailableModules] = useState<IModuleWithStatus[]>(
    []
  );

  useEffect(() => {
    // Mostrar los datos recibidos para depuración
    console.log("Cursos recibidos:", JSON.stringify(courses, null, 2));

    if (selectedCourse) {
      const selectedCourseData = courses.find(
        (course) => course.id === selectedCourse
      );

      if (selectedCourseData && selectedCourseData.modules) {
        console.log(
          "Módulos del curso seleccionado:",
          JSON.stringify(selectedCourseData.modules, null, 2)
        );

        const filteredModules = selectedCourseData.modules.filter((module) => {
          console.log(
            `Módulo ${module.id} - ${module.name} - isPushed:`,
            module.isPushed
          );
          return !module.isPushed;
        });

        console.log(
          "Módulos filtrados (no inscritos):",
          JSON.stringify(filteredModules, null, 2)
        );

        setAvailableModules(filteredModules);
        setDebugInfo(
          `Total módulos: ${selectedCourseData.modules.length}, Disponibles: ${filteredModules.length}`
        );
      } else {
        setAvailableModules([]);
        setDebugInfo("No se encontraron módulos para este curso");
      }
    } else {
      setAvailableModules([]);
      setDebugInfo("Ningún curso seleccionado");
    }
  }, [selectedCourse, courses]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedCourse || !selectedModule || !userId) {
      setError("Por favor, selecciona un curso y un módulo");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      await createInscription({
        userId: parseInt(userId),
        courseId: selectedCourse,
        moduleId: selectedModule,
        isFree:
          availableModules.find((m) => m.id === selectedModule)?.price === 0,
      });

      // Refrescar la página para mostrar la nueva inscripción
      router.refresh();
      onClose();
    } catch (error) {
      console.error("Error al inscribir:", error);
      setError("Ocurrió un error al inscribir al usuario. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Inscribir a Nuevo Módulo</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        {/* Información de depuración */}
        <div className="mb-4 p-2 bg-blue-50 text-blue-700 rounded-md text-xs">
          Información de depuración: {debugInfo}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="course" className="block mb-2 font-medium">
              Curso
            </label>
            <select
              id="course"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-black focus:border-transparent"
              value={selectedCourse || ""}
              onChange={(e) => {
                setSelectedCourse(Number(e.target.value));
                setSelectedModule(null);
              }}
              required
            >
              <option value="">Selecciona un curso</option>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="module" className="block mb-2 font-medium">
              Módulo
            </label>
            <select
              id="module"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-black focus:border-transparent"
              value={selectedModule || ""}
              onChange={(e) => setSelectedModule(Number(e.target.value))}
              disabled={!selectedCourse || availableModules.length === 0}
              required
            >
              <option value="">
                {!selectedCourse
                  ? "Primero selecciona un curso"
                  : availableModules.length === 0
                  ? "No hay módulos disponibles"
                  : "Selecciona un módulo"}
              </option>
              {availableModules.map((module) => (
                <option key={module.id} value={module.id}>
                  {module.name}{" "}
                  {module.price > 0 ? `(Pago: $${module.price})` : "(Gratis)"}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 mr-2 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 disabled:bg-gray-400"
              disabled={loading || !selectedCourse || !selectedModule}
            >
              {loading ? "Inscribiendo..." : "Inscribir"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
