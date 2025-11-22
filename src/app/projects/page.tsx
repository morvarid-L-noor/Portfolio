import Link from "next/link";
import TableauEmbed from "@/components/canisIIexample";

export default function Projects() {
  return (
    <main className="min-h-screen px-2 py-8 sm:px-4 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl dark:text-white">
          Projects
        </h1>
        <p className="mb-8 text-base text-black sm:mb-12 sm:text-lg dark:text-white">
          A collection of my work and projects. Click on any project to learn
          more.
        </p>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Project Card - RAG/LLM */}
          <div className="group rounded-xl border-2 border-purple-300 bg-gradient-to-br from-white to-purple-50/50 p-4 transition-all hover:scale-105 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-300 sm:p-6 dark:border-purple-800 dark:from-zinc-900 dark:to-purple-950/30 dark:hover:border-purple-700 dark:hover:shadow-purple-900/50">
            <Link
              href="/projects/rag-llm-agent"
              className="block cursor-pointer"
            >
              <div className="mb-3 aspect-video rounded-lg bg-gradient-to-br from-purple-200 to-purple-300 sm:mb-4 dark:from-purple-900 dark:to-purple-800">
                <img
                  src="/chatBot.png"
                  alt="RAG Knowledge Chatbot – PDF & Web Document Assistant"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h2 className="mb-2 text-lg font-semibold text-black transition-colors group-hover:text-black/80 sm:text-xl dark:text-white dark:group-hover:text-white/80">
                RAG Knowledge Chatbot – PDF & Web Document Assistant
              </h2>
              <p className="mb-3 text-sm text-black sm:mb-4 sm:text-base dark:text-white">
                An AI-powered chatbot that enables users to build their own
                personal knowledge base by uploading PDFs or submitting website
                links. The system automatically extracts, cleans, and segments
                text, converts it into vector embeddings, and stores it in a
                persistent database for conversational querying using RAG.
              </p>
              <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
                <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                  Next.js
                </span>
                <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                  TypeScript
                </span>
                <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                  FastAPI
                </span>
                <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                  ChromaDB
                </span>
                <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                  RAG
                </span>
                <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                  Groq API
                </span>
              </div>
            </Link>
            <div className="flex gap-4">
              <a
                href="https://github.com/morvarid-L-noor/RAG_chatBot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-black transition-colors hover:text-black/80 dark:text-white dark:hover:text-white/80"
              >
                <br />
                View Repository →
              </a>
            </div>
          </div>

          {/* Project Card 1 - RFIC */}
          <Link
            href="/projects/ai-augmented-rfics"
            className="group cursor-pointer rounded-xl border-2 border-purple-300 bg-gradient-to-br from-white to-purple-50/50 p-4 transition-all hover:scale-105 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-300 sm:p-6 dark:border-purple-800 dark:from-zinc-900 dark:to-purple-950/30 dark:hover:border-purple-700 dark:hover:shadow-purple-900/50"
          >
            <div className="mb-3 aspect-video rounded-lg bg-gradient-to-br from-purple-200 to-purple-300 sm:mb-4 dark:from-purple-900 dark:to-purple-800">
              <img
                src="/general_overview.png"
                alt="AI-Augmented RFICs for Transmitter Predistortion for 5G and 6G Communication Applications"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-black transition-colors group-hover:text-black/80 sm:text-xl dark:text-white dark:group-hover:text-white/80">
              AI-Augmented RFICs for Transmitter Predistortion for 5G and 6G
              Communication Applications
            </h2>
            <p className="mb-2 text-xs text-black sm:mb-3 sm:text-sm dark:text-white">
              University of Calgary | Fall 2022 - Winter 2025
            </p>
            <p className="mb-3 text-sm text-black sm:mb-4 sm:text-base dark:text-white">
              Developed an ML-based approach to optimize analog predistortion
              circuits in communication systems.
              Collected and preprocessed data from hardware to
              analyze gain and phase transformations under varying conditions.
            </p>
            
            <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                Machine Learning
              </span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                PCA
              </span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                Random Forest
              </span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                Python
              </span>
            </div>
          </Link>

          {/* Project Card 2 */}
          <div className="group rounded-xl border-2 border-purple-300 bg-gradient-to-br from-white to-purple-50/50 p-4 sm:p-6 dark:border-purple-800 dark:from-zinc-900 dark:to-purple-950/30">
            <div className="mb-3 aspect-video rounded-lg bg-gradient-to-br from-purple-200 to-purple-300 sm:mb-4 dark:from-purple-900 dark:to-purple-800">
              <img
                src="/canis2.png"
                alt="CANIS2 Hackathon 2023 Data Visualization"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-black sm:text-xl dark:text-white">
              CANIS2 Hackathon Data Visualization and Foreign Interference
            </h2>
            <p className="mb-2 text-xs text-black sm:mb-3 sm:text-sm dark:text-white">
              Nov 17 - Nov 20, 2023 | Winner ($3,500)
            </p>
            <p className="mb-3 text-sm text-black sm:mb-4 sm:text-base dark:text-white">
              Analyzed a dataset of 750 suspicious accounts on social media.
              Performed more than ten analyses with detailed interpretations.
              Won Second Prize and Best Performance in Visualization.
            </p>
            <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                Tableau
              </span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                NLTK
              </span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                Scipy
              </span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                Seaborn
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://devpost.com/software/china-s-impact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-black transition-colors hover:text-black/80 dark:text-white dark:hover:text-white/80"
              >
                View Project →
              </a>
            </div>
            <br />
            <div className="flex gap-4">
              <a
                href="https://chinaimpact.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-black transition-colors hover:text-black/80 dark:text-white dark:hover:text-white/80"
              >
                View Website →
              </a>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="group rounded-xl border-2 border-purple-300 bg-gradient-to-br from-white to-purple-50/50 p-4 sm:p-6 dark:border-purple-800 dark:from-zinc-900 dark:to-purple-950/30">
            <div className="mb-3 aspect-video rounded-lg bg-gradient-to-br from-purple-200 to-purple-300 sm:mb-4 dark:from-purple-900 dark:to-purple-800">
              <img
                src="/canis.png"
                alt="CANIS Hackathon 2023 Data Analysis"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-black sm:text-xl dark:text-white">
              Canadian Network on Information and Security (CANIS) Hackathon
            </h2>
            <p className="mb-2 text-xs text-black sm:mb-3 sm:text-sm dark:text-white">
              Mar 31 - Apr 3, 2023 | Winner ($4,000)
            </p>
            <p className="mb-3 text-sm text-black sm:mb-4 sm:text-base dark:text-white">
              Analyzed the "fake and true news" dataset. Deployed a tuned
              passive-aggressive classifier that classified texts with 95%
              accuracy. Performed more than eight analyses with detailed
              interpretations. Won First Prize.
            </p>
            <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                NLTK
              </span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                Scikit-learn
              </span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                TensorFlow
              </span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                NLP
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://devpost.com/software/canis-winners"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-black transition-colors hover:text-black/80 dark:text-white dark:hover:text-white/80"
              >
                View Project →
              </a>
            </div>
            <br />
            <div className="flex gap-4">
              <a
                href="https://fakeortrue.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-black transition-colors hover:text-black/80 dark:text-white dark:hover:text-white/80"
              >
                View Website →
              </a>
            </div>
          </div>

          {/* Project Card 4 */}
          <Link
            href="/projects/musculoskeletal-disorders"
            className="group cursor-pointer rounded-xl border-2 border-purple-300 bg-gradient-to-br from-white to-purple-50/50 p-4 transition-all hover:scale-105 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-300 sm:p-6 dark:border-purple-800 dark:from-zinc-900 dark:to-purple-950/30 dark:hover:border-purple-700 dark:hover:shadow-purple-900/50"
          >
            <div className="mb-3 aspect-video rounded-lg bg-gradient-to-br from-purple-200 to-purple-300 sm:mb-4 dark:from-purple-900 dark:to-purple-800">
              <img
                src="/bsc.png"
                alt="Prediction of Musculoskeletal Disorders (BSc. Thesis)"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-black transition-colors group-hover:text-black/80 sm:text-xl dark:text-white dark:group-hover:text-white/80">
              Prediction of Musculoskeletal Disorders 
            </h2>
            <p className="mb-2 text-xs text-black sm:mb-3 sm:text-sm dark:text-white">
              Mar. 2021 - Sept. 2021
            </p>
            <p className="mb-3 text-sm text-black sm:mb-4 sm:text-base dark:text-white">
              Worked with a dataset collected over six years from 1,818
              patients. Pre-processed the data to create a clean dataset
              suitable for analysis. Applied CNN, MLP, SVM, and transfer
              learning to predict different disorders.
            </p>
            
            <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                CNN
              </span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                MLP
              </span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                SVM
              </span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                Transfer Learning
              </span>
            </div>
          </Link>

          {/* Project Card 5 */}
          <Link
            href="/projects/image-denoising"
            className="group cursor-pointer rounded-xl border-2 border-purple-300 bg-gradient-to-br from-white to-purple-50/50 p-4 transition-all hover:scale-105 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-300 sm:p-6 dark:border-purple-800 dark:from-zinc-900 dark:to-purple-950/30 dark:hover:border-purple-700 dark:hover:shadow-purple-900/50"
          >
            <div className="mb-3 aspect-video rounded-lg bg-gradient-to-br from-purple-200 to-purple-300 sm:mb-4 dark:from-purple-900 dark:to-purple-800">
              <img
                src="/image_processing.png"
                alt="Denoising images in the frequency domain and visualizing the effects"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-black transition-colors group-hover:text-black/80 sm:text-xl dark:text-white dark:group-hover:text-white/80">
              Denoising images in the frequency domain and visualizing the
              effects
            </h2>
            <p className="mb-2 text-xs text-black sm:mb-3 sm:text-sm dark:text-white">
              Spring 2021
            </p>

            <ul className="mb-3 ml-4 list-disc space-y-1 text-xs text-black sm:mb-4 sm:text-sm dark:text-white">
              <li>
                Recognized the type of noise that images had ( images were in
                .dcm format )
              </li>
              <li>
                Filtered images in the frequency domain for denoising (FFt)
              </li>
              <li>
                Created a video demonstrating the denoising process,
                transitioning from the original noisy image to the final
                enhanced version, frame by frame.
              </li>
            </ul>
            <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                CV2
              </span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                FFT
              </span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 sm:px-3 sm:py-1 sm:text-sm dark:bg-purple-900/50 dark:text-purple-400">
                Matplotlib
              </span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
