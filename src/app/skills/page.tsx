export default function Skills() {
  return (
    <main className="min-h-screen px-2 py-8 sm:px-4 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-black sm:mb-12 sm:text-4xl dark:text-white">
          Skills
        </h1>
        {/* <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
          Technologies and tools I work with
        </p> */}

        <div className="space-y-8 sm:space-y-12">
          {/* Programming Languages */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-black sm:mb-6 sm:text-2xl dark:text-white">
              Programming Languages
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                Python
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                C
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                SQL
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                MATLAB
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                JavaScript
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                TypeScript
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                HTML
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                CSS
              </span>
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-black sm:mb-6 sm:text-2xl dark:text-white">
              Frameworks & Libraries
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                FastAPI
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                React
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                Next.js
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                streamlit
              </span>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-black sm:mb-6 sm:text-2xl dark:text-white">
              Tools & Technologies
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                Docker
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                MongoDB
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                Tableau
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                Git
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                Bash Scripts
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                Figma
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                ArcGIS
              </span>
            </div>
          </div>

          {/* Additional Skills */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-black sm:mb-6 sm:text-2xl dark:text-white">
              Additional Skills
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                LLM models
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                LLM Agents
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                RAG Techniques
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-black sm:px-4 sm:py-2 sm:text-base dark:bg-zinc-800 dark:text-white">
                Exploratory Data Analysis
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
