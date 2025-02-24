"use client";
import { ChevronDown, ChevronUp, Play } from "lucide-react";
import { useState } from "react";
import { ICourse } from "../interface/course.interface";
import Card from "../components/cards.components";

interface IClass {
  id: number;
  nombre: string;
  duracion: string;
  completada: boolean;
}

interface IModule {
  id: number;
  nombre: string;
  clases: IClass[];
}

export default function CourseView() {
  const [modulosExpandidos, setModulosExpandidos] = useState<number[]>([1]);
  const course: ICourse = {
    id: 1,
    title: "React Avanzado",
    description:
      "Aprende las últimas características de React y patrones avanzados",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    progress: 60,
    isPurchased: true,
    lastLesson: {
      title: "Hooks Personalizados",
      duration: "15:30",
      module: "Módulo 3: Hooks Avanzados",
    },
    totalLessons: 24,
    completedLessons: 14,
  };

  const modulos: IModule[] = [
    {
      id: 1,
      nombre: "Módulo 1: Introducción a React",
      clases: [
        {
          id: 1,
          nombre: "1.1 Bienvenida al curso",
          duracion: "5:30",
          completada: true,
        },
        {
          id: 2,
          nombre: "1.2 Configuración del entorno",
          duracion: "10:15",
          completada: true,
        },
        {
          id: 3,
          nombre: "1.3 Creando tu primera aplicación",
          duracion: "15:45",
          completada: false,
        },
      ],
    },
    {
      id: 2,
      nombre: "Módulo 2: Componentes y Props",
      clases: [
        {
          id: 4,
          nombre: "2.1 ¿Qué son los componentes?",
          duracion: "12:20",
          completada: false,
        },
        {
          id: 5,
          nombre: "2.2 Propiedades en React",
          duracion: "14:30",
          completada: false,
        },
        {
          id: 6,
          nombre: "2.3 Componentes funcionales",
          duracion: "18:15",
          completada: false,
        },
      ],
    },
    {
      id: 3,
      nombre: "Módulo 3: Estado y Ciclo de Vida",
      clases: [
        {
          id: 7,
          nombre: "3.1 Introducción al Estado",
          duracion: "20:10",
          completada: false,
        },
        {
          id: 8,
          nombre: "3.2 useState Hook",
          duracion: "16:45",
          completada: false,
        },
        {
          id: 9,
          nombre: "3.3 useEffect Hook",
          duracion: "22:30",
          completada: false,
        },
      ],
    },
  ];

  const toggleModulo = (moduloId: number) => {
    setModulosExpandidos((prev) =>
      prev.includes(moduloId)
        ? prev.filter((id) => id !== moduloId)
        : [...prev, moduloId]
    );
  };

  function onClassSelect(id: number): void {
    throw new Error("Function not implemented.");
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-8">
        <Card {...course} />
      </section>
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Contenido del curso
          </h2>
          <div className="space-y-4">
            {modulos.map((modulo) => (
              <div
                key={modulo.id}
                className="border rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => toggleModulo(modulo.id)}
                >
                  <span className="font-medium text-gray-900">
                    {modulo.nombre}
                  </span>
                  {modulosExpandidos.includes(modulo.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {modulosExpandidos.includes(modulo.id) && (
                  <div className="divide-y">
                    {modulo.clases.map((clase) => (
                      <button
                        key={clase.id}
                        onClick={() => onClassSelect(clase.id)}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              clase.completada
                                ? "bg-green-100 text-green-600"
                                : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                            }`}
                          >
                            <Play
                              className="h-4 w-4"
                              fill={clase.completada ? "currentColor" : "none"}
                            />
                          </div>
                          <span
                            className={`${
                              clase.completada
                                ? "text-gray-500"
                                : "text-gray-900"
                            }`}
                          >
                            {clase.nombre}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {clase.duracion}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
