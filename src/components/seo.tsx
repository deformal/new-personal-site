import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

type Seo = {
  title?: string;
  description?: string;
  pathname?: string;
  children?: any;
};

export const SEO = ({ title, description, pathname, children }: Seo) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="url" content={seo.url} />
      <link
        rel="icon"
        type="image/x-icon"
        href="https://wave-runner.s3.ap-south-1.amazonaws.com/gitProfile.ico"
      />
      <link rel="icon" type="image/x-icon" href="https://github.com/deformal" />
      {children}
    </>
  );
};
