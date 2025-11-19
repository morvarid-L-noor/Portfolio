export default function Experience() {
  return (
    <main className="min-h-screen px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold text-purple-800 sm:mb-12 sm:text-4xl dark:text-purple-600">
          Experience
        </h1>

        <div className="space-y-8 sm:space-y-12">
          {/* Experience Item 1 */}
          <div className="relative border-l-4 border-purple-500 pl-6 sm:pl-8 dark:border-purple-700">
            <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-purple-600 ring-4 ring-purple-100 sm:-left-3 sm:h-6 sm:w-6 dark:ring-purple-900/50"></div>
            <div className="mb-2">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Research Assistant
              </h2>
              <p className="text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
                University of Calgary | Calgary, Canada
              </p>
              <p className="text-xs text-zinc-500 sm:text-sm dark:text-zinc-500">
                Sept. 2022 - May 2025
              </p>
            </div>
            <div className="mt-4 space-y-2 text-sm text-zinc-700 sm:text-base dark:text-zinc-300">
              <ul className="ml-4 list-disc space-y-1 sm:ml-6">
                <li>
                  Designed machine learning models for complex control-feedback
                  systems to optimize system performance.
                </li>
                <li>
                  Conducted iterative hyperparameter tuning to improve training
                  stability and model efficiency using PyTorch.
                </li>
                <li>
                  Analyzed performance trade-offs and published results with
                  faculty collaborators.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="relative border-l-4 border-purple-500 pl-6 sm:pl-8 dark:border-purple-700">
            <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-purple-600 ring-4 ring-purple-100 sm:-left-3 sm:h-6 sm:w-6 dark:ring-purple-900/50"></div>
            <div className="mb-2">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                LLMOps Summer Intern
              </h2>
              <p className="text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
                Pointsville | Calgary, Canada
              </p>
              <p className="text-xs text-zinc-500 sm:text-sm dark:text-zinc-500">
                Jun. 2024 - Aug. 2024
              </p>
            </div>
            <div className="mt-4 space-y-4 text-sm text-zinc-700 sm:text-base dark:text-zinc-300">
              <ul className="ml-4 list-disc space-y-3 sm:ml-6">
                <li>
                  <span className="font-semibold">
                    AI Agent for Special Education:
                  </span>
                  <ul className="ml-4 mt-1 list-disc space-y-1 sm:ml-6">
                    <li>
                      Built an AI agent to centralize information for special
                      education (SPED) children and assist parents in
                      understanding available services and interpreting IEPs.
                    </li>
                    <li>
                      Developed web scraping and data querying tools using
                      Python (FastAPI) and LangChain, enabling context-aware
                      responses from a vector database (FAISS).
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">
                    Crypto Platform Development:
                  </span>
                  <ul className="ml-4 mt-1 list-disc space-y-1 sm:ml-6">
                    <li>
                      Implemented the frontend using React and Tailwind,
                      integrated WebSocket channels for real-time data, and
                      handled historical data.
                    </li>
                    <li>
                      Implemented a responsive landing page based on Figma
                      design, enhancing the platform's user interface and
                      experience.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* Experience Item 2 */}
          <div className="relative border-l-4 border-purple-500 pl-6 sm:pl-8 dark:border-purple-700">
            <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-purple-600 ring-4 ring-purple-100 sm:-left-3 sm:h-6 sm:w-6 dark:ring-purple-900/50"></div>
            <div className="mb-2">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                AI and Algorithms Engineer
              </h2>
              <p className="text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
                Daya-Rahyaft Company | Tehran, Iran
              </p>
              <p className="text-xs text-zinc-500 sm:text-sm dark:text-zinc-500">
                Oct 2020 - April 2022
              </p>
            </div>
            <div className="mt-4 space-y-2 text-sm text-zinc-700 sm:text-base dark:text-zinc-300">
              <ul className="ml-4 list-disc space-y-1 sm:ml-6">
                <li>
                  Developed Long Short-Term Memory (LSTM) models for time-series
                  prediction and anomaly detection.
                </li>
                <li>
                  Analyzed large-scale optical network datasets to evaluate and
                  compare machine learning approaches.
                </li>
                <li>
                  Designed, trained, and optimized neural network architectures
                  to improve model accuracy and efficiency.
                </li>
                <li>
                  Improved prediction accuracy by 17% through model tuning and
                  feature engineering.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-12 sm:mt-20">
          <h2 className="mb-6 text-2xl font-bold text-purple-800 sm:mb-8 sm:text-3xl dark:text-purple-600">
            Education
          </h2>
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                MSc. in Electrical and Software Engineering
              </h3>
              <p className="text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
                University of Calgary | Calgary, Canada
              </p>
              <p className="text-xs text-zinc-500 sm:text-sm dark:text-zinc-500">
                Graduation Year: 2025
              </p>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                GPA: 3.7/4.0
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                BSc. in Electrical Engineering
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Amirkabir University of Technology | Tehran, Iran
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                Graduation Year: 2022
              </p>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                GPA: 3.7/4.0
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Minor in Computer Engineering
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Amirkabir University of Technology | Tehran, Iran
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                Graduation Year: 2022
              </p>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                GPA: 4.0/4.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
