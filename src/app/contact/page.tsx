export default function Contact() {
  return (
    <main className="min-h-screen px-2 py-8 sm:px-4 sm:py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl dark:text-white">
          Get In Touch
        </h1>
        <p className="mb-8 text-base text-black sm:mb-12 sm:text-lg dark:text-white">
          I'd love to hear from you! Whether you have a question, want to
          collaborate, or just want to say hello, feel free to reach out.
        </p>

        <div className="space-y-6 sm:space-y-8">
          {/* Contact Information */}
          <div className="rounded-xl border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-purple-100/50 p-4 shadow-lg sm:p-6 dark:border-purple-800 dark:from-purple-950/30 dark:to-purple-900/30">
            <h2 className="mb-3 text-lg font-semibold text-black sm:mb-4 sm:text-xl dark:text-white">
              Contact Information
            </h2>
            <div className="space-y-2 text-sm text-black sm:space-y-3 sm:text-base dark:text-white">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:lalenoorm@gmail.com"
                  className="font-semibold text-black transition-colors hover:text-black/80 hover:underline dark:text-white dark:hover:text-white/80"
                >
                  lalenoorm@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">LinkedIn:</span>{" "}
                <a
                  href="https://linkedin.com/in/lalenoor"
                  className="font-semibold text-black transition-colors hover:text-black/80 hover:underline dark:text-white dark:hover:text-white/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/lalenoor
                </a>
              </p>
              <p>
                <span className="font-medium">GitHub:</span>{" "}
                <a
                  href="https://github.com/morvarid-L-noor"
                  className="font-semibold text-black transition-colors hover:text-black/80 hover:underline dark:text-white dark:hover:text-white/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/morvarid-L-noor
                </a>
              </p>
              <p>
                <span className="font-medium">Location:</span> Calgary, Canada
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
