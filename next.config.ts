import type { NextConfig } from "next";

const repoName = "personal-portfolio";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const assetPrefix = process.env.ASSET_PREFIX?.replace(/\/$/, "") || undefined;

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/**",
      },
    ],
  },
  ...(isGithubPages
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : assetPrefix
      ? { assetPrefix: `${assetPrefix}/` }
      : {}),
};

export default nextConfig;
