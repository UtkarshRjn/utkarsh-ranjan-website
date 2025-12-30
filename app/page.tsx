import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const posts = getAllPosts();
  const featuredPost = posts.find((post) => post.featured);
  const recentPosts = posts.filter((post) => !post.featured).slice(0, 5);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="font-serif text-4xl font-bold mb-4">
          Welcome to my corner of the internet
        </h1>
        <p className="text-lg text-muted leading-relaxed">
          I write about technology, software engineering, and the occasional
          musings on life. Join me as I explore ideas and share what I learn
          along the way.
        </p>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-12">
          <h2 className="font-serif text-sm font-semibold text-accent uppercase tracking-wide mb-6">
            Featured
          </h2>
          <BlogCard
            slug={featuredPost.slug}
            title={featuredPost.title}
            excerpt={featuredPost.excerpt}
            date={featuredPost.date}
            readingTime={featuredPost.readingTime}
            featured
          />
        </section>
      )}

      {/* Recent Posts */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-sm font-semibold text-accent uppercase tracking-wide">
            Recent Posts
          </h2>
          <Link
            href="/blog"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            View all &rarr;
          </Link>
        </div>

        {recentPosts.length > 0 ? (
          <div className="space-y-8">
            {recentPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readingTime={post.readingTime}
              />
            ))}
          </div>
        ) : (
          <p className="text-muted italic">
            No posts yet. Check back soon for new content!
          </p>
        )}
      </section>
    </div>
  );
}
