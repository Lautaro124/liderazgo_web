import { BookOpenCheck, Calendar, Trophy } from "lucide-react";
import Card from "./components/cards.components";
import { HistoryCard } from "./components/historyCard.component";
import { getAllCourses } from "@/service/course/getCourse.service";

export default async function HomePage() {
  const courses = await getAllCourses()
  console.log("🚀 ~ HomePage ~ coursexd:", courses)
  
  if(!courses) return <div>loading...</div>

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
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {courses
            .filter((course) => course.isPurchased && course.progress > 0)
            .map((course) => (
              <HistoryCard key={course.id} {...course} />
            ))}
        </div> */}
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
