import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "next-themes";

// import FluidCursor from "./FluidCursor";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Helmet>
        <html lang="en" />
        <title>Jay Mark Nicolas - Full-Stack Software Engineer | Portfolio & Projects</title>
        <meta
          name="title"
          content="Jay Mark Nicolas - Full-Stack Software Engineer | Portfolio & Projects"
        />
        <meta
          name="description"
          content="Jay Mark Nicolas - Full-Stack Software Engineer specializing in React, Next.js, Laravel, and TypeScript. Building modern web applications, RESTful APIs, and scalable systems."
        />
        <link rel="canonical" href="https://www.jaymarknicolas.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jaymarknicolas.com/" />
        <meta
          property="og:title"
          content="Jay Mark Nicolas - Full-Stack Software Engineer | Portfolio & Projects"
        />
        <meta
          property="og:description"
          content="Full-Stack Software Engineer specializing in React, Next.js, Laravel, and TypeScript. Featured project: Qorvex - Customizable productivity dashboard with draggable widgets."
        />
        <meta
          property="og:image"
          content="https://www.jaymarknicolas.com/portfolio-v1.webp"
        />
        <meta property="og:site_name" content="Jay Mark Nicolas Portfolio" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.jaymarknicolas.com/"
        />
        <meta
          property="twitter:title"
          content="Jay Mark Nicolas - Full-Stack Software Engineer | Portfolio & Projects"
        />
        <meta
          property="twitter:description"
          content="Full-Stack Software Engineer specializing in React, Next.js, Laravel, and TypeScript. Featured project: Qorvex - Customizable productivity dashboard with draggable widgets."
        />
        <meta
          property="twitter:image"
          content="https://www.jaymarknicolas.com/portfolio-v1.webp"
        />
      </Helmet>
      <div className="bg-background text-foreground font-sans min-h-screen transition-colors">
        {children}
      </div>
      {/* <FluidCursor /> */}
    </ThemeProvider>
  );
};

export default RootLayout;
