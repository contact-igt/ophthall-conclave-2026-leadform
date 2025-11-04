import { useAuth } from "@/redux/selectors/auth/authSelector";
import Head from "next/head";
import React from "react";

export const MetaTitle = ({ title, description, keywords }) => {
  const { conferenceDetails } = useAuth();
  const defaultTitle = `${conferenceDetails?.title}`;
  const defaultDescription =
    `${conferenceDetails?.description}`;
  const defaultKeywords =
    `${conferenceDetails?.description}`;

  return (
    <Head>
      <link rel="icon" href="/assets/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/apple-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/web-app-manifest-512x512.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/web-app-manifest-192x192.png"
      />
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
    </Head>
  );
};
