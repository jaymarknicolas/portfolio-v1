import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, GitFork, Star, Code2, Activity, Users, BookOpen, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface GitHubStatsProps {
  username?: string;
}

interface GitHubData {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  bio: string;
  html_url: string;
}

export function GitHubStats({ username = "jaymarknicolas" }: GitHubStatsProps) {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setGithubData(data);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  const handleImageError = (imageKey: string) => {
    setImageError((prev) => ({ ...prev, [imageKey]: true }));
  };

  const stats = [
    {
      icon: BookOpen,
      label: "Repositories",
      value: githubData?.public_repos || "30+",
    },
    {
      icon: Users,
      label: "Followers",
      value: githubData?.followers || "50+",
    },
    {
      icon: Star,
      label: "Stars Earned",
      value: "25+",
    },
    {
      icon: Activity,
      label: "Contributions",
      value: "500+",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card rounded-xl p-4 glass-card-hover text-center group"
          >
            <stat.icon className="h-6 w-6 mx-auto mb-2 text-[#FF4D00] group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Activity Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-card rounded-xl p-6 glass-card-hover overflow-hidden"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold flex items-center gap-2">
            <Github className="h-5 w-5 text-[#FF4D00]" />
            GitHub Activity
          </h3>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#FF4D00] hover:text-[#FF6B35] transition-colors flex items-center gap-1"
          >
            View Profile
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Contribution Graph */}
        <div className="space-y-4">
          {!imageError.chart ? (
            <div className="rounded-lg overflow-hidden bg-muted/30 p-2">
              <img
                src={`https://ghchart.rshah.org/FF4D00/${username}`}
                alt="GitHub Contribution Graph"
                className="w-full"
                onError={() => handleImageError("chart")}
              />
            </div>
          ) : (
            <div className="rounded-lg bg-muted/30 p-8 text-center">
              <Activity className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">
                Contribution graph unavailable
              </p>
            </div>
          )}

          {/* Stats Cards from GitHub API */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* GitHub Stats Card */}
            {!imageError.stats ? (
              <div className="rounded-lg overflow-hidden bg-muted/30">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=FF4D00&icon_color=FF4D00&text_color=94a3b8&bg_color=00000000&count_private=true`}
                  alt="GitHub Stats"
                  className="w-full h-auto"
                  onError={() => handleImageError("stats")}
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="rounded-lg bg-muted/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="h-5 w-5 text-[#FF4D00]" />
                  <span className="font-medium">GitHub Stats</span>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Public Repos</span>
                    <span className="text-foreground">{githubData?.public_repos || "30+"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Followers</span>
                    <span className="text-foreground">{githubData?.followers || "50+"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Following</span>
                    <span className="text-foreground">{githubData?.following || "20+"}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Top Languages Card */}
            {!imageError.langs ? (
              <div className="rounded-lg overflow-hidden bg-muted/30">
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=FF4D00&text_color=94a3b8&bg_color=00000000&langs_count=6`}
                  alt="Top Languages"
                  className="w-full h-auto"
                  onError={() => handleImageError("langs")}
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="rounded-lg bg-muted/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="h-5 w-5 text-[#FF4D00]" />
                  <span className="font-medium">Top Languages</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "TypeScript", percent: 35, color: "bg-blue-500" },
                    { name: "JavaScript", percent: 25, color: "bg-yellow-500" },
                    { name: "PHP", percent: 20, color: "bg-purple-500" },
                    { name: "CSS", percent: 12, color: "bg-pink-500" },
                    { name: "HTML", percent: 8, color: "bg-orange-500" },
                  ].map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">{lang.name}</span>
                        <span className="text-foreground">{lang.percent}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className={cn("h-full rounded-full", lang.color)}
                          style={{ width: `${lang.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* GitHub Profile Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300 group"
        >
          <Github className="h-5 w-5 group-hover:text-[#FF4D00] transition-colors" />
          <span className="font-medium group-hover:text-[#FF4D00] transition-colors">
            Follow on GitHub
          </span>
        </a>
      </motion.div>
    </div>
  );
}
