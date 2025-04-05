import { Avatar } from "@/components/avatar.component";
import { IInscriptionsResponse } from "@/interface/inscriptions.interface";
import { IUser } from "@/interface/user.interface";
import { Edit } from "lucide-react";
import { EditUserModal } from "./editUserModal.componetn";

interface UserDetailProps {
  userDetials?: IUser;
  inscriptions: IInscriptionsResponse[];
}

export const UserDetail = ({ userDetials, inscriptions }: UserDetailProps) => {
  if (!userDetials) {
    return (
      <section className="w-full flex flex-col gap-4 bg-white rounded-lg shadow-md p-6 md:col-span-4 overflow-y-auto">
        <div className="mb-6 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Detalles de usuario
          </h2>
          <p className="text-base text-gray-500">
            No se encontraron detalles de usuario
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full flex flex-col gap-4 bg-white rounded-lg shadow-md p-6 md:col-span-4 overflow-y-auto">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar altText="Avatar" size={"8"} />
          <h2 className="text-2xl font-bold text-gray-800">
            {userDetials.fullName}
          </h2>
        </div>
        <EditUserModal
          userId={userDetials.id.toString()}
          inscriptions={inscriptions}
        />
      </div>

      <div className="mb-6 flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-gray-800">
          Detalles de usuario
        </h3>
        <div className="flex flex-col gap-2">
          <p className="text-base text-gray-600">
            <strong className="font-semibold">Email:</strong>{" "}
            {userDetials.email}
          </p>
          <p className="text-base text-gray-600">
            <strong className="font-semibold">Ocupación:</strong>{" "}
            {userDetials.ocupation}
          </p>
          <p className="text-base text-gray-600">
            <strong className="font-semibold">Fecha de nacimento:</strong>{" "}
            {new Date(userDetials.birthdate).toLocaleDateString("es-ES", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Inscripciones</h3>
        <div className="flex flex-col gap-4">
          {inscriptions.length > 0 ? (
            inscriptions.map((inscription) => (
              <div
                key={inscription.id}
                className="p-4 border rounded-lg shadow-sm bg-gray-50"
              >
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {inscription.title}
                </h3>
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-2 border border-gray-300">
                        Módulo
                      </th>
                      <th className="text-left p-2 border border-gray-300">
                        Estado
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {inscription.modules.map((module) => (
                      <tr key={module.id}>
                        <td className="text-left p-2 border border-gray-300">
                          {module.name}
                        </td>
                        <td className="text-left p-2 border border-gray-300">
                          {module.isPushed ? (
                            <span className="text-green-600 font-medium">
                              Pago
                            </span>
                          ) : (
                            <span className="text-red-600 font-medium">
                              No pago
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))
          ) : (
            <p className="text-base text-gray-500 italic">
              No hay inscripciones disponibles.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
