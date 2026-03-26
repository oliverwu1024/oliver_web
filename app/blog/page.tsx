import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on ML research, engineering workflows, and lessons learned.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    title: "Coming Soon",
    summary:
      "I'm working on writing up thoughts on time series forecasting, Bayesian ML, HPC workflows, and the tools I use daily. Stay tuned.",
    date: "2026",
    tags: ["Update"],
  },
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-4 block">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Thoughts &{" "}
            <span className="gradient-text">writing</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Notes on ML research, engineering workflows, and lessons learned along the way.
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="card-hover group p-8 rounded-2xl bg-surface border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-muted">{post.date}</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {post.title}
              </h2>

              <p className="text-sm text-muted leading-relaxed">
                {post.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
