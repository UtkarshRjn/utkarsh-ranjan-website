import { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my latest thoughts and articles",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="font-serif text-3xl font-bold mb-4">Blog</h1>
        <p className="text-muted">
          All my writings in one place. Thoughts on technology, engineering,
          and life.
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="space-y-10">
          {posts.map((post) => (
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
    </div>
  );
}
