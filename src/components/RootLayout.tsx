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
        <title>Jay Mark Nicolas - Software Engineer</title>
        <meta
          name="title"
          content="Jay Mark Nicolas - Software Engineer & Aspiring UX/UI Designer"
        />
        <meta
          name="description"
          content="Welcome to the portfolio of Jay Mark Nicolas, a software engineer and aspiring UX/UI designer based in Cagayan de Oro, Philippines. Explore my projects and experiences."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jaymarknicolas.com/" />
        <meta
          property="og:title"
          content="Jay Mark Nicolas - Software Engineer & Aspiring UX/UI Designer"
        />
        <meta
          property="og:description"
          content="Welcome to the portfolio of Jay Mark Nicolas, a software engineer and aspiring UX/UI designer based in Cagayan de Oro, Philippines. Explore my projects and experiences."
        />
        <meta
          property="og:image"
          content="https://www.jaymarknicolas.com/portfolio-v1.webp"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.jaymarknicolas.com/"
        />
        <meta
          property="twitter:title"
          content="Jay Mark Nicolas - Software Engineer & Aspiring UX/UI Designer"
        />
        <meta
          property="twitter:description"
          content="Welcome to the portfolio of Jay Mark Nicolas, a software engineer and aspiring UX/UI designer based in Cagayan de Oro, Philippines. Explore my projects and experiences."
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
