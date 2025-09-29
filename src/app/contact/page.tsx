// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="mt-4 text-gray-600">
          I’m always open to new opportunities, collaborations, or simply
          connecting with other developers.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="mailto:youremail@example.com"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Email Me
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}
