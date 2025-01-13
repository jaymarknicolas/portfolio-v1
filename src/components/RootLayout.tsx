import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";

import FluidCursor from "./FluidCursor";

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
          name="description"
          content="Software Engineer and Content Creator"
        />
      </Helmet>
      <div className="bg-black font-sans min-h-screen">{children}</div>
      <FluidCursor />
    </>
  );
};

export default RootLayout;
