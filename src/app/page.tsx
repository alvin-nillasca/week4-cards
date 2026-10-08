import Card from "@/components/Card";
import { projects } from "@/data/projectsData";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center my-8">
        <h1 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase tracking-wide">
          My Portfolio
        </h1>
        <p className="font-[family-name:var(--font-roboto)] text-gray-600 mt-2">
          Explore my recent projects dynamically rendered from local data.
        </p>
      </section>

      {/* Dynamic Card Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project: any) => (
          <Card
            key={project.id || project.title}
            title={project.title}
            category={project.category}
            client={project.client}
            image={project.image}
          />
        ))}
      </section>
    </main>
  );
}