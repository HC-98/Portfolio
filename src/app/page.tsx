// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
          Hi, I’m <span className="text-blue-600">Hikmet</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          I’m a software developer passionate about building{" "}
          <span className="font-semibold">meaningful software</span> — from
          faith-inspired productivity tools to cloud-native apps that solve real
          problems.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Example project card (replace with dynamic later) */}
            <div className="p-6 rounded-xl shadow bg-white border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Qur’an Word Add-in</h3>
              <p className="mt-2 text-gray-600 text-sm">
                A Microsoft Word add-in to insert Qur’ān verses with translations,
                deployed via Azure Static Web Apps.
              </p>
              <Link
                href="/projects/quran-word-addin"
                className="mt-4 inline-block text-blue-600 hover:underline text-sm font-medium"
              >
                Read More →
              </Link>
            </div>

            <div className="p-6 rounded-xl shadow bg-white border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">
                Canvas Attendance System
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Extended Canvas LMS with custom attendance tracking using React
                + Azure Functions.
              </p>
              <Link
                href="/projects/canvas-attendance"
                className="mt-4 inline-block text-blue-600 hover:underline text-sm font-medium"
              >
                Read More →
              </Link>
            </div>

            <div className="p-6 rounded-xl shadow bg-white border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">
                Moneybird Telegram Bot
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                A secure Telegram bot for my dad’s business to create and send
                invoices directly from chat.
              </p>
              <Link
                href="/projects/moneybird-telegram"
                className="mt-4 inline-block text-blue-600 hover:underline text-sm font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Let’s Connect</h2>
          <p className="mt-4 text-gray-600">
            I’m always open to discussing new projects, collaborations, or just
            sharing knowledge.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="mailto:hikmetcilan@gmail.com"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Email Me
            </a>
            <a
              href="https://github.com/HC-98"
              target="_blank"
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/hikmetcilan"
              target="_blank"
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
