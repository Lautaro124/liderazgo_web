import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Video,
} from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Archivo {
  id: number;
  nombre: string;
  tipo: string;
  tamano: string;
  url: string;
}

interface ClaseActual {
  id: number;
  moduloId: number;
  nombre: string;
  videoUrl: string;
  descripcion: string;
  archivos: Archivo[];
  siguiente?: {
    id: number;
    nombre: string;
    moduloNombre: string;
  };
  anterior?: {
    id: number;
    nombre: string;
    moduloNombre: string;
  };
}

export default function ClassView() {
  const claseActual: ClaseActual = {
    id: 2,
    moduloId: 1,
    nombre: "1.2 Configuración del entorno",
    videoUrl: "https://example.com/video.mp4", // URL de ejemplo
    descripcion: `# Configuración del entorno de desarrollo

En esta clase aprenderemos a configurar nuestro entorno de desarrollo para React.

## Requisitos previos

- Node.js instalado
- Un editor de código (recomendamos VS Code)
- Conocimientos básicos de terminal

## Pasos a seguir

1. Instalar Create React App
2. Configurar el editor
3. Instalar extensiones útiles

### Comandos importantes

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
\`\`\`

> **Nota**: Asegúrate de tener la última versión de Node.js instalada.`,
    archivos: [
      {
        id: 1,
        nombre: "configuracion-inicial.pdf",
        tipo: "PDF",
        tamano: "2.5 MB",
        url: "#",
      },
      {
        id: 2,
        nombre: "codigo-ejemplo.zip",
        tipo: "ZIP",
        tamano: "1.8 MB",
        url: "#",
      },
    ],
    anterior: {
      id: 1,
      nombre: "1.1 Bienvenida al curso",
      moduloNombre: "Módulo 1: Introducción a React",
    },
    siguiente: {
      id: 3,
      nombre: "1.3 Creando tu primera aplicación",
      moduloNombre: "Módulo 1: Introducción a React",
    },
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          {claseActual.nombre}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {claseActual.anterior?.moduloNombre}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <Video className="h-16 w-16 text-white opacity-50" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <div className="flex items-center border-b border-gray-100 px-6 py-4">
              <BookOpen className="h-5 w-5 text-purple-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">
                Descripción de la clase
              </h2>
            </div>
            <div className="p-6 prose max-w-none overflow-auto">
              <ReactMarkdown>{claseActual.descripcion}</ReactMarkdown>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:block">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="flex items-center border-b border-gray-100 px-6 py-4">
              <FileText className="h-5 w-5 text-purple-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Recursos</h2>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {claseActual.archivos.map((archivo) => (
                  <div
                    key={archivo.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <FileText className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {archivo.nombre}
                        </p>
                        <p className="text-xs text-gray-500">
                          {archivo.tipo} • {archivo.tamano}
                        </p>
                      </div>
                    </div>
                    <button
                      className="text-purple-600 hover:text-purple-700 flex-shrink-0 ml-4"
                      aria-label={`Descargar ${archivo.nombre}`}
                    >
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
            {claseActual.anterior && (
              <a
                href="#"
                className="block p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
              >
                <p className="text-xs sm:text-sm text-gray-500">
                  Clase anterior
                </p>
                <p className="text-sm font-medium text-gray-900 mt-1 line-clamp-2">
                  {claseActual.anterior.nombre}
                </p>
              </a>
            )}
            {claseActual.siguiente && (
              <a
                href="#"
                className="block p-4 bg-purple-50 rounded-lg shadow-sm hover:bg-purple-100 transition-colors"
              >
                <p className="text-xs sm:text-sm text-purple-600">
                  Siguiente clase
                </p>
                <p className="text-sm font-medium text-purple-900 mt-1 line-clamp-2">
                  {claseActual.siguiente.nombre}
                </p>
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
