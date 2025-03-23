import { getClass } from "@/service/class/getClass.service";
import {
  BookOpen,
  Download,
  FileText,
  Video,
} from "lucide-react";
import ReactMarkdown from "react-markdown";


export default async function ClassView({params}: {params: Promise<{course: string, class: string}>}) {

  const {course, class: classId} = await params;

  const currentClass = await getClass(Number(course), Number(classId));
  console.log("🚀 ~ ClassView ~ claseActual:", currentClass)

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          {currentClass.title}
        </h1>
        {/* <p className="text-sm text-gray-500 mt-1">
          {currentClass.}
        </p> */}
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
            <div className="p-6 prose overflow-auto">
              <ReactMarkdown>{currentClass.description}</ReactMarkdown>
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
                {(!currentClass.files || currentClass.files.length === 0) && (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-sm text-gray-500">No hay recursos para esta clase</p>
                  </div>
                )}
                
                {currentClass.files && currentClass.files.length > 0 && currentClass.files.map((file: any) => (
                  <div
                    key={file.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <FileText className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {file.type} • {file.size}
                        </p>
                      </div>
                    </div>
                    <button
                      className="text-purple-600 hover:text-purple-700 flex-shrink-0 ml-4"
                      aria-label={`Descargar ${file.name}`}
                    >
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
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
          </div> */}
        </div>
      </div>
    </main>
  );
}
