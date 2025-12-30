import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import Link from "next/link";
import { getPostBySlug, getAllPosts, getAdjacentPosts } from "@/lib/mdx";
import ShareButtons from "@/components/ShareButtons";
import LikeButton from "@/components/LikeButton";
import Comments from "@/components/Comments";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Utkarsh Ranjan"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { prev, next } = getAdjacentPosts(slug);
  const postUrl = `https://utkarsh-ranjan.com/blog/${slug}`;

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted mb-4">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
          {post.title}
        </h1>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-border rounded-full text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Content */}
      <div className="prose">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              rehypePlugins: [rehypeHighlight, rehypeSlug],
            },
          }}
        />
      </div>

      {/* Actions */}
      <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <LikeButton slug={slug} />
        <ShareButtons url={postUrl} title={post.title} />
      </div>

      {/* Navigation */}
      <nav className="mt-12 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prev && (
          <Link
            href={`/blog/${prev.slug}`}
            className="group p-4 rounded-lg border border-border hover:border-accent transition-colors"
          >
            <span className="text-sm text-muted">&larr; Previous</span>
            <p className="font-serif font-semibold group-hover:text-accent transition-colors">
              {prev.title}
            </p>
          </Link>
        )}
        {next && (
          <Link
            href={`/blog/${next.slug}`}
            className="group p-4 rounded-lg border border-border hover:border-accent transition-colors sm:text-right sm:col-start-2"
          >
            <span className="text-sm text-muted">Next &rarr;</span>
            <p className="font-serif font-semibold group-hover:text-accent transition-colors">
              {next.title}
            </p>
          </Link>
        )}
      </nav>

      {/* Comments */}
      <Comments />
    </article>
  );
}
