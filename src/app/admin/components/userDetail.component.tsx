import { IInscriptionsResponse } from "@/interface/inscriptions.interface";
import { IUser } from "@/interface/user.interface";

interface UserDetailProps {
  userDetials?: IUser;
  inscriptions: IInscriptionsResponse[];
}

export const UserDetail = ({ userDetials, inscriptions }: UserDetailProps) => {
  if(!userDetials) {
    return (
      <section className="w-full flex flex-col gap-2 bg-white shadow-lg rounded-lg p-4 col-span-3 md:col-span-4 overflow-y-auto">
        <div className="mb-4 flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-gray-900">Detalles de usuario</h2>
          <p className="text-sm text-gray-600">No se encontraron detalles de usuario</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full flex flex-col gap-2 bg-white shadow-lg rounded-lg p-4 col-span-3 md:col-span-4 overflow-y-auto">
      <div className="mb-4 flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-gray-900">Detalles de usuario</h2>
        <div className="flex gap-3">
          <p className="text-sm text-gray-600">Nombre: {userDetials.fullName}</p>
          <p className="text-sm text-gray-600">Email: {userDetials.email}</p>
          <p className="text-sm text-gray-600">Rol: {userDetials.role}</p>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Inscripciones</h3>
        <div className="flex flex-col gap-3">
          {inscriptions.length > 0 ? (
            <ul className="list-disc list-inside">
              {inscriptions.map((inscription) => (
                <li key={inscription.id} className="text-sm text-gray-600">
                  <strong>{inscription.title}</strong> - {inscription.description}
                  <ul className="list-disc list-inside ml-4">
                    {inscription.modules.map((module) => (
                      <li key={module.id} className="text-sm text-gray-600">
                        {module.name} - {module.description} (${module.price})
                        {module.isPushed ? (
                          <span className="text-green-500"> (Inscripto)</span>
                        ) : (
                          <span className="text-red-500"> (No inscripto)</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-600">No hay inscripciones</p>
          )}
        </div>
      </div>
    </section>
  );
}