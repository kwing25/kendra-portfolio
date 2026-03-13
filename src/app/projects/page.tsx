import Link from "next/link";

export default function ProjectsPage() {
    const projects = [
        {
            slug: "women-whove-changed-tech",
            title: "Women Who’ve Changed Tech",
            description:
                "An open-source site highlighting influential women in technology.",
        },
        {
            slug: "photo-drop",
            title: "Photo Drop",
            description:
                "A web application for organizing and sharing image collections.",
        },
    ];

    return (
        <section className="space-y-10">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
                <p className="mt-2 text-gray-600">
                    Selected work demonstrating problem-solving, UI design, and clean
                    architecture.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="rounded-lg border border-gray-200 p-6 transition hover:border-gray-400"
                    >
                        <h2 className="text-xl font-semibold">{project.title}</h2>
                        <p className="mt-2 text-gray-600">{project.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
