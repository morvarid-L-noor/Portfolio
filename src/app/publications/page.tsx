export default function Publications() {
  return (
    <main className="min-h-screen px-2 py-8 sm:px-4 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-black sm:mb-12 sm:text-4xl dark:text-white">
          Publications & Awards
        </h1>
        <p className="mb-8 text-base text-black sm:mb-12 sm:text-lg dark:text-white">
          Research papers, articles, and recognition for my work
        </p>

        <div className="space-y-6 sm:space-y-8">
          {/* Publication Item 1 */}
          <div className="rounded-xl border-2 border-purple-300 bg-gradient-to-br from-white to-purple-50/50 p-4 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-300 sm:p-6 dark:border-purple-800 dark:from-zinc-900 dark:to-purple-950/30 dark:hover:shadow-purple-900/50">
            <h2 className="mb-2 text-xl font-semibold text-purple-900 dark:text-purple-600">
              AI-Augmented Intelligent RFICs for Transmitter Predistortion for
              5G and 6G Wireless and Space Communication Applications
            </h2>
            <p className="mb-2 text-sm text-black sm:mb-3 sm:text-base dark:text-white">
              Morvarid Lalenoor, Hatem Abou-Zeid, Elham Sadeghabadi, Fadhel M.
              Ghannouchi, Mohamed Helaoui, IEEE Transactions on Microwave Theory
              and Techniques, 2025 (in progress)
            </p>
          </div>

          {/* Publication Item 2 */}
          <div className="rounded-xl border-2 border-purple-300 bg-gradient-to-br from-white to-purple-50/50 p-6 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-300 dark:border-purple-800 dark:from-zinc-900 dark:to-purple-950/30 dark:hover:shadow-purple-900/50">
            <h2 className="mb-2 text-xl font-semibold text-purple-900 dark:text-purple-600">
              Neural Network and Support Vector Machine for Prediction of Foot
              Disorders Based on Foot Analysis
            </h2>
            <p className="mb-2 text-sm text-black sm:mb-3 sm:text-base dark:text-white">
              Ahmadi Bani M, Khorramrouz A, Lalenoor M, Bagheri M , .ICAIHH001
              2021, 2021.
            </p>

            <div className="flex gap-4">
              <a
                href="https://publications.waset.org/abstracts/139369/neural-network-and-support-vector-machine-for-prediction-of-foot-disorders-based-on-foot-analysis"
                className="text-sm font-semibold text-black transition-colors hover:text-black/80 hover:underline dark:text-white dark:hover:text-white/80"
              >
                View Paper →
              </a>
              <a
                href="https://publications.waset.org/abstracts/139369.pdf"
                className="text-sm font-semibold text-black transition-colors hover:text-black/80 hover:underline dark:text-white dark:hover:text-white/80"
              >
                PDF →
              </a>
            </div>
          </div>

          {/* Publication Item 3 */}
          <div className="rounded-xl border-2 border-purple-300 bg-gradient-to-br from-white to-purple-50/50 p-6 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-300 dark:border-purple-800 dark:from-zinc-900 dark:to-purple-950/30 dark:hover:shadow-purple-900/50">
            <h2 className="mb-2 text-xl font-semibold text-purple-900 dark:text-purple-600">
              A Convolution Neural Network Approach to Predict Pes-planus Using
              Plantar Pressure Mapping Images
            </h2>
            <p className="mb-2 text-sm text-black sm:mb-3 sm:text-base dark:text-white">
              Khorramrouz A, Ahmadi Bani M, Lalenoor M, Norouzi E, .ICAIHH001
              2021, 2021.
            </p>

            <div className="flex gap-4">
              <a
                href="https://publications.waset.org/abstracts/139534/a-convolution-neural-network-approach-to-predict-pes-planus-using-plantar-pressure-mapping-images"
                className="text-sm font-semibold text-black transition-colors hover:text-black/80 hover:underline dark:text-white dark:hover:text-white/80"
              >
                View Paper →
              </a>
              <a
                href="https://publications.waset.org/abstracts/139534.pdf"
                className="text-sm font-semibold text-black transition-colors hover:text-black/80 hover:underline dark:text-white dark:hover:text-white/80"
              >
                PDF →
              </a>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-12 sm:mt-16">
          <h2 className="mb-6 text-2xl font-bold text-black sm:mb-8 sm:text-3xl dark:text-white">
            Awards & Recognition
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {/* Award 1 - CANIS Hackathon */}
            <div className="rounded-xl border-2 border-purple-300 bg-gradient-to-br from-white to-purple-50/50 p-4 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-300 sm:p-6 dark:border-purple-800 dark:from-zinc-900 dark:to-purple-950/30 dark:hover:shadow-purple-900/50">
              <h3 className="mb-2 text-xl font-semibold text-purple-900 dark:text-purple-600">
                Canadian Network on Information and Security (CANIS) Hackathon
              </h3>
              <p className="mb-2 text-sm text-black sm:mb-3 sm:text-base dark:text-white">
                Mar 31 - Apr 3, 2023
              </p>
              <p className="mb-3 text-base font-semibold text-purple-800 dark:text-purple-400">
                First Prize - $4,000
              </p>
              <p className="mb-3 text-sm text-black sm:text-base dark:text-white">
                Analyzed the "fake and true news" dataset. Deployed a tuned
                passive-aggressive classifier that classified texts with 95%
                accuracy. Performed more than eight analyses with detailed
                interpretations.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://devpost.com/software/canis-winners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-black transition-colors hover:text-black/80 hover:underline dark:text-white dark:hover:text-white/80"
                >
                  View Project →
                </a>
                <a
                  href="https://fakeortrue.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-black transition-colors hover:text-black/80 hover:underline dark:text-white dark:hover:text-white/80"
                >
                  View Website →
                </a>
              </div>
            </div>

            {/* Award 2 - CANIS2 Hackathon */}
            <div className="rounded-xl border-2 border-purple-300 bg-gradient-to-br from-white to-purple-50/50 p-4 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-300 sm:p-6 dark:border-purple-800 dark:from-zinc-900 dark:to-purple-950/30 dark:hover:shadow-purple-900/50">
              <h3 className="mb-2 text-xl font-semibold text-purple-900 dark:text-purple-600">
                CANIS2 Hackathon - Data Visualization and Foreign Interference
              </h3>
              <p className="mb-2 text-sm text-black sm:mb-3 sm:text-base dark:text-white">
                Nov 17 - Nov 20, 2023
              </p>
              <p className="mb-3 text-base font-semibold text-purple-800 dark:text-purple-400">
                Second Prize & Best Performance in Visualization - $3,500
              </p>
              <p className="mb-3 text-sm text-black sm:text-base dark:text-white">
                Analyzed a dataset of 750 suspicious accounts on social media.
                Performed more than ten analyses with detailed interpretations.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://devpost.com/software/china-s-impact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-black transition-colors hover:text-black/80 hover:underline dark:text-white dark:hover:text-white/80"
                >
                  View Project →
                </a>
                <a
                  href="https://chinaimpact.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-black transition-colors hover:text-black/80 hover:underline dark:text-white dark:hover:text-white/80"
                >
                  View Website →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
