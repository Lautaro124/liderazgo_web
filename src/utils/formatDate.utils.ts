export const dateFormat = (date: string) => {
  try {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("es-ES", options);
  } catch (error) {
    return "Fecha no disponible";
  }
};