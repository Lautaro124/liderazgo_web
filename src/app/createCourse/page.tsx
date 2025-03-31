"use client";
import { useState } from "react";
import { ICourse } from "@/interface/course.interface";

const newCourse: ICourse[] = [
  {
    id: 1,
    title: "Introducción a NestJS",
    previewImage: "https://example.com/preview1.jpg",
    isPurchased: true,
    shortDescription: "Aprende los fundamentos de NestJS desde cero.",
    modules: [
      {
        id: 101,
        name: "Fundamentos de NestJS",
        description: "Explora los conceptos básicos de NestJS.",
        price: 50,
        classes: [
          {
            id: 1001,
            title: "Configuración Inicial",
            shortDescription: "Instalación y primeros pasos con NestJS.",
            description:
              "Aprenderás a instalar y configurar NestJS correctamente.",
            videoUrl: "https://example.com/video1.mp4",
            files: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "NestJS Avanzado",
    previewImage: "https://example.com/preview2.jpg",
    isPurchased: false,
    shortDescription: "Aprende técnicas avanzadas en NestJS.",
    modules: [
      {
        id: 102,
        name: "Autenticación y Seguridad",
        description: "Implementación de autenticación en NestJS.",
        price: 80,
        classes: [
          {
            id: 1002,
            title: "JWT en NestJS",
            shortDescription: "Uso de JSON Web Tokens en autenticación.",
            description:
              "Aprenderás a implementar autenticación con JWT en NestJS.",
            videoUrl: "https://example.com/video2.mp4",
            files: [],
          },
        ],
      },
    ],
  },
];

export default function CreateCourse() {
  const [openCourse, setOpenCourse] = useState<number | null>(null);
  const [openModule, setOpenModule] = useState<number | null>(null);
  const toggleAccordion = (courseId: number) => {
    setOpenCourse(openCourse === courseId ? null : courseId);
  };
  const toggleAccordionModules = (courseId: number) => {
    setOpenModule(openModule === courseId ? null : courseId);
  };

  return (
    <main className="grid grid-cols-1 gap-4 p-4">
      <button className="col-span-1">Crear un curso</button>

      {newCourse.length ? (
        <div className="col-span-4 w-full">
          {newCourse.map((course) => (
            <div key={course.id}>
              <div
                className="bg-white mt-2 py-2 flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-gray-200 rounded"
                onClick={() => toggleAccordion(course.id)}
              >
                <span>{course.title}</span>
                <svg
                  className={`w-3 h-3 transition-transform ${
                    openCourse === course.id ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                  aria-hidden="true"
                >
                  <path stroke="currentColor" d="M9 5 5 1 1 5" />
                </svg>
              </div>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openCourse === course.id ? "block" : "hidden"
                }`}
              >
                <div className="p-5 border  border-gray-200">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {course.shortDescription}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {course.previewImage}
                  </p>

                  <h2 className="mt-6">Módulos del curso:</h2>
                  {course.modules.map((modules) => (
                    <>
                      <div
                        className="bg-white mt-2 py-2 flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-gray-200 rounded"
                        onClick={() => toggleAccordionModules(modules.id)}
                      >
                        <span>{modules.name}</span>
                        <svg
                          className={`w-3 h-3 transition-transform ${
                            openModule === modules.id ? "rotate-180" : ""
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                          aria-hidden="true"
                        >
                          <path stroke="currentColor" d="M9 5 5 1 1 5" />
                        </svg>
                      </div>
                      <div
                      key={`key${modules.id}`}
                        className={`transition-all duration-300 ease-in-out ${
                          openModule === modules.id ? "block" : "hidden"
                        }`}
                      >
                        {modules.classes.map((classItem) => (
                          <div className="bg-gray-200 mt-2" key={classItem.id}> <h2>{classItem.title}</h2> <h3 className="text-gray-500">{classItem.description}</h3> <h2> <a href={classItem.videoUrl}></a></h2></div>
                        ))}
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No hay cursos creados aún.</p>
        </div>
      )}
    </main>
  );
}
