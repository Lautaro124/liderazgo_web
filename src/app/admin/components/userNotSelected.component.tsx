export const UserNotSelected = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-2 bg-white shadow-lg rounded-lg p-4 col-span-3 md:col-span-4 overflow-y-auto">
      <h1 className="text-2xl font-bold text-gray-800">
        Usuario no seleccionado
      </h1>
      <p className="mt-2 text-gray-600">
        Seleccione su usario en la casilla de la izquierda
      </p>
    </section>
  );
};
