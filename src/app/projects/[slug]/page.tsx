import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import VideoPlayer from "@/components/video-player";

// Project data - you can expand this with more details and images
const projects: Record<
  string,
  {
    title: string;
    affiliation: string;
    date: string;
    description: string | string[];
    details?: string[];
    technologies: string[];
    images: string[];
    mainImage: string;
    repository?: string;
    video?: string;
    publications?: Array<{
      title: string;
      viewLink: string;
      pdfLink: string;
    }>;
  }
> = {
  "ai-augmented-rfics": {
    title:
      "AI-Augmented RFICs for Transmitter Predistortion for 5G and 6G Communication Applications",
    affiliation: "University of Calgary",
    date: "Fall 2022 - Winter 2025",
    description:
      "Developed an ML-based approach to optimize analog predistortion (APD) circuits for power amplifiers in communication systems. Collected and preprocessed measurement data from hardware to analyze gain and phase transformations under varying control voltages.",
    details: [
      "Implemented dimensionality reduction using PCA to enhance learning efficiency",
      "Identified Random Forest as the most effective model for voltage prediction",
      "Achieved 10 dB ACPR improvement during hardware testing",
    ],
    technologies: ["Machine Learning", "PCA", "Random Forest", "Python"],
    images: [],
    mainImage: "/general_overview.png",
  },
  "musculoskeletal-disorders": {
    title: "Prediction of Musculoskeletal Disorders",
    affiliation: "",
    date: "Mar. 2021 - Sept. 2021",
    description: [
      "This project focused on developing machine learning models to automatically detect various musculoskeletal disorders using dynamic foot pressure scan data. The goal was to explore whether plantar pressure distributions alone, without direct patient examination, could provide reliable diagnostic insights.",
      "I worked with a clinical dataset consisting of multiple foot health conditions such as pes planus (flat foot), pes cavus (high arch), hallux valgus, splay foot, heel spur, toe-in gait, plantar fasciitis, diabetic foot abnormalities, ankle sprain indicators, and leg length discrepancy. The data included surface pressure maps, zone force matrices, and center-of-pressure trajectories extracted from motion frames.",
      "To evaluate classification performance, I implemented and compared multiple ML and deep learning approaches, including Support Vector Machines (SVM), Multi-Layer Perceptrons (MLP), Convolutional Neural Networks (CNN), and transfer learning with fine-tuned pretrained models. The best performance achieved on binary and multi-class tasks reached accuracy levels up to 94% for specific conditions.",
      "This work demonstrated that machine learning can effectively assist in preliminary foot disorder screening using pressure scan technology, especially valuable in clinical environments where manual examination or specialized equipment is limited. Future work could incorporate synthetic data generation using GANs to overcome data scarcity and improve generalization across all clinical categories.",
    ],
    details: [
      "Transfer learning achieved best accuracy (85%) predicting ten disorders",
    ],
    technologies: ["CNN", "MLP", "SVM", "Transfer Learning"],
    images: ["/surface_pressure_frames.png", "/dynamic_examination_report.png"],
    mainImage: "/bsc.png",
    publications: [
      {
        title:
          "Neural Network and Support Vector Machine for Prediction of Foot Disorders Based on Foot Analysis",
        viewLink:
          "https://publications.waset.org/abstracts/139369/neural-network-and-support-vector-machine-for-prediction-of-foot-disorders-based-on-foot-analysis",
        pdfLink: "https://publications.waset.org/abstracts/139369.pdf",
      },
      {
        title:
          "A Convolution Neural Network Approach to Predict Pes-planus Using Plantar Pressure Mapping Images",
        viewLink:
          "https://publications.waset.org/abstracts/139534/a-convolution-neural-network-approach-to-predict-pes-planus-using-plantar-pressure-mapping-images",
        pdfLink: "https://publications.waset.org/abstracts/139534.pdf",
      },
    ],
  },
  "image-denoising": {
    title:
      "Denoising images in the frequency domain and visualizing the effects",
    affiliation: "",
    date: "Spring 2021",
    description:
      "A project focused on image denoising using frequency domain techniques.",
    details: [
      "Recognized the type of noise that images had (images were in .dcm format)",
      "Filtered images in the frequency domain for denoising (FFT)",
      "Created a video demonstrating the denoising process, transitioning from the original noisy image to the final enhanced version, frame by frame.",
    ],
    technologies: ["CV2", "FFT", "Matplotlib"],
    images: [],
    mainImage: "/image_processing.png",
    video: "/output.mp4",
  },
  "rag-llm-agent": {
    title: "RAG Knowledge Chatbot – PDF & Web Document Assistant",
    affiliation: "",
    date: "",
    description:
      "This project is an AI-powered chatbot that enables users to build their own personal knowledge base by uploading PDFs or submitting website links. The system automatically extracts, cleans, and segments text from these sources, converts it into vector embeddings, and stores it in a persistent database. Users can then ask questions directly about the uploaded content, and the chatbot retrieves the most relevant information to generate accurate, grounded responses using a Retrieval-Augmented Generation (RAG) pipeline. The web interface provides a smooth workflow for managing ingested documents and engaging in contextual conversations. It combines modern frontend design, scalable serverless backend architecture, and production-ready AI capabilities using completely free cloud resources.",
    details: [
      "Upload PDFs or ingest content from URLs with automatic text extraction, chunking, embedding, and storage",
      "Conversational querying grounded in retrieved context for accurate, relevant responses",
      "Persistent vector database for long-term knowledge retention using ChromaDB",
      "Simple, accessible UI for continuous user interaction built with Next.js and TypeScript",
      "Fully deployed and always online with zero hosting cost using Vercel and Railway free tier",
      "Web scraping and parsing capabilities using BeautifulSoup, Newspaper3k, and PyMuPDF",
      "LLM inference powered by Llama models via Groq API for fast, free responses",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "ChromaDB",
      "Sentence Transformers",
      "RAG",
      "Groq API",
      "BeautifulSoup",
      "Newspaper3k",
      "PyMuPDF",
      "Vercel",
      "Railway",
    ],
    images: [],
    mainImage: "/chatBot.png",
    repository: "https://github.com/morvarid-L-noor/RAG_chatBot.git",
  },
};

// Generate static params for the known project slugs
export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen px-2 py-8 sm:px-4 sm:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Back Button */}
        <Link
          href="/projects"
          className="mb-6 inline-flex items-center text-sm font-medium text-black transition-colors hover:text-black/80 dark:text-white dark:hover:text-white/80 sm:mb-8"
        >
          ← Back to Projects
        </Link>

        {/* Main Image */}
        <div className="mb-6 flex justify-center sm:mb-8">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl">
            <Image
              src={project.mainImage}
              alt={project.title}
              width={1200}
              height={675}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Project Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="mb-3 text-2xl font-bold text-black sm:text-3xl md:text-4xl dark:text-white">
            {project.title}
          </h1>
          <div className="mb-4 space-y-1 text-sm text-black sm:text-base dark:text-white">
            {project.affiliation && (
              <p>
                <span className="font-medium">Affiliation:</span>{" "}
                {project.affiliation}
              </p>
            )}
            {project.date && (
              <p>
                <span className="font-medium">Date:</span> {project.date}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6 sm:mb-8">
          <h2 className="mb-3 text-xl font-semibold text-black sm:text-2xl dark:text-white">
            Overview
          </h2>
          {Array.isArray(project.description) ? (
            <div className="space-y-4 text-base leading-relaxed text-black sm:text-lg dark:text-white">
              {project.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <p className="text-base leading-relaxed text-black sm:text-lg dark:text-white">
              {project.description}
            </p>
          )}
        </div>

        {/* Details/Key Points */}
        {project.details && project.details.length > 0 && (
          <div className="mb-6 sm:mb-8">
            <h2 className="mb-3 text-xl font-semibold text-black sm:text-2xl dark:text-white">
              Key Achievements
            </h2>
            <ul className="ml-4 list-disc space-y-2 text-base text-black sm:text-lg dark:text-white">
              {project.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies - Show before Video if it exists, or at end if no Video/Gallery */}
        {(project.video || (project.images && project.images.length > 0)) && (
          <div className="mb-6 sm:mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black sm:text-2xl dark:text-white">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 sm:px-4 sm:py-1.5 sm:text-base dark:bg-purple-900/50 dark:text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Video */}
        {/* {project.video && (
          <div className="mb-6 sm:mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black sm:text-2xl dark:text-white">
              Video Demonstration
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-sm overflow-hidden rounded-lg border-2 border-purple-300 dark:border-purple-800">
                <VideoPlayer src={project.video} className="h-auto w-full" />
              </div>
            </div>
          </div>
        )} */}

        {/* Technologies - Show at end if no Video or Gallery */}
        {!project.video && (!project.images || project.images.length === 0) && (
          <div className="mb-6 sm:mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black sm:text-2xl dark:text-white">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 sm:px-4 sm:py-1.5 sm:text-base dark:bg-purple-900/50 dark:text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Repository Link */}
        {project.repository && (
          <div className="mb-6 sm:mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black sm:text-2xl dark:text-white">
              Repository
            </h2>
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-700 sm:px-6 sm:py-3 sm:text-base dark:bg-purple-800 dark:hover:bg-purple-700"
            >
              View on GitHub
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        )}

        {/* Related Publications */}
        {project.publications && project.publications.length > 0 && (
          <div className="mb-6 sm:mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black sm:text-2xl dark:text-white">
              Related Publications
            </h2>
            <div className="space-y-4">
              {project.publications.map((publication, index) => (
                <div
                  key={index}
                  className="rounded-lg border-2 border-purple-300 bg-purple-50/50 p-4 dark:border-purple-800 dark:bg-purple-950/30"
                >
                  <h3 className="mb-2 text-base font-semibold text-black dark:text-white sm:text-lg">
                    {publication.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={publication.viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-black transition-colors hover:text-purple-600 hover:underline dark:text-white dark:hover:text-purple-400"
                    >
                      View Paper →
                    </a>
                    <a
                      href={publication.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-black transition-colors hover:text-purple-600 hover:underline dark:text-white dark:hover:text-purple-400"
                    >
                      PDF →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Image Gallery - Moved to end after Related Publications */}
        {project.images && project.images.length > 0 && (
          <div className="mb-6 sm:mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black sm:text-2xl dark:text-white">
              Gallery
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {project.images.map((image, index) => {
                // Extract caption from filename (remove path and extension, replace underscores with spaces, capitalize)
                const filename = image.split("/").pop() || "";
                const caption = filename
                  .replace(/\.[^/.]+$/, "") // Remove extension
                  .replace(/_/g, " ") // Replace underscores with spaces
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ");

                return (
                  <div
                    key={index}
                    className="w-full max-w-xs overflow-hidden rounded-lg border-2 border-purple-300 dark:border-purple-800"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - ${caption}`}
                      width={300}
                      height={225}
                      className="h-auto w-full object-cover"
                    />
                    <p className="p-2 text-center text-sm font-medium text-black dark:text-white">
                      {caption}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
