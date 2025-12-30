"use client";

import { useEffect, useState } from "react";

interface LikeButtonProps {
  slug: string;
}

export default function LikeButton({ slug }: LikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for like status
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}");
    setLiked(!!likedPosts[slug]);

    // Get like count from localStorage (could be replaced with API)
    const likeCounts = JSON.parse(localStorage.getItem("likeCounts") || "{}");
    setCount(likeCounts[slug] || 0);
  }, [slug]);

  const handleLike = () => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}");
    const likeCounts = JSON.parse(localStorage.getItem("likeCounts") || "{}");

    if (liked) {
      // Unlike
      delete likedPosts[slug];
      likeCounts[slug] = Math.max((likeCounts[slug] || 1) - 1, 0);
      setLiked(false);
      setCount((prev) => Math.max(prev - 1, 0));
    } else {
      // Like
      likedPosts[slug] = true;
      likeCounts[slug] = (likeCounts[slug] || 0) + 1;
      setLiked(true);
      setCount((prev) => prev + 1);
    }

    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
    localStorage.setItem("likeCounts", JSON.stringify(likeCounts));
  };

  if (!mounted) {
    return (
      <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-muted">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <span>0</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleLike}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
        liked
          ? "border-accent bg-accent/10 text-accent"
          : "border-border text-muted hover:border-accent hover:text-accent"
      }`}
    >
      <svg
        className="w-5 h-5 transition-transform hover:scale-110"
        fill={liked ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span>{count}</span>
    </button>
  );
}
