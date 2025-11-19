export default function Contact() {
  return (
    <main className="min-h-screen px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-3xl font-bold text-purple-800 sm:text-4xl dark:text-purple-600">
          Get In Touch
        </h1>
        <p className="mb-8 text-base text-zinc-600 sm:mb-12 sm:text-lg dark:text-zinc-400">
          I'd love to hear from you! Whether you have a question, want to
          collaborate, or just want to say hello, feel free to reach out.
        </p>

        <div className="space-y-6 sm:space-y-8">
          {/* Contact Information */}
          <div className="rounded-xl border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-purple-100/50 p-4 shadow-lg sm:p-6 dark:border-purple-800 dark:from-purple-950/30 dark:to-purple-900/30">
            <h2 className="mb-3 text-lg font-semibold text-purple-800 sm:mb-4 sm:text-xl dark:text-purple-600">
              Contact Information
            </h2>
            <div className="space-y-2 text-sm text-zinc-700 sm:space-y-3 sm:text-base dark:text-zinc-300">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:lalenoorm@gmail.com"
                  className="font-semibold text-purple-800 transition-colors hover:text-purple-900 hover:underline dark:text-purple-600 dark:hover:text-purple-500"
                >
                  lalenoorm@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">LinkedIn:</span>{" "}
                <a
                  href="#"
                  className="font-semibold text-purple-800 transition-colors hover:text-purple-900 hover:underline dark:text-purple-600 dark:hover:text-purple-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/lalenoor
                </a>
              </p>
              <p>
                <span className="font-medium">GitHub:</span>{" "}
                <a
                  href="#"
                  className="font-semibold text-purple-800 transition-colors hover:text-purple-900 hover:underline dark:text-purple-600 dark:hover:text-purple-500"
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

          {/* Contact Form */}
          <form className="space-y-4 sm:space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-foreground sm:mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-lg border-2 border-purple-300 bg-white px-4 py-2 text-foreground transition-all focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-purple-800 dark:bg-zinc-950 dark:focus:border-purple-600 dark:focus:ring-purple-900/50"
                placeholder="Pearl Lalenoor"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-foreground sm:mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border-2 border-purple-300 bg-white px-4 py-2 text-foreground transition-all focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-purple-800 dark:bg-zinc-950 dark:focus:border-purple-600 dark:focus:ring-purple-900/50"
                placeholder="lalenoorm@gmail.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-1.5 block text-sm font-medium text-foreground sm:mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full rounded-lg border-2 border-purple-300 bg-white px-4 py-2 text-foreground transition-all focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-purple-800 dark:bg-zinc-950 dark:focus:border-purple-600 dark:focus:ring-purple-900/50"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground sm:mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full rounded-lg border-2 border-purple-300 bg-white px-4 py-2 text-foreground transition-all focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-purple-800 dark:bg-zinc-950 dark:focus:border-purple-600 dark:focus:ring-purple-900/50"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-purple-800 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-700/50 dark:bg-purple-700"
            >
              Send Message
            </button>
          </form>

          <p className="text-center text-sm text-zinc-500 dark:text-zinc-500">
            Note: This is a template form. You'll need to set up a backend
            service or use a service like Formspree, EmailJS, or similar to
            handle form submissions.
          </p>
        </div>
      </div>
    </main>
  );
}
