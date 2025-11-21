import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Project data - you can expand this with more details and images
const projects: Record<
  string,
  {
    title: string;
    affiliation: string;
    date: string;
    description: string;
    details?: string[];
    technologies: string[];
    images: string[];
    mainImage: string;
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
    images: ["/general_overview.png"], // Add more image paths here
    mainImage: "/general_overview.png",
  },
  "musculoskeletal-disorders": {
    title: "Prediction of Musculoskeletal Disorders (BSc. Thesis)",
    affiliation: "",
    date: "Mar. 2021 - Sept. 2021",
    description:
      "Worked with a dataset collected over six years from 1,818 patients. Pre-processed the data to create a clean dataset suitable for analysis. Applied CNN, MLP, SVM, and transfer learning to predict different disorders.",
    details: [
      "Transfer learning achieved best accuracy (85%) predicting ten disorders",
    ],
    technologies: ["CNN", "MLP", "SVM", "Transfer Learning"],
    images: ["/bsc.png"], // Add more image paths here
    mainImage: "/bsc.png",
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
    images: ["/image_processing.png"], // Add more image paths here
    mainImage: "/image_processing.png",
  },
  "rag-llm-agent": {
    title: "RAG and LLM Agent for Special Education",
    affiliation: "Pointsville",
    date: "Jun. 2024 - Aug. 2024",
    description:
      "Built an AI agent to centralize information for special education (SPED) children and assist parents in understanding available services and interpreting IEPs. Developed web scraping and data querying tools using Python (FastAPI) and LangChain, enabling context-aware responses from a vector database (FAISS).",
    details: [
      "Implemented RAG (Retrieval-Augmented Generation) architecture for accurate, context-aware responses",
      "Built vector database using FAISS for efficient semantic search",
      "Developed web scraping pipeline to collect and index relevant information",
      "Created FastAPI backend with LangChain integration for real-time query processing",
    ],
    technologies: ["RAG", "LLM", "LangChain", "FastAPI", "FAISS", "Python"],
    images: ["/general_overview.png"], // Add more image paths here
    mainImage: "/general_overview.png",
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
        <div className="mb-6 overflow-hidden rounded-xl sm:mb-8">
          <Image
            src={project.mainImage}
            alt={project.title}
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
            priority
          />
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
            <p>
              <span className="font-medium">Date:</span> {project.date}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6 sm:mb-8">
          <h2 className="mb-3 text-xl font-semibold text-black sm:text-2xl dark:text-white">
            Overview
          </h2>
          <p className="text-base leading-relaxed text-black sm:text-lg dark:text-white">
            {project.description}
          </p>
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

        {/* Image Gallery */}
        {project.images && project.images.length > 1 && (
          <div className="mb-6 sm:mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black sm:text-2xl dark:text-white">
              Gallery
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border-2 border-purple-300 dark:border-purple-800"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
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
      </div>
    </main>
  );
}

