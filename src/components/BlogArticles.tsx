import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Heart, ExternalLink, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  reading_time_minutes: number;
  positive_reactions_count: number;
  cover_image?: string;
  tag_list: string[];
}

// Fallback articles when API is unavailable or user hasn't written articles yet
const fallbackArticles: Article[] = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js 14",
    description: "A comprehensive guide to building production-ready applications using Next.js 14, covering server components, app router, and modern patterns.",
    url: "#",
    published_at: "2025-01-10T00:00:00Z",
    reading_time_minutes: 8,
    positive_reactions_count: 42,
    tag_list: ["nextjs", "react", "webdev"],
  },
  {
    id: 2,
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    description: "Explore advanced TypeScript patterns including generics, conditional types, and mapped types to write more type-safe code.",
    url: "#",
    published_at: "2025-01-05T00:00:00Z",
    reading_time_minutes: 12,
    positive_reactions_count: 38,
    tag_list: ["typescript", "javascript", "tutorial"],
  },
  {
    id: 3,
    title: "Creating Beautiful UIs with Tailwind CSS and Framer Motion",
    description: "Learn how to combine Tailwind CSS with Framer Motion to create stunning, animated user interfaces that delight users.",
    url: "#",
    published_at: "2024-12-28T00:00:00Z",
    reading_time_minutes: 6,
    positive_reactions_count: 55,
    tag_list: ["tailwindcss", "animation", "ui"],
  },
];

interface BlogArticlesProps {
  username?: string;
  showFallback?: boolean;
}

export function BlogArticles({ username = "jaymarknicolas", showFallback = true }: BlogArticlesProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://dev.to/api/articles?username=${username}&per_page=3`
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        if (data.length === 0 && showFallback) {
          setArticles(fallbackArticles);
        } else {
          setArticles(data);
        }
      } catch {
        setError(true);
        if (showFallback) {
          setArticles(fallbackArticles);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [username, showFallback]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="glass-card rounded-2xl p-6 animate-pulse"
          >
            <div className="h-32 bg-muted rounded-lg mb-4" />
            <div className="h-4 bg-muted rounded w-3/4 mb-2" />
            <div className="h-3 bg-muted rounded w-full mb-4" />
            <div className="h-3 bg-muted rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="glass-card rounded-2xl p-12 text-center">
        <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
        <p className="text-muted-foreground">
          Blog articles will be available soon. Stay tuned!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-2xl overflow-hidden glass-card-hover group block"
          >
            {/* Cover Image */}
            {article.cover_image ? (
              <div className="h-40 overflow-hidden">
                <img
                  src={article.cover_image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="h-40 bg-gradient-to-br from-[#FF4D00]/20 via-background to-[#FF6B35]/20 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-[#FF4D00]/50" />
              </div>
            )}

            <div className="p-5">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {article.tag_list.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] rounded-full bg-[#FF4D00]/10 text-[#FF4D00]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-bold text-foreground group-hover:text-[#FF4D00] transition-colors line-clamp-2 mb-2">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {article.description}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {formatDate(article.published_at)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.reading_time_minutes} min
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <Heart className="h-3 w-3" />
                  {article.positive_reactions_count}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <a
          href={`https://dev.to/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300 group"
        >
          <BookOpen className="h-5 w-5 group-hover:text-[#FF4D00] transition-colors" />
          <span className="font-medium group-hover:text-[#FF4D00] transition-colors">
            View All Articles
          </span>
          <ExternalLink className="h-4 w-4 group-hover:text-[#FF4D00] transition-colors" />
        </a>
      </motion.div>
    </div>
  );
}
