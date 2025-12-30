import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional resume of Utkarsh Ranjan",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-serif text-3xl font-bold mb-2">Utkarsh Ranjan</h1>
        <p className="text-muted">Software Engineer</p>
        <div className="flex items-center justify-center gap-4 mt-4 text-sm text-muted">
          <a
            href="mailto:hello@utkarsh-ranjan.com"
            className="hover:text-accent transition-colors"
          >
            hello@utkarsh-ranjan.com
          </a>
          <span>&middot;</span>
          <a
            href="https://utkarsh-ranjan.com"
            className="hover:text-accent transition-colors"
          >
            utkarsh-ranjan.com
          </a>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-10">
        <h2 className="font-serif text-xl font-semibold mb-4 pb-2 border-b border-border">
          Summary
        </h2>
        <p className="text-muted leading-relaxed">
          Passionate software engineer with experience in building scalable web
          applications. Strong foundation in modern web technologies and a
          commitment to writing clean, maintainable code.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="font-serif text-xl font-semibold mb-4 pb-2 border-b border-border">
          Experience
        </h2>

        <div className="space-y-6">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="font-semibold">Software Engineer</h3>
              <span className="text-sm text-muted">2022 - Present</span>
            </div>
            <p className="text-accent mb-2">Company Name</p>
            <ul className="list-disc list-inside space-y-1 text-muted">
              <li>
                Developed and maintained web applications using React and
                Node.js
              </li>
              <li>
                Collaborated with cross-functional teams to deliver features
              </li>
              <li>Improved application performance and user experience</li>
            </ul>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="font-semibold">Junior Developer</h3>
              <span className="text-sm text-muted">2020 - 2022</span>
            </div>
            <p className="text-accent mb-2">Previous Company</p>
            <ul className="list-disc list-inside space-y-1 text-muted">
              <li>Built responsive user interfaces with modern CSS</li>
              <li>Participated in code reviews and agile ceremonies</li>
              <li>Contributed to open source projects</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="font-serif text-xl font-semibold mb-4 pb-2 border-b border-border">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Python",
            "SQL",
            "Git",
            "AWS",
            "Docker",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-border rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="font-serif text-xl font-semibold mb-4 pb-2 border-b border-border">
          Education
        </h2>
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
            <span className="text-sm text-muted">2016 - 2020</span>
          </div>
          <p className="text-accent">University Name</p>
        </div>
      </section>

      {/* Download Button */}
      <div className="text-center pt-8 border-t border-border">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-light transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download PDF
        </a>
      </div>
    </div>
  );
}
