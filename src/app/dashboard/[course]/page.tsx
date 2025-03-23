import { getModules } from "@/service/module/getModules.service";
import { ModuleAccordion } from "./components/ModuleAccordion";

export default async function CourseView({
  params,
}: {
  params: { course: string };
}) {
  const modules = await getModules(Number(params.course));

  if (!modules) {
    return <div>No se pudieron cargar los módulos</div>;
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {modules[0]?.course?.title}
        </h1>
        <p className="text-gray-600">{modules[0]?.course?.shortDescription}</p>
      </section>
      <section className="overflow-hidden">
        <ModuleAccordion modules={modules} />
      </section>
    </main>
  );
}
