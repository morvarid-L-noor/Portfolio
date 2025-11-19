export default function Publications() {
  return (
    <main className="min-h-screen px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold text-purple-800 sm:mb-12 sm:text-4xl dark:text-purple-600">
          Publications
        </h1>
        <p className="mb-8 text-base text-zinc-600 sm:mb-12 sm:text-lg dark:text-zinc-400">
          Research papers, articles, and other publications
        </p>

        <div className="space-y-6 sm:space-y-8">
          {/* Publication Item 1 */}
          <div className="rounded-xl border-2 border-purple-300 bg-gradient-to-br from-white to-purple-50/50 p-4 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-300 sm:p-6 dark:border-purple-800 dark:from-zinc-900 dark:to-purple-950/30 dark:hover:shadow-purple-900/50">
            <h2 className="mb-2 text-lg font-semibold text-purple-800 sm:text-xl dark:text-purple-600">
            AI-Augmented Intelligent RFICs for Transmitter Predistortion for 5G and 6G Wireless and Space Communication Applications
            </h2>
            <p className="mb-2 text-sm text-zinc-600 sm:mb-3 sm:text-base dark:text-zinc-400">
            Morvarid Lalenoor, Hatem Abou-Zeid, Elham Sadeghabadi, Fadhel M. Ghannouchi, Mohamed Helaoui, IEEE Transactions on Microwave Theory and Techniques, 2025 (in progress)
            </p>
            <p className="mb-3 text-sm text-zinc-700 sm:mb-4 sm:text-base dark:text-zinc-300">
              Brief description or abstract of the publication. What was the
              research about? What were the key findings?
            </p>
            
          </div>

          {/* Publication Item 2 */}
          <div className="rounded-xl border-2 border-purple-300 bg-gradient-to-br from-white to-purple-50/50 p-6 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-300 dark:border-purple-800 dark:from-zinc-900 dark:to-purple-950/30 dark:hover:shadow-purple-900/50">
            <h2 className="mb-2 text-xl font-semibold text-purple-800 dark:text-purple-600">
            Neural Network and Support Vector Machine for Prediction of Foot Disorders Based on Foot Analysis
            </h2>
            <p className="mb-2 text-sm text-zinc-600 sm:mb-3 sm:text-base dark:text-zinc-400">
            Ahmadi Bani M, Khorramrouz A, Lalenoor M, Bagheri M , .ICAIHH001 2021, 2021.
            </p>
            <p className="mb-3 text-sm text-zinc-700 sm:mb-4 sm:text-base dark:text-zinc-300">
              Add more publications here. You can duplicate this structure for
              each publication.
            </p>
            <div className="flex gap-4">
              <a
                href="https://publications.waset.org/abstracts/139369/neural-network-and-support-vector-machine-for-prediction-of-foot-disorders-based-on-foot-analysis"
                className="text-sm font-semibold text-purple-800 transition-colors hover:text-purple-900 hover:underline dark:text-purple-600 dark:hover:text-purple-500"
              >
                View Paper →
              </a>
              <a
                href="https://publications.waset.org/abstracts/139369.pdf"
                className="text-sm font-semibold text-purple-800 transition-colors hover:text-purple-900 hover:underline dark:text-purple-600 dark:hover:text-purple-500"
              >
                PDF →
              </a>
            </div>
          </div>

            {/* Publication Item 3 */}
            <div className="rounded-xl border-2 border-purple-300 bg-gradient-to-br from-white to-purple-50/50 p-6 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-300 dark:border-purple-800 dark:from-zinc-900 dark:to-purple-950/30 dark:hover:shadow-purple-900/50">
            <h2 className="mb-2 text-xl font-semibold text-purple-800 dark:text-purple-600">
            A Convolution Neural Network Approach to Predict Pes-planus Using Plantar Pressure Mapping Images
            </h2>
            <p className="mb-2 text-sm text-zinc-600 sm:mb-3 sm:text-base dark:text-zinc-400">
            Khorramrouz A, Ahmadi Bani M, Lalenoor M, Norouzi E, .ICAIHH001 2021, 2021.
            </p>
            <p className="mb-3 text-sm text-zinc-700 sm:mb-4 sm:text-base dark:text-zinc-300">
              Add more publications here. You can duplicate this structure for
              each publication.
            </p>
            <div className="flex gap-4">
              <a
                href="https://publications.waset.org/abstracts/139534/a-convolution-neural-network-approach-to-predict-pes-planus-using-plantar-pressure-mapping-images"
                className="text-sm font-semibold text-purple-800 transition-colors hover:text-purple-900 hover:underline dark:text-purple-600 dark:hover:text-purple-500"
              >
                View Paper →
              </a>
              <a
                href="https://publications.waset.org/abstracts/139534.pdf"
                className="text-sm font-semibold text-purple-800 transition-colors hover:text-purple-900 hover:underline dark:text-purple-600 dark:hover:text-purple-500"
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
