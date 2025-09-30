import { notFound } from "next/navigation";
import ProjectClient from "./project-client";
import { projects } from "./projects"; 


// ✅ Needed for static export
export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

// Page (server)
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return notFound();

  return <ProjectClient project={project} />;
}
