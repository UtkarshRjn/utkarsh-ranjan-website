import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  featured?: boolean;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  readingTime,
  featured = false,
}: BlogCardProps) {
  return (
    <article
      className={`group ${featured ? "border-b border-border pb-8 mb-8" : ""}`}
    >
      <Link href={`/blog/${slug}`}>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>&middot;</span>
            <span>{readingTime}</span>
          </div>

          <h2
            className={`font-serif font-semibold group-hover:text-accent transition-colors ${
              featured ? "text-2xl" : "text-xl"
            }`}
          >
            {title}
          </h2>

          <p className="text-muted leading-relaxed">{excerpt}</p>

          <span className="inline-block text-accent text-sm font-medium group-hover:underline">
            Read more &rarr;
          </span>
        </div>
      </Link>
    </article>
  );
}
