export default function Home() {
  return (
    <main className="min-h-screen p-12 font-sans max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Oliver</h1>
      <p className="text-lg text-gray-700 mb-8">
        Welcome to my personal website. I specialize in time series forecasting, data analysis, and working with high-performance computing environments.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Tech Stack & Tools</h2>
        <ul className="list-disc ml-5 text-gray-600 space-y-1">
          <li><strong>Languages:</strong> Python, R, SQL, and Rust</li>
          <li><strong>Environment & Tools:</strong> Linux (Pop!_OS), VS Code, Miniconda</li>
          <li><strong>Infrastructure:</strong> HPC clusters (SLURM)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Current Work & Research</h2>
        <ul className="list-disc ml-5 text-gray-600 space-y-2">
          <li>
            <strong>LSGT-PFN:</strong> Exploring Bayesian time series and Probabilistic Forecasting utilizing Prior-Data Fitted Networks.
          </li>
          <li>
            <strong>Model Evaluation:</strong> Running foundational models and formatting datasets for the GIFT-Eval benchmark.
          </li>
        </ul>
      </section>
    </main>
  );
}