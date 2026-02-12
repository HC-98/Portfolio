import { notFound } from "next/navigation";
import ProjectClient from "./project-client";
import { projects } from "@/data";

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];
  
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Hikmet Çilan`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];
  
  if (!project) return notFound();

  return <ProjectClient project={project} />;
}
