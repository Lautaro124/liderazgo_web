import { BookOpenCheck, Calendar, Trophy } from "lucide-react";
import { ICourse } from "./interface/course.interface";
import Card from "./components/cards.components";
import { HistoryCard } from "./components/historyCard.component";

export default function HomePage() {
  const courses: ICourse[] = [
    {
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
    },
    {
      id: 2,
      title: "Node.js para Profesionales",
      description: "Desarrollo backend con Node.js y Express",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      progress: 30,
      isPurchased: true,
      lastLesson: {
        title: "Autenticación JWT",
        duration: "20:45",
        module: "Módulo 2: Seguridad",
      },
      totalLessons: 32,
      completedLessons: 10,
    },
    {
      id: 3,
      title: "TypeScript Esencial",
      description: "Domina TypeScript desde cero",
      image:
        "https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      progress: 0,
      isPurchased: false,
      totalLessons: 18,
      completedLessons: 0,
    },
  ];

  const stats = [
    {
      icon: Trophy,
      label: "Cursos completados",
      value: "3",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      icon: Calendar,
      label: "Días seguidos",
      value: "15",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: BookOpenCheck,
      label: "Lecciones completadas",
      value: "47",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 flex items-center"
          >
            <div className={`${stat.bgColor} p-3 rounded-lg`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Continúa aprendiendo
          </h2>
          {/* <button className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center">
            Ver todos mis cursos
            <ChevronRight className="h-4 w-4 ml-1" />
          </button> */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {courses
            .filter((course) => course.isPurchased && course.progress > 0)
            .map((course) => (
              <HistoryCard key={course.id} {...course} />
            ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Todos los cursos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} {...course} />
          ))}
        </div>
      </section>
    </main>
  );
}
