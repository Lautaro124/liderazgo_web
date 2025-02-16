import Card from "./components/cards.components";

export default function HomePage() {
  return (
    <main>
      <h1>Bienvenido Juan</h1>
      <section>
        <h2>Historial</h2>
      </section>
      <section className="flex flex-col gap-4">
        <h2>Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card
            icon="/globe.svg"
            title="Curso de liderazgo"
            subtitle="Curso de liderazgo"
          />
          <Card
            icon="/globe.svg"
            title="Curso de liderazgo"
            subtitle="Curso de liderazgo"
          />
          <Card
            icon="/globe.svg"
            title="Curso de liderazgo"
            subtitle="Curso de liderazgo"
          />
          <Card
            icon="/globe.svg"
            title="Curso de liderazgo"
            subtitle="Curso de liderazgo"
          />
        </div>
      </section>
    </main>
  );
}
