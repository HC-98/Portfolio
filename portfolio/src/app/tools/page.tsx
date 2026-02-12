import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools | Hikmet Cilan",
  description: "Web tools and utilities built by Hikmet Cilan",
};

const tools = [
  {
    id: "pdf-watermarker",
    name: "PDF Watermarker",
    description: "Add custom watermarks to PDF documents with real-time preview. Adjust text, opacity, rotation, and position with an intuitive interface.",
    link: "https://watermarker-asfudja2dhb9bsbe.westeurope-01.azurewebsites.net/",
    tags: ["PDF", "Python", "Flask", "Document Processing"],
    icon: "📄",
    features: [
      "Real-time PDF preview",
      "Customizable watermark settings",
      "Multi-page support",
      "Drag & drop upload",
      "Instant download"
    ],
    status: "Live",
    bgGradient: "from-blue-500 to-purple-600"
  },
  // Add more tools here as you build them
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Built Tools
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Practical web tools and utilities I&apos;ve created to solve real-world problems.
            Each tool is designed with usability and performance in mind.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="group relative bg-slate-800 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden"
            >
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-xs font-semibold">
                  {tool.status}
                </span>
              </div>

              <div className="relative p-8">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{tool.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {tool.name}
                    </h2>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                        <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-slate-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  <span>Open Tool</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-2">More Tools Coming Soon</h3>
            <p className="text-slate-400 max-w-md">
              I&apos;m constantly building new tools to solve interesting problems. 
              Check back regularly for updates!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
