export default function Publications() {
  return (
    <main className="min-h-screen px-2 py-8 sm:px-4 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-black sm:mb-12 sm:text-4xl dark:text-white">
          Publications
        </h1>
        <p className="mb-8 text-base text-black sm:mb-12 sm:text-lg dark:text-white">
          Research papers, articles, and other publications
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
            <p className="mb-3 text-sm text-black sm:mb-4 sm:text-base dark:text-white">
              Brief description or abstract of the publication. What was the
              research about? What were the key findings?
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
            <p className="mb-3 text-sm text-black sm:mb-4 sm:text-base dark:text-white">
              Add more publications here. You can duplicate this structure for
              each publication.
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
            <p className="mb-3 text-sm text-black sm:mb-4 sm:text-base dark:text-white">
              Add more publications here. You can duplicate this structure for
              each publication.
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
      </div>
    </main>
  );
}
