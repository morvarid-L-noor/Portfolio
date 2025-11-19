import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4 py-12 sm:py-20">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-purple-200/30 dark:from-purple-950/40 dark:to-purple-900/30"></div>
        <div className="relative z-10 w-full max-w-4xl text-center">
          <div className="mb-6 flex justify-center sm:mb-8">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-purple-500 shadow-xl ring-4 ring-purple-300 dark:border-purple-700 dark:ring-purple-900/50 sm:h-48 sm:w-48 md:h-56 md:w-56">
              <Image
                src="/profile-photo.jpg"
                alt="Pearl Lalenoor"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-purple-800 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-purple-600">
            Pearl (Morvarid) Lalenoor
          </h1>
          <p className="mb-6 text-lg font-semibold text-purple-800 dark:text-purple-600 sm:mb-8 sm:text-xl md:text-2xl">
            AI & ML Engineer | LLMOps | MSc in Electrical & Software Engineering
            | Researcher in Healthcare AI
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-zinc-700 sm:mb-12 sm:text-lg dark:text-zinc-300">
            Machine learning researcher with experience building model
            experimentation pipelines, performance optimization strategies, and
            publishing technical findings with growing interest in LLM-based
            agents.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/projects"
              className="w-full rounded-full bg-purple-800 px-6 py-2.5 text-center text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-700/50 sm:w-auto sm:px-8 sm:py-3 dark:bg-purple-700"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="w-full rounded-full border-2 border-purple-500 bg-white px-6 py-2.5 text-center text-sm font-semibold text-purple-800 transition-all hover:scale-105 hover:bg-purple-200 hover:shadow-lg sm:w-auto sm:px-8 sm:py-3 dark:border-purple-700 dark:bg-zinc-900 dark:text-purple-600 dark:hover:bg-zinc-800"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-b from-white to-purple-100/40 px-4 py-12 sm:py-20 dark:from-zinc-950 dark:to-purple-950/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-purple-800 sm:mb-8 sm:text-3xl dark:text-purple-600">
            About Me
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-zinc-700 sm:text-lg dark:text-zinc-300">
            <p>
              Add your background story here. Talk about where you started, your
              journey, and what drives you. This section helps visitors
              understand who you are beyond your work.
            </p>
            <p>
              You can add multiple paragraphs to tell your story. Include your
              education, career milestones, or personal interests that relate to
              your professional work.
            </p>
            <p>
              Feel free to mention your values, what you're passionate about,
              and what you're currently working on or learning.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="px-4 py-12 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-purple-800 sm:mb-12 sm:text-3xl dark:text-purple-600">
            Explore My Portfolio
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            <Link
              href="/projects"
              className="group rounded-xl border-2 border-purple-400 bg-gradient-to-br from-white to-purple-100/60 p-4 transition-all hover:scale-105 hover:border-purple-600 hover:shadow-xl hover:shadow-purple-400 sm:p-6 dark:border-purple-800 dark:from-zinc-900 dark:to-purple-950/30 dark:hover:border-purple-600 dark:hover:shadow-purple-900/50"
            >
              <h3 className="mb-2 text-lg font-semibold text-purple-800 transition-colors group-hover:text-purple-900 sm:text-xl dark:text-purple-600 dark:group-hover:text-purple-500">
                Projects
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                View my latest work and projects
              </p>
            </Link>
            <Link
              href="/experience"
              className="group rounded-xl border-2 border-purple-400 bg-gradient-to-br from-white to-purple-100/60 p-4 transition-all hover:scale-105 hover:border-purple-600 hover:shadow-xl hover:shadow-purple-400 sm:p-6 dark:border-purple-800 dark:from-zinc-900 dark:to-purple-950/30 dark:hover:border-purple-600 dark:hover:shadow-purple-900/50"
            >
              <h3 className="mb-2 text-lg font-semibold text-purple-800 transition-colors group-hover:text-purple-900 sm:text-xl dark:text-purple-600 dark:group-hover:text-purple-500">
                Experience
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Learn about my professional journey
              </p>
            </Link>
            <Link
              href="/skills"
              className="group rounded-xl border-2 border-purple-400 bg-gradient-to-br from-white to-purple-100/60 p-4 transition-all hover:scale-105 hover:border-purple-600 hover:shadow-xl hover:shadow-purple-400 sm:p-6 dark:border-purple-800 dark:from-zinc-900 dark:to-purple-950/30 dark:hover:border-purple-600 dark:hover:shadow-purple-900/50"
            >
              <h3 className="mb-2 text-lg font-semibold text-purple-800 transition-colors group-hover:text-purple-900 sm:text-xl dark:text-purple-600 dark:group-hover:text-purple-500">
                Skills
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                See my technical expertise
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
