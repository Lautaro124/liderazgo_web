import { Avatar } from "@/components/avatar.component";
import { getUserInscription } from "@/service/inscription/getUserInscription.service";
import { getUserDetails } from "@/service/user/getUserDetails.service";
import Link from "next/link";
import {
  Mail,
  Calendar,
  Briefcase,
  User as UserIcon,
  BookOpen,
} from "lucide-react";
import { dateFormat } from "@/utils/formatDate.utils";
import { EnrollButtonClient } from "./components/EnrollButtonClient.component";

type SearchParams = Promise<{ user: string } | undefined>;

export default async function UserDetailPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const userId = (await searchParams)?.user;
  const userResponse = await getUserDetails(userId);
  const inscriptions = await getUserInscription(userId);

  // Crear un objeto de usuario con valores por defecto
  const user = {
    id: userResponse?.id || "sin-id",
    fullName: userResponse?.fullName || "Usuario sin nombre",
    email: userResponse?.email || "usuario@ejemplo.com",
    role: userResponse?.role || "Usuario",
    ocupation: userResponse?.ocupation || "Sin ocupación",
    birthdate: userResponse?.birthdate || "2000-01-01",
    avatar: userResponse?.avatar || "",
  };

  return (
    <main className="container mx-auto py-6 px-4">
      <section className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Perfil de Usuario</h1>
      </section>

      <section className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
          <Avatar
            imageUrl={user.avatar}
            altText={user.fullName}
            iconScale={5}
          />
          <h2 className="text-xl font-bold mt-4">{user.fullName}</h2>
          <p className="text-gray-500">{user.role}</p>

          <div className="w-full mt-6 space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-500 mr-2" />
              <p className="text-gray-700">{user.email}</p>
            </div>
            <div className="flex items-center">
              <Briefcase className="h-5 w-5 text-gray-500 mr-2" />
              <p className="text-gray-700">{user.ocupation}</p>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-500 mr-2" />
              <p className="text-gray-700">{dateFormat(user.birthdate)}</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">Cursos Inscritos</h3>
            <p className="text-gray-500 mb-6">
              Módulos a los que el usuario está inscrito
            </p>

            {inscriptions.length > 0 ? (
              inscriptions.map((course) => (
                <div
                  key={course.id}
                  className="mb-8 bg-white border rounded-lg overflow-hidden"
                >
                  <div className="p-5 bg-white">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                      <div>
                        <h4 className="text-lg font-bold">
                          {course.title || "Curso sin título"}
                        </h4>
                        <div className="flex items-center mt-1">
                          <UserIcon className="h-4 w-4 text-gray-400 mr-1" />
                          <p className="text-sm text-gray-500">
                            {(course.modules || []).length} módulos inscritos •
                            Inscrito el{" "}
                            {dateFormat(
                              course.enrolledDate || new Date().toISOString()
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-600 mb-1">
                          {course.progress || 0}% completado
                        </p>
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: `${course.progress || 0}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {course.modules.filter((m) => m.isPushed).length !== 0 && (
                      <h5 className="text-md font-semibold mb-2">
                        Módulos inscritos:
                      </h5>
                    )}

                    <div className="space-y-3">
                      {course.modules.filter((m) => m.isPushed).length ===
                        0 && (
                        <div className="flex flex-col items-center justify-center p-8 text-center">
                          <BookOpen className="h-12 w-12 text-gray-300 mb-3" />
                          <h4 className="text-lg font-medium text-gray-900">
                            Sin inscripciones
                          </h4>
                          <p className="text-sm text-gray-500 max-w-md mt-1">
                            El usuario aún no está inscrito en ningún curso.
                            Inscríbelo para empezar el aprendizaje.
                          </p>
                        </div>
                      )}

                      {course.modules.length > 0 ? (
                        course.modules
                          .filter((m) => m.isPushed)
                          .map((module) => (
                            <div
                              key={module.id}
                              className="flex flex-col md:flex-row md:justify-between md:items-center p-2 hover:bg-gray-50 rounded gap-2"
                            >
                              <div>
                                <p className="text-sm font-medium">
                                  {module.name || "Módulo sin nombre"}
                                </p>
                                <p className="text-xs text-gray-500">
                                  Inscrito el{" "}
                                  {dateFormat(
                                    module.enrolledDate ||
                                      new Date().toISOString()
                                  )}
                                </p>
                              </div>
                              <div className="text-right flex flex-col md:items-end">
                                <span
                                  className={`text-xs px-2 py-1 rounded-full w-fit ${
                                    module.isFree
                                      ? "bg-green-100 text-green-800"
                                      : "bg-blue-100 text-blue-800"
                                  }`}
                                >
                                  {module.isFree ? "Gratis" : "Pago"}
                                </span>
                                <div className="flex items-center mt-1">
                                  <div className="w-24 bg-gray-200 rounded-full h-1.5 mr-2">
                                    <div
                                      className="bg-black h-1.5 rounded-full"
                                      style={{
                                        width: `${module.progress || 0}%`,
                                      }}
                                    ></div>
                                  </div>
                                  <span className="text-xs font-medium">
                                    {module.progress || 0}%
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))
                      ) : (
                        <p className="text-sm text-gray-500">
                          No hay módulos inscritos en este curso.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <BookOpen className="h-12 w-12 text-gray-300 mb-3" />
                <h4 className="text-lg font-medium text-gray-900">
                  Sin inscripciones
                </h4>
                <p className="text-sm text-gray-500 max-w-md mt-1">
                  El usuario aún no está inscrito en ningún curso. Inscríbelo
                  para empezar el aprendizaje.
                </p>
              </div>
            )}

            <EnrollButtonClient userId={userId} courses={inscriptions} />
          </div>
        </div>
      </section>
    </main>
  );
}
