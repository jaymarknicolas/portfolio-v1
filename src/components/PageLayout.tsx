import { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StaticGradientBackground } from "./GradientBackground";
import { ThemeToggle } from "./ThemeToggle";
import { BackToTop } from "./BackToTop";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  canonicalPath: string;
}

export function PageLayout({
  children,
  title,
  description,
  canonicalPath,
}: PageLayoutProps) {
  const navigate = useNavigate();
  const baseUrl = "https://www.jaymarknicolas.com";
  const fullTitle = `${title} | Jay Mark Nicolas - Software Engineer`;

  const handleBack = () => {
    // Use browser back to trigger POP navigation and restore scroll position
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // Fallback if no history (direct URL access)
      navigate("/");
    }
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Helmet>
        <html lang="en" />
        <title>{fullTitle}</title>
        <meta name="title" content={fullTitle} />
        <meta name="description" content={description} />
        <link rel="canonical" href={`${baseUrl}${canonicalPath}`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}${canonicalPath}`} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${baseUrl}/portfolio-v1.webp`} />
        <meta property="og:site_name" content="Jay Mark Nicolas Portfolio" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${baseUrl}${canonicalPath}`} />
        <meta property="twitter:title" content={fullTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${baseUrl}/portfolio-v1.webp`} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground relative">
        <StaticGradientBackground />
        <BackToTop />

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 px-4 z-50 flex mt-4 gap-2 !text-sm justify-between w-full items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBack}
            className="glass-card hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:text-[#FF4D00] transition-colors" />
            Back
          </Button>
          <div className="flex gap-2">
            <Link to="/">
              <Button
                variant="ghost"
                size="sm"
                className="glass-card hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300 group"
              >
                <Home className="h-4 w-4 group-hover:text-[#FF4D00] transition-colors" />
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-8 relative z-10 pt-24">
          {children}
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border/50 relative z-10">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Jay Mark Nicolas. Crafted with passion.
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}
