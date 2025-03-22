interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  link: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 space-y-4 hover:bg-[#1A1A1A]/80 transition-colors">
      <h3 className="text-lg font-bold text-white">{post.title}</h3>
      <p className="text-gray-300 line-clamp-2 text-base">{post.excerpt}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-400">{post.date}</span>
        <a href={post.link} target="_blank" rel="noopener noreferrer">
          <button className="text-[#FF4D00] text-sm hover:text-[#FF4D00]/80 transition-colors">
            Read More →
          </button>
        </a>
      </div>
    </div>
  );
}
