// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-6 text-gray-700 leading-relaxed">
          Hi, I’m <span className="font-semibold">Hikmet Çilan</span> — a
          software developer passionate about building{" "}
          <span className="font-semibold">meaningful software</span>. For me,
          technology isn’t just about code; it’s about creating solutions that
          make life easier, more efficient, and sometimes even more spiritual.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          I currently work at <span className="font-semibold">InSpark</span>,
          where I build modern cloud-native applications using{" "}
          <span className="font-semibold">.NET, Azure, and React</span>. My work
          often involves automating processes, integrating APIs, and deploying
          solutions that scale in real-world environments.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Outside of work, I enjoy creating tools that directly impact the
          people around me. Whether it’s{" "}
          <span className="italic">a Microsoft Word add-in for Qur’ān study</span>,{" "}
          <span className="italic">a custom attendance system for teachers</span>, or{" "}
          <span className="italic">
            an invoicing bot that helps my dad run his upholstery business
          </span>
          — I find a lot of joy in solving problems for my family, community,
          and faith.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          I value simplicity, clarity, and solutions that people actually use.
          My mindset is: <span className="font-semibold">start small, make it
          useful, and improve it step by step</span>. This approach has helped
          me grow as a developer and shift my perspective from being overwhelmed
          by complexity to enjoying the challenge of building systems piece by
          piece.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Beyond coding, I enjoy continuous learning — from cloud development
          practices to Islamic history and Arabic language. I’m also preparing
          to guide my family on their first <span className="font-semibold">ʿUmrah</span>,
          combining my love for technology with my commitment to faith and
          family life.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Skills & Tools</h2>
        <ul className="mt-4 grid grid-cols-2 gap-2 text-gray-700">
          <li>⚡ .NET / C#</li>
          <li>⚡ React / Next.js</li>
          <li>⚡ Azure Functions</li>
          <li>⚡ Azure Static Web Apps</li>
          <li>⚡ GitHub Actions / CI/CD</li>
          <li>⚡ Office.js / Microsoft 365 APIs</li>
          <li>⚡ API integrations (Graph, Moneybird, Canvas LMS, etc.)</li>
          <li>⚡ Tailwind CSS</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold">Values</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          I believe technology should be{" "}
          <span className="font-semibold">useful, accessible, and purposeful</span>.
          My projects often blend professional skills with personal meaning:
          helping family businesses, supporting community learning, and creating
          tools that respect cultural and spiritual contexts.
        </p>

        <div className="mt-12">
          <p className="text-gray-600 italic">
            “For me, code is not just about lines in a file — it’s about
            building bridges between ideas, people, and solutions that last.”
          </p>
        </div>
      </div>
    </main>
  );
}
