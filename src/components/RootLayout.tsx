import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";

// import FluidCursor from "./FluidCursor";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
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
          content="https://www.jaymarknicolas.com/profile.png"
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
          content="https://www.jaymarknicolas.com/profile.png"
        />
      </Helmet>
      <div className="bg-black font-sans min-h-screen">{children}</div>
      {/* <FluidCursor /> */}
    </>
  );
};

export default RootLayout;
